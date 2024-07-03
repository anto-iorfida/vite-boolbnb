<script>
import axios from 'axios';

export default {
    name: 'DetailsApartment',
    data() {
        return {
            apartment: null
        };
    },
    methods: {
        getApartmentDetails() {
            axios.get(`http://127.0.0.1:8000/api/apartments/${this.$route.params.slug}`)
                .then((response) => {
                    this.apartment = response.data.apartment;
                    console.log(this.apartment);
                });
        }
    },
    mounted() {
        this.getApartmentDetails();
    }
}
</script>

<template>
    <div class="container">
        <div v-if="apartment">
            <div class="card">
                <div class="card-header">
                    <h3>{{ apartment.title  }}</h3>
                    <h3>{{ console.log(this.apartment)
                     }}</h3>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p v-if="apartment.description">
                            {{ apartment.description }}
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</template>
