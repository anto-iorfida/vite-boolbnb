<script>
export default {
    name: "AppHeader",
    data() {
        return {
              logo:'bool.png'
        }
    },
    methods: {
        getImageUrl(logo) {
            return new URL('../assets/img/' + logo, import.meta.url).href;
            }
        },
}
</script>

<template>

    <nav class="navbar navbar-expand-lg my-bg-nav">
        <div class="container-fluid fw-bold">
            <span class="logo-header">
                <a class="navbar-brand px-3" href="/">
                 <img  :src="getImageUrl(logo)" :alt="logo">
                </a>
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="text-light"><i class="fa-solid fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto fw-bold d-flex gap-2 mt-2 fs-5">
                    <li class="nav-item">
                        <router-link class="nav-link active text px-3 py-1 rounded-3" aria-current="page"
                            :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link active text  px-3 py-1 rounded-3" aria-current="page"
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
    z-index: 222;

}

li {
    color: inherit;
}

.text {
    background-color: #70c1b4;
}

.navbar-toggler {
    background-color: #000000ad;
}

.text:hover,
.navbar-toggler:hover {
    background-color:#BF3295;
    transition: 0.6s;
    color: white;
}
.logo-header img{
    height: 100px;
}
.my-bg-nav{
    background: rgb(66,66,66);
    background: linear-gradient(180deg, rgba(66,66,66,0.709296218487395) 2%, rgba(255,255,255,0) 42%);
}
</style>