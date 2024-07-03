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
      radius: 200, // Raggio di ricerca in km
      minPrice: '',
      maxPrice: '',
      rooms: '',
      showAdvancedFilters: false // Flag per mostrare/nascondere i filtri avanzati
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
          console.error('Error fetching suggestions:', error);
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

    async getSearchApartment() {
      const params = {
        latitude: this.latitude,
        longitude: this.longitude,
        radius: this.radius,
        min_price: this.minPrice,
        max_price: this.maxPrice,
        rooms: this.rooms
      };

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/apartments', { params });
        this.$emit('update-apartments', response.data.result);
      } catch (error) {
        console.error('Error fetching apartments:', error);
      }
    },

    toggleAdvancedFilters() {
      this.showAdvancedFilters = !this.showAdvancedFilters;
    }
  }
}
</script>

<template>
  <div class="search-bar-container text-center bg-dark p-4">
    <label class="form-label text-white"><strong>Cerca il tuo appartamento</strong></label>
    <input type="text" class="form-control" id="address" name="address" v-model="query" @input="searchAddress" autocomplete="off" />

    <ul v-if="suggestions.length" class="list-group mt-2">
      <li v-for="(suggestion, index) in suggestions" :key="index" class="list-group-item list-group-item-action" @click="selectSuggestion(suggestion)">
        {{ suggestion.address.freeformAddress }}
      </li>
    </ul>

    <!-- Bottone per mostrare/nascondere i filtri avanzati -->
    <button class="btn btn-link text-white" @click="toggleAdvancedFilters">
      {{ showAdvancedFilters ? 'Nascondi filtri' : 'Mostra filtri' }}
    </button>

    <!-- Campi dei filtri avanzati -->
    <div v-if="showAdvancedFilters" class="mt-3">
      <label for="radius" class="form-label text-white">Raggio (km)</label>
      <input type="number" class="form-control" id="radius" v-model.number="radius" />

      <label for="minPrice" class="form-label text-white mt-2">Prezzo Minimo</label>
      <input type="number" class="form-control" id="minPrice" v-model.number="minPrice" />

      <label for="maxPrice" class="form-label text-white mt-2">Prezzo Massimo</label>
      <input type="number" class="form-control" id="maxPrice" v-model.number="maxPrice" />

      <label for="rooms" class="form-label text-white mt-2">Stanze</label>
      <input type="number" class="form-control" id="rooms" v-model.number="rooms" />

      <!-- Pulsante di ricerca -->
      <button class="btn btn-primary mt-3" @click="getSearchApartment()">Cerca</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-group-item-action {
  cursor: pointer;
}
</style>
