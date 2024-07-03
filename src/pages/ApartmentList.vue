<script>
import axios from 'axios';
import SingleApartment from '../components/SingleApartment.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
    name: "ApartmentList",
    components: {
        SingleApartment,
        SearchBar
    },
    data() {
        return {
            apartments: [],
            loading: false,
        };
    },
    methods: {
        getApartments() {
            this.loading = true;

            axios.get('http://127.0.0.1:8000/api/apartments', {

            })

                .then((response) => {
                    this.apartments = response.data.result;
                    console.log(this.apartments);
                    this.loading = false;
                });
        }

    },
    mounted() {
        this.getApartments(this.currentPage);
    }
}
</script>

<template>
    <div class="container">
        <SearchBar></SearchBar>
        
        <h2>Tutti gli appartamenti</h2>

        <div class="row my-5">
            <SingleApartment 
                v-for="apartment in apartments" 
                :key="apartment.id" 
                :apartmentInfo="apartment" 
                :loading="loading" 
                class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            ></SingleApartment>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>