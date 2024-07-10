<template>
    <div>
      <!-- Video Background -->
      <video src="/public/3094026-uhd_3840_2160_30fps.mp4" autoplay loop playsinline muted></video>
  
      <!-- Transparent Header -->
      <header>
        <h1>Exploring <span>BollBnB</span></h1>
      </header>

      <!-- Page Content --->
      <div class="container">
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
      <AppSponsor></AppSponsor>
    </div>
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
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    overflow: hidden; /* Prevent scrollbars */
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
  
  header {
    position: sticky;
    top: 80px; /* Below the nav bar */
    left: 0;
    width: 100%;
    height: 80px; /* Set the header height */
    background-color: transparent;
    color: #fff;
    text-align: center;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  header h1 {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 1;
  }
  
  header span {
    font-weight: 800;
    font-size: 7rem;
    display: block;
  }
  
  .container {
    position: relative;
    width: 100%;
    height: calc(100vh - 160px); /* Adjust for the fixed header and nav bar height */
    overflow: hidden;
    margin-top: 160px; /* Adjust for the fixed header and nav bar height */
  }
  
  .description {
    position: absolute;
    bottom: 2%;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    color: #fff;
    border-radius: 20px;
    opacity: 0.7;
    padding: 1.5rem;
    z-index: 1;
  }
  
  .description p {
    text-align: justify;
    max-width: 42rem;
    margin-inline: auto;
    line-height: 1.5;
  }
  
  .description a {
    color: #fff;
    text-underline-offset: 1.8px;
  }
  
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
    header h1 {
      font-size: 1.25rem;
    }
    
    header span {
      font-size: 4rem;
    }
    
    .description {
      width: 80%;
      padding: 1rem;
    }
    
    .ms-position-abs {
      width: 80%;
    }
  }
  
  @media screen and (max-width: 480px) {
    header h1 {
      font-size: 1rem;
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
  }
  </style>
  