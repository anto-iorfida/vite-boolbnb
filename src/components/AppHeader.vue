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

    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid fw-bold">
            <span><a class="navbar-brand text" href="#">BOOLBNB</a></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto fw-bold  ">
                    <li class="nav-item">
                        <router-link class="nav-link active text" aria-current="page"
                            :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link active text " aria-current="page"
                            :to="{ name: 'about' }">About</router-link>
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
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    z-index: 2;
    /* Ensure it stays above the video */
}

li{
    color: inherit;
}

.text{
    color: white !important;
    background-color: green;
    border-radius:20px ;
    font-size: xxx-large;
    margin: 10px;
    padding: 10px;
}
</style>