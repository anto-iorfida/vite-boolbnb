<script>
export default {
    name: "AppHero",
    data() {
        return {

        }
    }
}
</script>

<template>
    <!-- <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://www.rodaonline.com/wp-content/uploads/C_IMG_miami_beach_03_gallery_20220330-900x599.jpg" class="d-block w-100" alt="ergrg">
            </div>
            <div class="carousel-item">
                <img src="https://www.rodaonline.com/wp-content/uploads/C_IMG_miami_beach_03_gallery_20220330-900x599.jpg" class="d-block w-100" alt="ergrg">
            </div>
            <div class="carousel-item">
                <img src="https://www.villeecasali.com/wp-content/uploads/2019/03/casa-miami-1-1024x710.jpg" class="d-block w-100" alt="ergrg">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div> -->


    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container-fluid p-0">
                    <div class="hero"
                        style="background: url('https://www.rodaonline.com/wp-content/uploads/C_IMG_miami_beach_03_gallery_20220330-900x599.jpg') no-repeat center center; background-size: cover; height: 500px; position: relative;">
                        <div class="hero-content text-center text-white"
                            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                            <h1>La vita è bella</h1>
                            <p>Scatena per goderti la vista delle Maldive</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container-fluid p-0">
                    <div class="hero"
                        style="background: url('https://a0.muscache.com/im/pictures/miso/Hosting-51770572/original/9e985f16-2048-4704-9841-0691a0ec7ebe.jpeg') no-repeat center center; background-size: cover; height: 500px; position: relative;">
                        <div class="hero-content text-center text-white"
                            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                            <h1>La vita è bella</h1>
                            <p>Scatena per goderti la vista delle Maldive</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container-fluid p-0">
                    <div class="hero"
                        style="background: url('https://www.villeecasali.com/wp-content/uploads/2019/03/casa-miami-1-1024x710.jpg') no-repeat center center; background-size: cover; height: 500px; position: relative;">
                        <div class="hero-content text-center text-white"
                            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                            <h1>La vita è bella</h1>
                            <p>Scatena per goderti la vista delle Maldive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Precedente</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Successivo</span>
        </button>
    </div>
</template>

<style lang="scss" scoped></style>