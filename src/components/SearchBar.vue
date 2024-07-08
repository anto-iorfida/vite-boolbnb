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
            radius: '',
            active: true,
            services: [
                { id: 1, name: 'Wi-Fi', icon: 'fa-wifi' },
                { id: 2, name: 'Aria condizionata', icon: 'fa-snowflake' },
                { id: 3, name: 'Colazione', icon: 'fa-coffee' },
                { id: 4, name: 'TV a schermo piatto', icon: 'fa-tv' },
                { id: 5, name: 'Cucina attrezzata', icon: 'fa-utensils' },
                { id: 6, name: 'Lavatrice', icon: 'fa-washer' },
                { id: 7, name: 'Asciugatrice', icon: 'fa-dryer' },
                { id: 8, name: 'Posto auto', icon: 'fa-parking' },
                { id: 9, name: 'Piscina', icon: 'fa-swimming-pool' },
                { id: 10, name: 'Palestra', icon: 'fa-dumbbell' },
                { id: 11, name: 'Vista sul mare', icon: 'fa-water' },
                { id: 12, name: 'Portiere', icon: 'fa-door-open' },
                { id: 13, name: 'Animali domestici ammessi', icon: 'fa-paw' }
            ],
            selectedServices: [] // Array per memorizzare i servizi selezionati
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

        // Funzione per attivare/disattivare i filtri di ricerca
        toggleFilterServices() {
            this.active = !this.active;
        },

        // Funzione per gestire la selezione dei servizi
        toggleService(service) {
            const index = this.selectedServices.indexOf(service);
            if (index === -1) {
                this.selectedServices.push(service);
            } else {
                this.selectedServices.splice(index, 1);
            }
        },

        // Funzione per eseguire la ricerca degli appartamenti
        getSearchApartment() {
            // Reindirizza alla route "apartments" con i parametri di ricerca nella query string
            this.$router.push({
                name: 'apartments',
                query: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    radius: this.radius,
                    services: this.selectedServices.map(services => services.name).join(',')
                }
            });
        }
    }
}
</script>

<template>
    <div class="text-center search-bar-container p-4 mt-5 mx-auto custom rounded-4">
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
                <label for="radius" class="form-label"><strong>Raggio (km)</strong></label>
                <input type="number" class="form-control" id="radius" v-model.number="radius" />
            </div>
        </div>

        <!-- Filtri -->
        <div>
            <div @click="toggleFilterServices" class="d-flex align-items-center justify-content-center gap-2 border w-25 mt-2 rounded-3 p-2 text-black btn">
                <i class="fa-solid fa-list"></i>
                <div>Filtri</div>
            </div>
        </div>

        <!-- Elenco dei servizi -->
        <ul class="my-ul-list" v-if="!active">
            <li v-for="service in services" :key="service.id">
                <label :for="'service-' + service.id" class="form-check-label d-flex align-items-center">
                    <input type="checkbox" :id="'service-' + service.id" class="form-check-input" v-model="selectedServices" :value="service">
                    <span>{{ service.name }}</span>
                    <span class="ms-2"><i class="fa-solid {{ service.icon }}"></i></span>
                </label>
            </li>
        </ul>

        <!-- Bottone di ricerca -->
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
