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
                    console.log(response.data.apartment)
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
                    <h3>{{ apartment.title }}</h3>
                </div>
                <div class="card-body">
                    <div class="row my-img-wrapper ">
                        <div v-if="apartment.thumb" class="my-img-wrapper col-12 col-lg-6 mt-1 mb-3">
                            <img :src="apartment.thumb" alt="thumb" class="rounded-4">
                        </div>
                        <div class="col-6 d-none d-lg-flex" v-for="singleimage in apartment.albums">
                            <div class="row h-100 justify-content-between g-3">
                                <div class="col-6">
                                    <img :src="singleimage.image" alt="" class="w-100 h-100 rounded-4">
                                </div>
                                <div class="col-6">
                                    <img :src="singleimage.image" alt="" class="w-100 h-100 rounded-4">
                                </div>
                                <div class="col-6">
                                    <img :src="singleimage.image" alt="" class="w-100 h-100 rounded-4">
                                </div>
                                <div class="col-6">
                                    <img :src="singleimage.image" alt="" class="w-100 h-100 rounded-4">
                                </div>
                            </div>
                        </div>
                    </div>
                    <blockquote class="blockquote mt-4 w-50 border-bottom pb-3">
                        <p class="mb-0"><strong>{{ apartment.address }}</strong> </p>
                        <div class="mb-4 fs-6">
                            <span><small>{{ apartment.number_beds}} letti·</small></span>
                            <span><small>{{ apartment.number_rooms}} camere da letto ·</small></span>
                            <span><small>{{ apartment.number_baths}} bagni</small></span>
                        </div>
                        <div class="d-flex align-items-start gap-3 border-bottom pb-3">
                            <div
                                class="rounded-pill p-2 bg-dark border border-white border-3 d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-user text-white"></i>
                            </div>
                            <div>
                                <div class="fs-6 fw-semibold">Nome dell'host: <span>{{ apartment.users.name
                                        }}</span>
                                </div>
                                <div class="fs-6 fw-normal">4 anni di esperienza</div>
                            </div>
                        </div>
                        <div  class="border-bottom pb-4">
                            <h5 class="pt-2">Servizi offerti dall'host</h5>
                            <div v-for="singleservice in apartment.services"  class="mt-3 d-flex gap-2 align-items-center fs-6 fw-semibold ">
                            <i :class="singleservice.icon"></i>
                            <div>{{ singleservice.name }}</div>
                        </div>
                        </div>
                        <p v-if="apartment.description" class="fs-6 mt-2">
                            <strong>Descrizione:</strong> {{ apartment.description }}
                        </p>
                        <p class="fs-6"><strong >Indirizzo:</strong> {{ apartment.address }}</p>
                        <h6 v-if=" apartment.visibility == 0">Appartamento non disponibile</h6>
                        <h6 v-if=" apartment.visibility == 1">Appartamento disponibile </h6>
                    </blockquote>
                    <div>
                        <h5>Questi sono le caratteristiche complete dell'appartamento :</h5>
                        <div class="row row-cols-6">
                            <div class="col">
                                <div class="card text-center p-1 ">
                                    <div>
                                        <div>
                                            <i class="fa-solid fa-bath"></i>
                                        </div>
                                        <div>
                                            bagni
                                        </div>
                                        {{ apartment.number_baths}}
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-center p-1 ">
                                    <div>
                                        <div>
                                            <i class="fa-solid fa-bed"></i>
                                        </div>
                                        <div>
                                          letti
                                        </div>
                                        {{ apartment.number_beds }}
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-center p-1 ">
                                    <div>
                                        <div >
                                            <i class="fa-solid fa-house"></i>
                                        </div>
                                        <div>
                                            camere
                                        </div>
                                        {{ apartment.number_beds}}
                                    </div>
                                </div>
                            </div>
                            <div class="col " v-if="apartment.square_meters">
                                <div class="card text-center p-1 ">
                                    <div>
                                        <div >
                                            <i class="fa-solid fa-ruler-combined"></i>
                                        </div>
                                        <div>
                                           MetriQuadri
                                        </div>
                                        {{ apartment.square_meters}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <div v-if="success" class="alert alert-success">Messaggio inviato con successo!</div>
                <div v-else>
                    <h2>Contatta il Proprietario</h2>
                    <div v-if="error" class="alert alert-danger">{{ error }}</div>
                    <form @submit.prevent="sendMessage">
                        <div class="mb-3">
                            <input v-model="name_lastname" type="text" class="form-control"
                                placeholder="Nome e Cognome">
                        </div>
                        <div class="mb-3">
                            <input v-model="email_sender" type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="mb-3">
                            <textarea v-model="body" class="form-control" rows="5"
                                placeholder="Scrivi il tuo messaggio..."></textarea>
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



.my-img-wrapper>img {

    height: 500px;
    width: 100%;
    object-fit: cover;
}
</style>
