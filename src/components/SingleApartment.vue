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
    data() {
        return {

        }
    },
    methods: {
        troncateText(text) {

            if (text.length > 100) {
                return text.substr(0, 99) + '...';
            }
        }
    }
}
</script>

<template>

    <div class="col">
        <div v-if="!loading" class="card my-3" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">{{ apartmentInfo.title }}</h4>
                
                {{ console.log(this.apartmentInfo)}}

                <router-link :to="{ name: 'details-apartment', params: { slug: apartmentInfo.slug } }"
                    class="btn btn-primary">Info</router-link>
            </div>
        </div>

        <Loader v-else  ></Loader>

    </div>
</template>

<style lang="scss" scoped></style>