<script>
export default {
    name: "AppFooter",
    data() {
        return {
        
            davide:'davide.jpeg',
            mattia:'mattia.jpeg',
            casimiro:'casimiro.jpeg',
            antonino:'antonino.jpeg'
        
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
    <!-- <div class="container text-center my-5">
        <h2>Vuoi Lavorare con noi?</h2>
        <a href="#" class="btn btn-primary">Contact Us</a>
    </div> -->

    <footer class="bg-dark  py-4">
        <!-- Container to extend the footer to full width if needed -->
        <div class="container p-4 pb-0">
            <!-- Section: Links -->
            <section class="">
                <!--Grid row-->
                <div class="row">
                    <!-- Grid column -->
                    <div class="col-md-6 col-lg-3 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Team 4</h6>
                        <p>
                            Il team di sviluppatori di BoolBnB è composto da professionisti che, grazie al
                            loro impegno incrollabile e competenza tecnica , hanno superato sfide complesse per
                            creare una piattaforma innovativa e user-friendly. Collaborando strettamente con gli
                            stakeholder e adottando un approccio agile, hanno garantito la continua ottimizzazione e
                            sicurezza del sistema. La loro determinazione e capacità di problem-solving hanno stabilito
                            nuovi standard nel campo dello sviluppo web.
                        </p>
                    </div>
                    <!-- Grid column -->

                    <hr class="w-100 clearfix d-md-none" />

                    <!-- Grid column -->
                    <div class="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">sviluppatori Del Sito</h6>
                        <p>
                            <img :src="getImageUrl(davide)" >
                            <a href="https://www.linkedin.com/in/davide-tessari-535465281" class=" fs-5" target="_blank">Davide Tassari</a></p>
                        <p>
                            <img :src="getImageUrl(mattia)" ><a href="https://www.linkedin.com/in/mattia-giarrusso-b59652228" class=" fs-5" target="_blank">Mattia Giarrusso</a></p>
                        <p>
                            <img :src="getImageUrl(casimiro)" ><a href="https://www.linkedin.com/in/casimiro-moliterni-9a7322281/" target="_blank" class=" fs-5">Casimiro Moliterni</a></p>
                        <p>
                            <img :src="getImageUrl(antonino)" ><a href="https://www.linkedin.com/in/antonino-iorfida-4723a72ba" target="_blank" class=" fs-5">Antonino Iorfida</a></p>
                    </div>
                    <!-- Grid column -->

                    <hr class="w-100 clearfix d-md-none" />

                    <!-- Grid column -->
                    <div class="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Link utili</h6>
                        <p> <a href="#" class=" fs-5">Il tuo Account</a></p>
                        <p><a href="#" class=" fs-5">Diventa un Affiliato</a></p>
                        <p><a href="#" class=" fs-5">Lavora con noi</a></p>
                        <p><a href="#" class=" fs-5">Aiuto</a></p>
                    </div>

                    <!-- Grid column -->
                    <hr class="w-100 clearfix d-md-none" />

                    <!-- Grid column -->
                    <div class="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contatto</h6>
                        <p><i class="fas fa-home mr-3 fs-5"></i> Italia, EU</p>
                        <p><i class="fas fa-envelope mr-3 fs-5"></i> info@gmail.com</p>
                        <p><i class="fas fa-phone mr-3 fs-5"></i> + 39 345 657 545</p>
                        <p><i class="fas fa-print mr-3 fs-5"></i> + 39 349 586 006</p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!--Grid row-->
            </section>
            <!-- Section: Links -->

            <hr class="my-3">

            <!-- Section: Copyright -->
            <section class="p-3 pt-0">
                <div class="row d-flex align-items-center">
                    <!-- Grid column -->
                    <div class="col-md-7 col-lg-8 text-center text-md-start">
                        <!-- Copyright -->
                        <div class="p-3">
                            © 2024 Team 4 Copyright:
                            <a class="" href="https://mdbootstrap.com/">BoolBnb.com</a>
                        </div>
                        <!-- Copyright -->
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <!-- Facebook -->
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                class="fab fa-facebook-f"></i></a>

                        <!-- Twitter -->
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                class="fab fa-twitter"></i></a>

                        <!-- Google -->
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                class="fab fa-google"></i></a>

                        <!-- Instagram -->
                        <a class="btn btn-outline-light btn-floating m-1" href="#" role="button"><i
                                class="fab fa-instagram"></i></a>
                    </div>
                    <!-- Grid column -->
                </div>
            </section>
            <!-- Section: Copyright -->
        </div>
        <!-- End of .container -->
    </footer>
</template>

<style lang="scss" scoped>
img{
    border-radius: 100%;
    margin-right: 10px;
    border: 3px solid white;
    height: 60px;
}
img:hover{
    border: 3px solid#70C1B3;
}

a{
    text-decoration: none;
 color: white;
}
h6{
    color: white;
}
a:hover,
p:hover,
h6:hover{
    color: #70C1B3;
}
p{
    color: white;
}
</style>