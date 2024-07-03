<script>
import Loader from './Loader.vue';

export default {
    name: "SingleApartment",
    components: {
        Loader
    },
    props: {
        apartmentInfo: Object,
        loading: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        truncateText(text) {
            if (text && text.length > 100) {
                return text.substr(0, 100) + '...';
            }
            return text;
        }
    }
}
</script>

<template>
    <div class="col">
        <div v-if="!loading" class="card my-3 h-100" style="width: 100%;">
            <div class="card-body d-flex flex-column">
                <h4 class="card-title">{{ apartmentInfo.title }}</h4>
                <img :src="apartmentInfo.thumb" alt="Thumbnail" class="img-fluid mb-3" style="max-width: 100%; height: auto;">
                <div class="mt-auto">
                    <router-link :to="{ name: 'details-apartment', params: { slug: apartmentInfo.slug } }"
                        class="btn btn-primary w-100">Info</router-link>
                </div>
            </div>
        </div>
        <Loader v-else />
    </div>
</template>

<style scoped>
/* Stili specifici per il componente se necessario */
.card {
    margin: 0 auto; /* Center the card horizontally */
}
.img-fluid {
    max-height: 200px;
    object-fit: cover;
}
</style>
