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
                            <!-- <h1>La vita è bella</h1>
                            <p>Scatena per goderti la vista delle Maldive</p> -->
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
                            <!-- <h1>La vita è bella</h1>
                            <p>Scatena per goderti la vista delle Maldive</p> -->
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
                            <!-- <h1>La vita è bella</h1>
                            <p>Scatena per goderti la vista delle Maldive</p> -->
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

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6">
                <h2>Informazioni su BoolBnB</h2>
                <p>
                    BoolBnB è una piattaforma di punta per trovare alloggi unici in tutto il mondo. Che tu stia cercando una casetta accogliente nei boschi, un lussuoso appartamento in città o una villa sulla spiaggia, BoolBnB connette viaggiatori con host che offrono esperienze diverse e indimenticabili. La nostra missione è rendere il viaggio accessibile e piacevole per tutti, fornendo una vasta gamma di opzioni di alloggio e un servizio clienti di prima classe.
                </p>
            </div>
            <div class="col-md-6">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Cos'è BoolBnB?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                BoolBnB è un mercato online che connette viaggiatori con host che offrono opzioni di alloggio uniche. La nostra piattaforma offre una varietà di alloggi, dalle stanze private e appartamenti fino a intere case e soggiorni non convenzionali.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Come posso prenotare un soggiorno su BoolBnB?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                Per prenotare un soggiorno su BoolBnB, basta creare un account, sfogliare le nostre inserzioni, selezionare l'alloggio desiderato e seguire le istruzioni per la prenotazione. Puoi comunicare direttamente con gli host attraverso la nostra piattaforma per assicurarti che tutte le tue domande abbiano risposta prima di effettuare una prenotazione.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Quali misure di sicurezza sono in atto per ospiti e host?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                BoolBnB dà priorità alla sicurezza di ospiti e host. Offriamo un sistema di messaggistica sicuro, profili verificati e un sistema di recensioni per garantire trasparenza. Inoltre, forniamo supporto clienti 24/7 e una polizza assicurativa completa per la tua tranquillità durante il soggiorno.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Quali metodi di pagamento sono accettati?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                BoolBnB accetta vari metodi di pagamento tra cui carte di credito, PayPal e bonifici bancari. Durante il processo di prenotazione, potrai selezionare il metodo di pagamento che preferisci. Tutte le transazioni sono protette con crittografia avanzata per garantire la sicurezza dei tuoi dati.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Come posso diventare un host su BoolBnB?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                Diventare un host su BoolBnB è semplice. Basta registrarsi sulla piattaforma, creare un profilo dettagliato e inserire le informazioni sull'alloggio che intendi offrire. Una volta completato, potrai pubblicare il tuo annuncio e iniziare a ricevere prenotazioni da viaggiatori di tutto il mondo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>