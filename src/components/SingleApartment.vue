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
        contactOwner() {
            this.$router.push({ name: 'contact-owner', params: { apartmentId: this.apartmentInfo.id } });
        }
    }
}
</script>

<template>
    <div class="col">
        <div v-if="!loading" class=" my-3 h-100">
            <div class="w-100 wrapper-img">
                <router-link :to="{ name: 'details-apartment', params: { slug: apartmentInfo.slug } }"
                class=" mb-2 position-absolute h-100 w-100"></router-link>
                <img :src="apartmentInfo.thumb" alt="Thumbnail" class="w-100 h-100 rounded-3" >
            </div>
            <div class="card-text">
                <h5 class="card-body fs-6 mt-2 mb-0">{{ apartmentInfo.title }}</h5>
                <div>
                    <small>Host:{{apartmentInfo.users.name}}</small>
                </div>
                <h6 v-if=" apartmentInfo.visibility == 0">Non disponibile</h6>
                <h6 v-if=" apartmentInfo.visibility == 1">disponibile </h6>
            </div>
        </div>
        <Loader v-else />
    </div>
</template>


<style scoped>
/* Stili specifici per il componente se necessario */
.card {
    margin: 0 auto;
    /* Center the card horizontally */
}

.wrapper-img {
    height: 250px;
}

.wrapper-img img {
    object-fit: cover;
}
</style>
