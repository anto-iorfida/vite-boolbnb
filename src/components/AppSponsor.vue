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
                console.log('API Response:', response.data.result); // Aggiungi log per la risposta API<---------------------------------------------------------
                this.apartments = response.data.result;

            } catch (error) {
                console.error('Errore durante il fetch degli appartamenti:', error);
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<template>
    <h2>Appartamenti in vista</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <SingleApartment v-for="apartment in apartments" :key="apartment.id" :apartmentInfo="apartment" :loading="loading"></SingleApartment>
    </div>
</template>

<style lang="scss" scoped></style>
