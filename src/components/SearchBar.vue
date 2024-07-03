<script>
import axios from 'axios';

export default {
    name: "SearchBar",
    data() {
        return {
            latitude: '',
            longitude: '',
            query: '',
            suggestions: []
        }
    },
    methods: {
        async searchAddress() {
            // Se la lunghezza della query è maggiore di 1 carattere, procede con la ricerca
            if (this.query.length > 1) {
                // Chiave API per TomTom
                const apiKey = 'tNdeH4PSEGzxLQ1CKK0HdCagLd1BsXSc';
                // Costruisce l'URL per la richiesta all'API di TomTom, usando la query dell'utente e la chiave API
                const url = `https://api.tomtom.com/search/2/search/${this.query}.json?key=${apiKey}&countrySet=IT`;
                try {
                    // Fa una richiesta GET all'URL specificato
                    const response = await axios.get(url);
                    // Se la richiesta ha successo, aggiorna l'array delle suggestioni con i risultati ottenuti
                    this.suggestions = response.data.results;
                } catch (error) {
                    // In caso di errore nella richiesta, stampa l'errore nella console
                    console.error('Error fetching suggestions:', error);
                }
            } else {
                // Se la query è lunga meno di 2 caratteri, svuota l'array delle suggestioni
                this.suggestions = [];
            }
        },

        selectSuggestion(suggestion) {
            // Aggiorna la variabile 'latitude' con la latitudine della suggerimento selezionato
            this.latitude = suggestion.position.lat;
            // Aggiorna la variabile 'longitude' con la longitudine della suggerimento selezionato
            this.longitude = suggestion.position.lon;
            // Aggiorna la query con l'indirizzo completo del suggerimento selezionato
            this.query = suggestion.address.freeformAddress;
            // Svuota l'array delle suggestioni dopo la selezione
            this.suggestions = [];
        },

        getSearchApartment() {
            
        }
    }
}
</script>

<template>
    <div class="search-bar-container text-center bg-dark p-4 ">
        <label class="form-label text-white"><strong>Cerca il tuo appartamento {{ console.log(this.latitude,
            this.longitude) }}</strong></label>
        <input type="text" class="form-control" id="address" name="address" v-model="query" @input="searchAddress"
            autocomplete="off" />

        <ul v-if="suggestions.length" class="list-group mt-2">
            <li v-for="(suggestion, index) in suggestions" :key="index" class="list-group-item list-group-item-action"
                @click="selectSuggestion(suggestion)">
                {{ suggestion.address.freeformAddress }}
            </li>
        </ul>

        <button class="search-button" @click="getSearchApartment()">Cerca</button>
    </div>
</template>


<style lang="scss" scoped>
.list-group-item-action {
    cursor: pointer;
}
</style>