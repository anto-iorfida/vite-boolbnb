<script>
export default {
    name: 'AppAbout',
    components: {
        
    }
}
</script>

<template>
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
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    margin-top: 20px;
    padding: 104px;
}
</style>
