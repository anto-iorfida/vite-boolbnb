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
    computed: {
        roundedDistance() {
            return this.apartmentInfo.distance.toFixed(1);
        }
    },
    methods: {
        prevSlide() {
            const carousel = new bootstrap.Carousel(document.getElementById('carousel-' + this.apartmentInfo.id));
            carousel.prev();
        },
        nextSlide() {
            const carousel = new bootstrap.Carousel(document.getElementById('carousel-' + this.apartmentInfo.id));
            carousel.next();
        }
    }
}
</script>

<template>
    <router-link :to="{ name: 'details-apartment', params: { slug: apartmentInfo.slug  } }" class="card-link col my-4">
        <div v-if="!loading" :class="['card', 'h-100', 'd-flex', 'flex-column', { 'sponsor': apartmentInfo.sponsors && apartmentInfo.sponsors.length > 0 }]">
            <div class="w-100 wrapper-img">
                <div :id="'carousel-' + apartmentInfo.id" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button v-for="(image, index) in apartmentInfo.albums" :key="index"
                            :data-bs-target="'#carousel-' + apartmentInfo.id" :data-bs-slide-to="index"
                            :class="{ active: index === 0 }"></button>
                    </div>
                    <div class="carousel-inner">
                        <div v-for="(image, index) in apartmentInfo.albums" :key="index"
                            :class="{ 'carousel-item': true, active: index === 0 }">
                            <img :src="index === 0 ? apartmentInfo.thumb : image.image"
                                class="wrapper-img d-block w-100 rounded-3" :alt="'Slide ' + (index + 1)">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button"
                        :data-bs-target="'#carousel-' + apartmentInfo.id" data-bs-slide="prev" @click.stop="prevSlide">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button"
                        :data-bs-target="'#carousel-' + apartmentInfo.id" data-bs-slide="next" @click.stop="nextSlide">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="card-body flex-grow-1 d-flex flex-column justify-content-between">
                <div>
                    <h5 class="fs-6 mt-2">{{ apartmentInfo.title }}</h5>
                    <div>
                        <small>Host: {{ apartmentInfo.users.name }}</small>
                    </div>
                    <div>
                        <small>a {{ roundedDistance  }} Km </small>
                    </div>
                    <div class="services-offered pb-4">
                        <small class="pt-1">Servizi offerti </small>
                        <div class="services-container mt-3 d-flex gap-2 align-items-center fs-6 fw-semibold">
                            <div v-for="singleservice in apartmentInfo.services" :key="singleservice.id"
                                class="d-flex align-items-center">
                                <i :class="singleservice.icon" class="ms-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="availability">
                    <h6 v-if="apartmentInfo.visibility == 0">Non disponibile</h6>
                    <h6 v-if="apartmentInfo.visibility == 1">Disponibile</h6>
                </div>
            </div>
        </div>
        <Loader v-else />
    </router-link>
</template>

<style scoped>
.card {
    border: none;
    background-color: #ffffff;
    border-radius: 10px;
}

.wrapper-img {
    height: 250px;
}

.wrapper-img img {
    object-fit: cover;
}

.services-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.services-container i {
    margin-right: 10px;
}

.card-body {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
}

.availability {
    margin-top: auto;
    border-top: 1px solid #e0e0e0;
    padding-top: 10px;
    text-align: right;
}

.card-link {
    text-decoration: none;
    color: inherit;
}

.card-link:hover {
    text-decoration: none;
    color: inherit;
}

.sponsor{
    border: 4px solid rgb(111, 12, 12);
}
</style>
