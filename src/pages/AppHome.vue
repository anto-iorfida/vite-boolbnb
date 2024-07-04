<script>
import AppHero from '../components/AppHero.vue';
import SearchBar from '../components/SearchBar.vue';
import ApartmentList from './ApartmentList.vue';

export default {
    name: 'AppHome',
    components: {
        AppHero,
        SearchBar
    }
}
</script>

<template>

    <AppHero  class="ms-position-rel"></AppHero>

    <SearchBar class="ms-position-abs"></SearchBar>

    <div class="container">
        <h1>Ciao sono la homepage</h1>
    </div>
</template>

<style scoped lang='scss'>

.ms-position-rel {
    position: relative;
}

.ms-position-abs {
    width: 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>