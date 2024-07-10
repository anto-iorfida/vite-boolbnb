<script>
import axios from 'axios';
import SingleApartment from '../components/SingleApartment.vue';
import SearchBar from '../components/SearchBar.vue';
import AppSponsor from '../components/AppSponsor.vue';

export default {
  name: 'ApartmentList',

  components: {
    SingleApartment,
    SearchBar,
    AppSponsor,
  },

  data() {
    return {
      apartments: [], // Array per memorizzare gli appartamenti ottenuti dalla ricerca
      loading: false, // Flag per indicare se i dati stanno ancora caricando
      currentPage: 1, // Pagina corrente
      apartmentsPerPage: 12, // Numero di appartamenti per pagina
    };
  },

  computed: {
    // Calcola il numero totale di pagine basato sul numero di appartamenti e appartamenti per pagina
    totalPages() {
      return Math.ceil(this.apartments.length / this.apartmentsPerPage);
    },

    // Calcola l'indice di inizio per il filtro degli appartamenti per la pagina corrente
    startIndex() {
      let start = Math.max(1, this.currentPage - 4); // Parti dalla pagina corrente - 4, ma non inferiore a 1
      if (start + 9 > this.totalPages) {
        start = Math.max(1, this.totalPages - 9); // Se gli ultimi 10 numeri non ci stanno nella paginazione, ricalcola start
      }
      return start;
    },

    // Calcola gli indici visibili per i numeri di pagina
    visiblePages() {
      const pageCount = Math.min(5, this.totalPages); // Mostra al massimo 10 numeri di pagina
      return Array.from({ length: pageCount }, (_, index) => this.startIndex + index);
    },

    // Filtra gli appartamenti per la pagina corrente
    paginatedApartments() {
      const startIndex = (this.currentPage - 1) * this.apartmentsPerPage;
      return this.apartments.slice(startIndex, startIndex + this.apartmentsPerPage);
    },
  },

  watch: {
    // Gestisce il cambio dei parametri di ricerca
    '$route.query': {
      handler(newQuery) {
        if (newQuery.latitude && newQuery.longitude && newQuery.radius) {
          this.searchApartments(newQuery);
        }
      },
      immediate: true,
    },
  },

  methods: {
    // Metodo per la ricerca degli appartamenti
    async searchApartments(searchParams) {
      this.loading = true;
      console.log('Parametri di ricerca:', searchParams);

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/apartment/search', {
          params: {
            latitude: searchParams.latitude,
            longitude: searchParams.longitude,
            radius: searchParams.radius,
            number_beds: searchParams.number_beds,
            number_baths: searchParams.number_baths,
            services: searchParams.services,
          },
        });

        console.log('Risposta API:', response.data);
        this.apartments = response.data.result;
        console.log('Appartamenti trovati:', this.apartments);
      } catch (error) {
        console.error('Errore durante il fetch degli appartamenti:', error);
      } finally {
        this.loading = false;
      }
    },

    // Imposta la pagina corrente e scrolla all'inizio della pagina
    setPage(page) {
      this.currentPage = page;
      this.scrollToTop(); // Chiamata alla funzione di scroll
    },

    // Funzione per scrollare la pagina all'inizio
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scrolling fluido
      });
    },

    // Vai alla pagina precedente
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop(); // Chiamata alla funzione di scroll
      }
    },

    // Vai alla pagina successiva
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop(); // Chiamata alla funzione di scroll
      }
    },
  },
};
</script>

<template>
  <div class="container-fluid container-md pt-4">
    <!-- Barra di ricerca degli appartamenti -->
    <SearchBar @search-apartments="searchApartments" class="my-search-list"></SearchBar>

    <!-- Conteggio degli appartamenti trovati -->
    <p v-if="apartments.length === 1" class="text-info text-center mt-3">
      È stato trovato {{ apartments.length }} appartamento.
    </p>
    <p v-else-if="apartments.length > 1" class="text-info text-center mt-3">
      Sono stati trovati {{ apartments.length }} appartamenti.
    </p>

    <!-- Lista degli appartamenti paginata -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      <SingleApartment v-for="apartment in paginatedApartments" :key="apartment.id" :apartmentInfo="apartment" :loading="loading"></SingleApartment>
    </div>

    <!-- Paginazione -->
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

    <!-- Sezione per gli appartamenti in vista -->
    <div class="col-12">
      <h1 class="text-center display-3 text-nowrap my-4 text-black">Appartamenti in vista</h1>
    </div>

    <!-- Componente sponsor -->
    <AppSponsor class=""></AppSponsor>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 575.99px) {
  .custom {
    margin-top: 50px;
    width: 50%;
  }
}
@media (max-width: 575.98px) {
  .container-fluid {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }
  .custom {
    margin-top: 120px;
    width: 90%;
  }
}
</style>
