<script>
import AppHero from '../components/AppHero.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
    name: 'AppHome',
    components: {
        AppHero,
        SearchBar,
    }
}
</script>

<template>

    <AppHero  class="ms-position-rel"></AppHero>

    <SearchBar class="ms-position-abs"></SearchBar>

    <div class="container">
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