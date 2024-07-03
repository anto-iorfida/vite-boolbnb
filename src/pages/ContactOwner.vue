<script>
import axios from 'axios';

export default {
    name: 'ContactOwner',
    data() {
        return {
            name_lastname: '',
            email_sender: '',
            body: '',
            sending: false,
            success: false,
            error: null
        };
    },
    methods: {
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
                apartment_id: this.$route.params.apartmentId
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
    }
}
</script>


<template>
    <div class="container">
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
</template>

<style scoped>
/* Stili aggiuntivi per il componente se necessario */
</style>
