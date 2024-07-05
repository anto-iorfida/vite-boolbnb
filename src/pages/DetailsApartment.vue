<script>
import axios from 'axios';

export default {
    name: 'DetailsApartment',
    data() {
        return {
            apartment: null,
            name_lastname: '',
            email_sender: '',
            body: '',
            sending: false,
            success: false,
            error: null
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
        },
        sendMessage() {
            // Esegui la validazione dei campi obbligatori lato client, se necessario
            if (!this.name_lastname || !this.email_sender || !this.body) {
                this.error = 'Compila tutti i campi obbligatori.';
                return;
            }

            // Imposta il flag di invio a true per disabilitare il pulsante di invio
            this.sending = true;

            // Esegui la richiesta POST con Axios
            axios.post(`http://127.0.0.1:8000/api/apartment/messages`, {
                name_lastname: this.name_lastname,
                email_sender: this.email_sender,
                body: this.body,
                apartment_id: this.apartment.id
            })
            .then((response) => {
                // Gestisci la risposta di successo
                console.log('Messaggio inviato con successo', response);
                this.success = true;
                this.sending = false;
            })
            .catch((error) => {
                // Gestisci l'errore di Axios
                console.error('Errore durante l\'invio del messaggio:', error);
                this.error = 'Errore durante l\'invio del messaggio.';
                this.sending = false;
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
            <div class="mt-5">
                <div class="card-header mb-2 my-img-wrapper">
                    <h3 >{{ apartment.title }}</h3>
                </div>
                <div class="card-body">
                    <div v-if="apartment.thumb">
                        <img :src="apartment.thumb" alt="thumb" class="rounded-4">
                    </div>
                    <blockquote class="blockquote mt-4">
                        <p v-if="apartment.description">
                            <strong>Descrizione:</strong> {{ apartment.description }}
                        </p>
                        <p><strong>Slug:</strong> {{ apartment.slug }}</p>
                        <p><strong>Data di Creazione:</strong> {{ apartment.created_at }}</p>
                        <p><strong>Data di Modifica:</strong> {{ apartment.updated_at }}</p>
                        <p><strong>Numero di Camere:</strong> {{ apartment.number_rooms }}</p>
                        <p><strong>Numero di Letti:</strong> {{ apartment.number_beds }}</p>
                        <p><strong>Numero di Bagni:</strong> {{ apartment.number_baths }}</p>
                        <p><strong>Metri Quadrati:</strong> {{ apartment.square_meters }}</p>
                        <p><strong>Indirizzo:</strong> {{ apartment.address }}</p>
                        <p><strong>Visibilità:</strong> {{ apartment.visibility ? 'Visibile' : 'Non Visibile' }}</p>
                        <div v-if="apartment.images && apartment.images.length > 0">
                            <h5>Immagini:</h5>
                            <div v-for="(image, index) in apartment.images" :key="index">
                                <img :src="image.url" alt="Apartment Image" style="max-width: 100%; height: auto;">
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
            
            <div class="mt-5">
                <div v-if="success" class="alert alert-success">Messaggio inviato con successo!</div>
                <div v-else>
                    <h2>Contatta il Proprietario</h2>
                    <div v-if="error" class="alert alert-danger">{{ error }}</div>
                    <form @submit.prevent="sendMessage">
                        <div class="mb-3">
                            <input v-model="name_lastname" type="text" class="form-control" placeholder="Nome e Cognome">
                        </div>
                        <div class="mb-3">
                            <input v-model="email_sender" type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="mb-3">
                            <textarea v-model="body" class="form-control" rows="5" placeholder="Scrivi il tuo messaggio..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" :disabled="sending">
                            {{ sending ? 'Invio...' : 'Invia Messaggio' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
/* Stili aggiuntivi per il componente se necessario */
.my-img-wrapper img{
    
    height: 500px;
    width: 100%;
}
</style>
