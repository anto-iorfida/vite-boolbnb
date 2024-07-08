<script>
import axios from 'axios';

export default {
    name: "SearchBar",
    data() {
        return {
            latitude: this.$route.query.latitude || '',
            longitude: this.$route.query.longitude || '',
            query: this.$route.query.query || '',
            latitude: this.$route.query.latitude || '',
            longitude: this.$route.query.longitude || '',
            query: this.$route.query.query || '',
            suggestions: [],
            radius: this.$route.query.radius || '',
            number_beds: this.$route.query.number_beds || '',
            number_baths: this.$route.query.number_baths || '',
            allServices: [
                { name: 'Wi-Fi' },
                { name: 'Aria condizionata' },
                { name: 'Colazione' },
                { name: 'TV a schermo piatto' },
                { name: 'Cucina attrezzata' },
                { name: 'Lavatrice' },
                { name: 'Asciugatrice' },
                { name: 'Posto auto' },
                { name: 'Piscina' },
                { name: 'Palestra' },
                { name: 'Vista sul mare' },
                { name: 'Portiere' },
                { name: 'Animali domestici ammessi' }
            ],
            active: true,
            selectedServices: []
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
        //     getSearchApartment() {
        //         // Reindirizza alla route "apartments" con i parametri di ricerca nella query string
        //         this.$router.push({
        //             name: 'apartments',
        //             query: {
        //                 latitude: this.latitude,
        //                 longitude: this.longitude,
        //                 radius: this.radius,
        //             }

        //     });
        // },
        // Funzione per ottenere la ricerca degli appartamenti
        getSearchApartment() {
            // Reindirizza alla route "apartments" con i parametri di ricerca nella query string
            this.$router.push({
                name: 'apartments',
                query: queryParams
            });
        },


        // funzione per i filitri di ricerca

        getFilterServices() {
            this.active = false
        }
    }
}
</script>

<template>
    <div class="text-center search-bar-container text-cente p-4 mt-5 mx-auto custom rounded-4">
        <div class="d-flex align-items-center gap-3">
            <div class="w-50">
                <label class="form-label"><strong>Cerca il tuo appartamento</strong></label>
                <input type="text" class="form-control position-relative" id="address" name="address" v-model="query"
                    @input="searchAddress" autocomplete="off" />

                <ul v-if="suggestions.length" class="list-group mt-2 mb-5 position-absolute">
                    <li v-for="(suggestion, index) in suggestions" :key="index"
                        class="list-group-item list-group-item-action" @click="selectSuggestion(suggestion)">
                        {{ suggestion.address.freeformAddress }}
                    </li>
                </ul>
            </div>

            <div class="w-50">
                <label for="radius" class="form-label "><strong>Raggio (km)</strong></label>
                <input type="number" class="form-control" id="radius" v-model.number="radius" />
            </div>
        </div>

        <div>
            <div @click=" getFilterServices()"
                class="d-flex align-items-center justify-content-center gap-2 border w-25 mt-2 rounded-3 p-2 text-black btn">
                <i class="fa-solid fa-list"></i>
                <div>Filtri</div>
            </div>
        </div>
        <ul class="my-ul-list" v-if="active == false">
            <li>
                <label for="check">prova</label>
                <input id="check" type="checkbox">
            </li>
        </ul>
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

ul {
    list-style: none;
}
</style>