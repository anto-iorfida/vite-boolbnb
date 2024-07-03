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
                })
                .catch((error) => {
                    console.error('Error fetching apartment details:', error);
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
                    <h3>{{ apartment.title }}</h3>
                </div>
                <div class="card-body">
                    <div v-if="apartment.thumb">
                        <img :src="apartment.thumb" alt="thumb" style="max-width: 100%; height: auto;">
                    </div>

                    <blockquote class="blockquote mb-0">
                        <p v-if="apartment.description">
                            <strong>Descrizione:</strong> {{ apartment.description }}
                        </p>

                        <p>
                            <strong>Slug:</strong> {{ apartment.slug }}
                        </p>

                        <p>
                            <strong>Data di Creazione:</strong> {{ apartment.created_at }}
                        </p>

                        <p>
                            <strong>Data di Modifica:</strong> {{ apartment.updated_at }}
                        </p>

                        <p>
                            <strong>Numero di Camere:</strong> {{ apartment.number_rooms }}
                        </p>

                        <p>
                            <strong>Numero di Letti:</strong> {{ apartment.number_beds }}
                        </p>

                        <p>
                            <strong>Numero di Bagni:</strong> {{ apartment.number_baths }}
                        </p>

                        <p>
                            <strong>Metri Quadrati:</strong> {{ apartment.square_meters }}
                        </p>

                        <p>
                            <strong>Indirizzo:</strong> {{ apartment.address }}
                        </p>

                        <p>
                            <strong>Visibilità:</strong> {{ apartment.visibility ? 'Visibile' : 'Non Visibile' }}
                        </p>
                        
                        <div v-if="apartment.images && apartment.images.length > 0">
                            <h5>Immagini:</h5>
                            <div v-for="(image, index) in apartment.images" :key="index">
                                <img :src="image.url" alt="Apartment Image" style="max-width: 100%; height: auto;">
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Stili aggiuntivi per il componente se necessario */
</style>
