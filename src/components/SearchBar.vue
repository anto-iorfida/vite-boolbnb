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
            radius: this.$route.query.radius || 20,
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
            active: true,
            filtersVisible: false // Add this line
        }
    },
    created() {
        // Check if query parameters exist to show the filters button on page load
        if (this.$route.query.latitude && this.$route.query.longitude) {
            this.filtersVisible = true;
        }
    },
    methods: {
        async searchAddress() {
            if (this.query.length > 1) {
                const apiKey = 'tNdeH4PSEGzxLQ1CKK0HdCagLd1BsXSc';
                const url = `https://api.tomtom.com/search/2/search/${this.query}.json?key=${apiKey}&countrySet=IT&limit=5`;
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
            }).then(() => {
                this.filtersVisible = true; // Show the filters button after navigation
                this.active = true; // Close the filter dropdown
            });
        },

        getFilterServices() {
            this.active = !this.active;
        },

        closeFilters() {
            this.active = true;
        }
    }
}
</script>

<template>
    <div class="text-center search-bar-container text-center p-4 mx-auto custom rounded-4">
        <div class="mb-4 text-black fw-bolder">
            <h3>Cerca un'appartamento</h3>
        </div>
        <div class="row align-items-center gap-2 gap-md-0">
            <div class="col-12 col-md-6">
                <label class="form-label fs-5">
                    <strong><i class="fa-solid fa-city"></i>  Località</strong>
                </label>
                <input type="text" class="form-control fs-5 fw-semibold rounded-pill" id="address" name="address" v-model="query"
                    @input="searchAddress" autocomplete="off" />
                <ul v-if="suggestions.length" class="list-group mt-2 mb-5 position-absolute my-ul-suggestion">
                    <li v-for="(suggestion, index) in suggestions" :key="index"
                        class="list-group-item my-li" @click="selectSuggestion(suggestion)">
                        <div class="d-flex align-items-center gap-2">
                          <div class="my-i-location">
                            <i class="fa-solid fa-location-dot text-black"></i>
                          </div>
                          {{ suggestion.address.freeformAddress }}
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-6">
                <label for="radius" class="form-label fs-5">
                    <strong class="text-nowrap" ><i class="fa-solid fa-map-location-dot"></i> Raggio (km)</strong>
                </label>
                <input type="number" class="form-control fs-5 fw-semibold rounded-pill" id="radius" v-model.number="radius" />
            </div>
        </div>
        <div class="text-center mt-3" v-if="filtersVisible">
            <div @click="getFilterServices"
                class="d-flex align-items-center justify-content-center gap-2 border mt-2 rounded-3 p-2 text-black btn">
                <i :class="{'fa-solid fa-list': active, 'fa-solid fa-x': !active}"></i>
                <div>Filtri</div>
            </div>
        </div>
        <ul class="my-ul-list px-0 mt-3" v-if="!active">
            <li class="mb-3">
                <label for="number_beds" class="form-label"><strong>Numero minimo di letti *</strong></label>
                <input type="number" class="form-control rounded-pill" id="number_beds" min="0" v-model.number="number_beds">
            </li>
            <li>
                <label for="number_baths" class="form-label"><strong>Numero minimo di bagni *</strong></label>
                <input type="number" class="form-control rounded-pill" id="number_baths" min="0" v-model.number="number_baths">
            </li>
        </ul>
        <div class="mt-3" v-if="!active">
            <h5 class="text-center">Seleziona Servizi:</h5>
            <div v-for="(service, index) in services" :key="index" class="form-check d-flex align-items-center">
                <input class="form-check-input rounded-pill" type="checkbox" :id="'service' + index" :value="service.name" v-model="selectedServices">
                <label class="form-check-label d-flex align-items-center " :for="'service' + index">
                    <i :class="service.icon"></i>
                    {{ service.name }}
                </label>
            </div>
        </div>
        <button class="btn my-btn mt-4 w-100 rounded-pill fw-bold fs-5" @click="getSearchApartment">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
.list-group-item-action {
    cursor: pointer;
}

.custom {
    max-width: 70%;
    background: #ffffff2a;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    backdrop-filter: blur(16px) saturate(120%);
    border: none;
}

ul {
    list-style: none;
}
.my-i-location{
    min-height: 40px;
    min-width: 40px;
    background-color: #DDDDDD;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
}
.my-li:hover{
    background-color:#70c1b4c7;
}
/* Stile generico per l'icona */
.form-check-label i {
    margin: 0 10px;
    color: rgb(0, 58, 248);
}
.my-btn{
    background-color:#70C1B3;
}
.my-btn:hover{
  background-color:#BF3295;
  transition: 0.6s;
  color: white;
}
@media (max-width: 575.98px) { 
   .custom{
    max-width: 80%;
   }
}
.papero{
    z-index: 900!important;
}
</style>
