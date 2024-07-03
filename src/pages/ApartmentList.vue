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
            cordinate:''
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
        
        
        <h2>tutti gli appartamenti</h2>

        <div class="row row-cols-4 my-5">
            <SingleApartment v-for="apartment in apartments" :key="apartment.id" :apartmentInfo="apartment"
                :loading="loading"></SingleApartment>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>

