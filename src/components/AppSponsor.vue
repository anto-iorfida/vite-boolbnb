<script>
import axios from 'axios';
import SingleApartment from './SingleApartment.vue';

export default {
  name: "AppSponsor",
  components: {
    SingleApartment,
  },
  data() {
    return {
      apartments: [],
      loading: false,
      currentPage: 1, // Pagina corrente
      apartmentsPerPage: 6, // Numero di appartamenti sponsorizzati per pagina
    };
  },
  created() {
    this.fetchApartments();
  },
  methods: {
    async fetchApartments() {
      this.loading = true;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/sponsored-apartments');
        console.log('API Response:', response.data.result);
        this.apartments = response.data.result;
      } catch (error) {
        console.error('Errore durante il fetch degli appartamenti sponsorizzati:', error);
      } finally {
        this.loading = false;
      }
    },

    // Imposta la pagina corrente e scrolla all'inizio della pagina
    setPage(page) {
      this.currentPage = page;
    },

    // Funzione per scrollare la pagina all'inizio
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scrolling fluido
      });
    },
  },

  computed: {
    // Calcola il numero totale di pagine basato sul numero di appartamenti e appartamenti per pagina
    totalPages() {
      return Math.ceil(this.apartments.length / this.apartmentsPerPage);
    },

    // Calcola l'indice di inizio per il filtro degli appartamenti sponsorizzati per la pagina corrente
    startIndex() {
      let start = Math.max(1, this.currentPage - 4); // Parti dalla pagina corrente - 4, ma non inferiore a 1
      if (start + 9 > this.totalPages) {
        start = Math.max(1, this.totalPages - 9); // Se gli ultimi 10 numeri non ci stanno nella paginazione, ricalcola start
      }
      return start;
    },

    // Calcola gli indici visibili per i numeri di pagina
    visiblePages() {
      const pageCount = Math.min(5, this.totalPages); // Mostra al massimo 5 numeri di pagina
      return Array.from({ length: pageCount }, (_, index) => this.startIndex + index);
    },

    // Filtra gli appartamenti sponsorizzati per la pagina corrente
    paginatedApartments() {
      const startIndex = (this.currentPage - 1) * this.apartmentsPerPage;
      return this.apartments.slice(startIndex, startIndex + this.apartmentsPerPage);
    },
  },
};
</script>

<template>
  <div class="container-fluid container-md pt-3">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      <SingleApartment v-for="apartment in paginatedApartments" :key="apartment.id" :apartmentInfo="apartment"
                       :loading="loading"></SingleApartment>
    </div>

    <!-- Paginazione per gli appartamenti sponsorizzati -->
    <nav class="mt-4" v-if="apartments.length > 0">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="prevPage" :disabled="currentPage === 1">Previous</button>
        </li>
        <li v-for="page in visiblePages" :key="page" class="page-item" :class="{ active: page === currentPage }">
          <button class="page-link" @click="setPage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>

</style>
