<script>
import axios from 'axios';
import SingleApartment from '../components/SingleApartment.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
    name: 'ApartmentList',

    components: {
        SingleApartment,
        SearchBar,
    },

    data() {
        return {
            apartments: [], // Array per memorizzare gli appartamenti ottenuti dalla ricerca
            loading: false, // Flag per indicare se i dati stanno ancora caricando
        };
    },
    watch: {
    // Osserva i cambiamenti nella proprietà '$route.query' dell'oggetto Vue.
    '$route.query': {
        // La funzione handler viene eseguita ogni volta che '$route.query' cambia.
        handler(newQuery) {
            // Controlla se 'newQuery' contiene le proprietà 'latitude', 'longitude', e 'radius'.
            if (newQuery.latitude && newQuery.longitude && newQuery.radius) {
                // Se tutte le proprietà sono presenti, chiama la funzione 'searchApartments' con 'newQuery' come parametro.
                this.searchApartments(newQuery);
            }
        },
        // L'opzione 'immediate' imposta l'esecuzione della funzione handler immediatamente al caricamento del componente.
        immediate: true
    }
},


    methods: {
        // Metodo per cercare gli appartamenti in base ai parametri di ricerca forniti
        async searchApartments(searchParams) {
            this.loading = true; // Imposta loading su true per indicare che il caricamento è in corso
            console.log('Parametri di ricerca:', searchParams); // Debug dei parametri di ricerca
            try {
                // Effettua una richiesta GET all'API per ottenere gli appartamenti
                const response = await axios.get('http://127.0.0.1:8000/api/apartment/search', {
                    // Passa i parametri di ricerca (latitudine, longitudine e raggio) nella query string
                    params: {
                        latitude: searchParams.latitude,
                        longitude: searchParams.longitude,
                        radius: searchParams.radius
                    },
                });
                // Assegna i risultati ottenuti dalla risposta dell'API all'array apartments
                console.log('Risposta API:', response.data); // Debug della risposta API
                this.apartments = response.data.result; // Supponendo che la chiave sia 'result'
                console.log('Appartamenti trovati:', this.apartments);
            } catch (error) {
                // Logga eventuali errori che si verificano durante la richiesta
                console.error('Errore durante il fetch degli appartamenti:', error);
            } finally {
                // Imposta loading su false per indicare che il caricamento è terminato
                this.loading = false;
            }
        },
    },
};
</script>

<template>
    <div class="container">
        <SearchBar @search-apartments="searchApartments"></SearchBar>
        <h2 class="text-center mt-5">Tutti gli appartamenti</h2>
        <!-- Messaggio per il numero di appartamenti trovati -->
        <p v-if="apartments.length === 1" class="text-info">
            È stato trovato {{ apartments.length }} appartamento.
        </p>
        <p v-else-if="apartments.length > 1" class="text-info">
            Sono stati trovati {{ apartments.length }} appartamenti.
        </p>
        <div class="row row-cols-4 my-5">
            <SingleApartment v-for="apartment in apartments" :key="apartment.id" :apartmentInfo="apartment" :loading="loading"></SingleApartment>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>


