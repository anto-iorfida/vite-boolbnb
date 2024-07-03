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
        <div v-if="!loading" class="card my-3" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">{{ apartmentInfo.title }}</h4>
                
                <img :src="apartmentInfo.thumb" alt="Thumbnail" style="max-width: 100%; height: auto;">

                <router-link :to="{ name: 'details-apartment', params: { slug: apartmentInfo.slug } }"
                    class="btn btn-primary">Info</router-link>
            </div>
        </div>

        <Loader v-else />
    </div>
</template>

<style scoped>
/* Stili specifici per il componente se necessario */
</style>
