<script>
export default {
    name: "AppHeader",
    data() {
        return {

        }
    }
}
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">BOOLBNB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" :to="{ name: 'about' }">About</router-link>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li> -->
            </ul>
        </div>
    </div>
</nav>


</template>

<style lang="scss" scoped>

</style>