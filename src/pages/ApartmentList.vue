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
        '$route.query': {
            handler(newQuery) {
                if (newQuery.latitude && newQuery.longitude && newQuery.radius) {
                    this.searchApartments(newQuery);
                }
            },
            immediate: true
        }
    },

    methods: {
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
                        services: searchParams.services
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
    },
};
</script>

<template>
    <div class="container">
        <SearchBar @search-apartments="searchApartments"></SearchBar>
        <h2 class="text-center mt-5">Tutti gli appartamenti</h2>
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
