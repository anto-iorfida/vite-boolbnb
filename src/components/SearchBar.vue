<script>
import axios from 'axios';

export default {
    name: "SearchBar",
    data() {
        return {
            latitude: this.$route.query.latitude || '',
            longitude: this.$route.query.longitude || '',
            query: this.$route.query.query || '',
            suggestions: [],
            radius: this.$route.query.radius || '',
            number_beds: this.$route.query.number_beds || '',
            number_baths: this.$route.query.number_baths || '',
            services: [
                { name: 'Wi-Fi', icon: 'fa-solid fa-wifi' },
                { name: 'Aria condizionata', icon: 'fa-solid fa-wind' },
                { name: 'Colazione', icon: 'fa-solid fa-bread-slice' },
                { name: 'TV a schermo piatto', icon: 'fa-solid fa-tv' },
                { name: 'Cucina attrezzata', icon: 'fa-solid fa-utensils' },
                { name: 'Lavatrice', icon: 'fi fi-rs-washer' },
                { name: 'Asciugatrice', icon: 'fi fi-rs-dryer-alt' },
                { name: 'Posto auto', icon: 'fa-solid fa-parking' },
                { name: 'Piscina', icon: 'fa-solid fa-swimming-pool' },
                { name: 'Palestra', icon: 'fa-solid fa-dumbbell' },
                { name: 'Vista sul mare', icon: 'fa-solid fa-water' },
                { name: 'Portiere', icon: 'fa-solid fa-door-open' },
                { name: 'Animali domestici ammessi', icon: 'fa-solid fa-dog' }
            ],
            selectedServices: this.$route.query.services ? this.$route.query.services.split(',') : [],
            active: true
        }
    },
    methods: {
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

        selectSuggestion(suggestion) {
            this.latitude = suggestion.position.lat;
            this.longitude = suggestion.position.lon;
            this.query = suggestion.address.freeformAddress;
            this.suggestions = [];
        },

        getSearchApartment() {
            const queryParams = {
                latitude: this.latitude,
                longitude: this.longitude,
                radius: this.radius,
                query: this.query,
                services: this.selectedServices.join(',')
            };

            if (this.number_beds) {
                queryParams.number_beds = this.number_beds;
            }

            if (this.number_baths) {
                queryParams.number_baths = this.number_baths;
            }

            this.$router.push({
                name: 'apartments',
                query: queryParams
            });
        },

        getFilterServices() {
            this.active = false;
        },

        closeFilters() {
            this.active = true;
        }
    }
}
</script>

<template>
    <div class="text-center search-bar-container text-center p-4 mt-5 mx-auto custom rounded-4">
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
        <div class="text-center mt-3">
            <div @click="active ? getFilterServices() : closeFilters()"
                class="d-flex align-items-center justify-content-center gap-2 border mt-2 rounded-3 p-2 text-black btn">
                <i :class="{'fa-solid fa-list': active, 'fa-solid fa-x': !active}"></i>
                <div>Filtri</div>
            </div>
        </div>
        <ul class="my-ul-list" v-if="!active">
            <li>
                <label for="number_beds" class="form-label"><strong>Numero minimo di letti *</strong></label>
                <input type="number" class="form-control" id="number_beds" min="0" v-model.number="number_beds">
            </li>
            <li>
                <label for="number_baths" class="form-label"><strong>Numero minimo di bagni *</strong></label>
                <input type="number" class="form-control" id="number_baths" min="0" v-model.number="number_baths">
            </li>
        </ul>
        <div class="mt-3" v-if="!active">
            <h5 class="text-center">Seleziona Servizi:</h5>
            <div v-for="(service, index) in services" :key="index" class="form-check d-flex align-items-center">
                <input class="form-check-input" type="checkbox" :id="'service' + index" :value="service.name" v-model="selectedServices">
                <label class="form-check-label d-flex align-items-center" :for="'service' + index">
                    <i :class="service.icon"></i>
                    {{ service.name }}
                </label>
            </div>
        </div>
        <button class="btn btn-primary mt-3 w-100" @click="getSearchApartment">Cerca</button>
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

/* Stile generico per l'icona */
.form-check-label i {
    margin: 0 10px;
    color: rgb(0, 58, 248);
}
</style>
