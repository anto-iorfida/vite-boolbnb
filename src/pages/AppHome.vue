<template>
  <div class="my-container-home">
    <!-- Video Background -->
    <video src="/public/3094026-uhd_3840_2160_30fps.mp4" autoplay loop playsinline muted></video>

    <!-- Transparent Header -->
    <!-- <div>
        <h2 class="text-center text-white mt-5">Exploring <span>BollBnB</span></h2>
      </div> -->

    <!-- Page Content --->
    <div class="container h-100 my-container-general">

      <div class="h-100 d-flex align-items-end justify-content-center my-container-arrow">
        <a href="#sponsor" class=" fs-1 text-decoration-none my-a-link">
          <div class="d-flex flex-column justify-content-center align-items-center my-arrow-down">
            <i class="fa-solid fa-arrow-down my-arrow-down">
            </i>
            <h5 class="text-center my-arrow-down">Clicca per vedere i nostri Appartamenti</h5>
          </div>
        </a>
      </div>

      <!-- <div class="description">
          <p>
            Discover a mesmerizing jungle, where lush green foliage embraces the landscape, and vibrant wildlife thrives in harmony. The dense canopy casts a symphony of shadows, creating an immersive experience that transports you into nature's enchanting realm. Navigate through the intricate network of towering trees, each telling a tale of resilience and growth.
          </p>
          <p class="copyright">
            Video Credit: Be The Observer on
            <a href="https://www.pexels.com/video/drone-footage-of-mountain-covered-in-trees-6807924/">pexels.com</a>
          </p>
        </div>
   -->
      <!-- Existing Components -->
      <!-- <AppHero class="ms-position-rel"></AppHero> -->
      <SearchBar class="ms-position-abs"></SearchBar>
    </div>
  </div>
  <section id="sponsor" class="mt-5">
    <div class="container-fluid z-2 my-bg-sponsor-list">
      <div class="">
        <div class="col-12">
          <h1 class="text-center display-3 text-nowrap my-4 text-white pt-3">Appartamenti in vista</h1>
        </div>
        <AppSponsor></AppSponsor>
      </div>
    </div>
  </section>
</template>

<script>
import AppHero from '../components/AppHero.vue';
import SearchBar from '../components/SearchBar.vue';
import AppSponsor from '../components/AppSponsor.vue';

export default {
  name: 'AppHome',
  components: {
    AppHero,
    SearchBar,
    AppSponsor,
  },
}
</script>

<style scoped lang='scss'>
.my-container-home {
  height: calc(100vh);
}
.my-container-general{
  padding-bottom: 130px;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
  /* Prevent scrollbars */
}

video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}




// .description {
//   position: absolute;
//   bottom: 2%;
//   width: 50%;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #000;
//   color: #fff;
//   border-radius: 20px;
//   opacity: 0.7;
//   padding: 1.5rem;
//   z-index: 1;
// }

// .description p {
//   text-align: justify;
//   max-width: 42rem;
//   margin-inline: auto;
//   line-height: 1.5;
// }

// .description a {
//   color: #fff;
//   text-underline-offset: 1.8px;
// }

.ms-position-rel {
  position: relative;
}

.ms-position-abs {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
i.my-arrow-down{
  font-size: 40px;
  color: black;
}
h5.my-arrow-down{
  font-size: 40px;
  font-weight: 600;
  color: black;
}


.my-bg-sponsor-list {
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, rgba(1, 1, 1, 0.113) 5%, rgba(33, 37, 41, 0.684) 100%);
}

@media screen and (max-width: 1200px) {
  .description {
    position: absolute;
    width: 91vw;
    bottom: 0;
    border-radius: 20px 20px 0 0;
    margin: auto;
    padding: 0.6rem 1.5rem;
  }
}

@media screen and (max-width: 768px) {

  .description {
    width: 80%;
    padding: 1rem;
  }

  .ms-position-abs {
    width: 80%;
  }
}

@media screen and (max-width: 480px) {
  .my-container-general{
  padding-bottom: 35px;
}
  h5.my-arrow-down{
    font-size: 20px;
  }
  .ms-position-abs {
    width: 55%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  header span {
    font-size: 2.5rem;
  }

  .description {
    width: 90%;
    padding: 0.5rem;
  }

  .ms-position-abs {
    width: 90%;
  }

  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }
}
</style>