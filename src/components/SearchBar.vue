<!-- <script>
import axios from 'axios';

export default {
    name: "SearchBar",
    data() {
        return {
            latitude: '',
            longitude: '',
            query: '',
            suggestions: [],
            radius: '' // Raggio di ricerca in km
        }
    },
    methods: {
        // Funzione asincrona per cercare suggerimenti di indirizzo
        async searchAddress() {
            // Verifica se la lunghezza della query è maggiore di 1
            if (this.query.length > 1) {
                // Chiave API per accedere al servizio TomTom
                const apiKey = 'tNdeH4PSEGzxLQ1CKK0HdCagLd1BsXSc';
                // Costruzione dell'URL per la ricerca degli indirizzi tramite TomTom API
                const url = `https://api.tomtom.com/search/2/search/${this.query}.json?key=${apiKey}&countrySet=IT`;
                try {
                    // Effettua una richiesta GET asincrona all'API TomTom
                    const response = await axios.get(url);
                    // Assegna i risultati della ricerca agli suggerimenti
                    this.suggestions = response.data.results;
                } catch (error) {
                    // Gestisce gli errori durante il fetch dei suggerimenti
                    console.error('Errore durante il fetch dei suggerimenti:', error);
                }
            } else {
                // Se la lunghezza della query non è maggiore di 1, svuota gli suggerimenti
                this.suggestions = [];
            }
        },

        // Funzione per selezionare un suggerimento di indirizzo
        selectSuggestion(suggestion) {
            // Imposta la latitudine basata sulla posizione del suggerimento
            this.latitude = suggestion.position.lat;
            // Imposta la longitudine basata sulla posizione del suggerimento
            this.longitude = suggestion.position.lon;
            // Imposta la query con l'indirizzo libero del suggerimento
            this.query = suggestion.address.freeformAddress;
            // Svuota l'array dei suggerimenti
            this.suggestions = [];
        },

        // Funzione per ottenere la ricerca degli appartamenti
        getSearchApartment() {
            // Reindirizza alla route "apartments"
            this.$router.push({ name: 'apartments' });
            // Emette un evento con tutti i parametri di ricerca
            this.$emit('search-apartments', {
                latitude: this.latitude,
                longitude: this.longitude,
                radius: this.radius
            });
        }
    }

}
</script>

<template>
    <div class="text-center search-bar-container text-cente p-4 mt-5 mx-auto custom rounded-4">
        <label class="form-label"><strong>Cerca il tuo appartamento</strong></label>
        <input type="text" class="form-control" id="address" name="address" v-model="query" @input="searchAddress"
            autocomplete="off" />

        <ul v-if="suggestions.length" class="list-group mt-2">
            <li v-for="(suggestion, index) in suggestions" :key="index" class="list-group-item list-group-item-action"
                @click="selectSuggestion(suggestion)">
                {{ suggestion.address.freeformAddress }}
            </li>
            
        </ul>

        <label for="radius" class="form-label mt-2">Raggio (km)</label>
        <input type="number" class="form-control" id="radius" v-model.number="radius" />

        // Pulsante di ricerca 
        <button class="btn btn-primary mt-3" @click="getSearchApartment()">Cerca</button>
        // <router-link class="btn btn-primary mt-3" @click="getSearchApartment()" :to="{ name: 'apartments' }">Cerca</router-link> 
    </div>
</template>

<style lang="scss" scoped>
.list-group-item-action {
    cursor: pointer;
}
.custom {
    max-width: 70%;
}
</style> -->

<script>
import axios from 'axios';

export default {
    name: "SearchBar",
    data() {
        return {
            latitude: '',
            longitude: '',
            query: '',
            suggestions: [],
            radius: '' // Raggio di ricerca in km
        }
    },
    methods: {
        // Funzione asincrona per cercare suggerimenti di indirizzo
        async searchAddress() {
            if (this.query.length > 1) {
                const apiKey = 'tNdeH4PSEGzxLQ1CKK0HdCagLd1BsXSc';
                const url = `https://api.tomtom.com/search/2/search/${this.query}.json?key=${apiKey}&countrySet=IT`;
                try {
                    const response = await axios.get(url);
                    this.suggestions = response.data.results;
                } catch (error) {
                    console.error('Errore durante il fetch dei suggerimenti:', error);
                }
            } else {
                this.suggestions = [];
            }
        },

        // Funzione per selezionare un suggerimento di indirizzo
        selectSuggestion(suggestion) {
            this.latitude = suggestion.position.lat;
            this.longitude = suggestion.position.lon;
            this.query = suggestion.address.freeformAddress;
            this.suggestions = [];
        },

        // Funzione per ottenere la ricerca degli appartamenti
        getSearchApartment() {
            // Reindirizza alla route "apartments" con i parametri di ricerca nella query string
            this.$router.push({
                name: 'apartments',
                query: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    radius: this.radius
                }
            });
        }
    }
}
</script>

<template>
    <div class="text-center search-bar-container text-cente p-4 mt-5 mx-auto custom rounded-4">
        <label class="form-label"><strong>Cerca il tuo appartamento</strong></label>
        <input type="text" class="form-control" id="address" name="address" v-model="query" @input="searchAddress" autocomplete="off" />

        <ul v-if="suggestions.length" class="list-group mt-2">
            <li v-for="(suggestion, index) in suggestions" :key="index" class="list-group-item list-group-item-action" @click="selectSuggestion(suggestion)">
                {{ suggestion.address.freeformAddress }}
            </li>
        </ul>

        <label for="radius" class="form-label mt-2">Raggio (km)</label>
        <input type="number" class="form-control" id="radius" v-model.number="radius" />

        <button class="btn btn-primary mt-3 w-100" @click="getSearchApartment()">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
.list-group-item-action {
    cursor: pointer;
}
.custom {
    max-width: 70%;
    background: #ffffff2a;
    box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
    backdrop-filter: blur(8px) saturate(120%);
    border: none;
}

</style>


