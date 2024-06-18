document.addEventListener("DOMContentLoaded",function(){
    var dispo = document.getElementById("dispo");
    var add = document.getElementById("add");
    var plus = document.getElementById("plus");
    var more = document.getElementById("more");
    affichedispo();
    let livre = localStorage.getItem("livres");
    if(livre === null){

    }
    else{
        afficheAdd();
    }

    add.addEventListener("click",function(){
        let tab = {
			"titre" : document.getElementById("aut").value,
			"auteurs" : document.getElementById("aut1").value,
			"isbn" : document.getElementById("aut2").value,
			"image" : document.getElementById("aut3").value,
			"editeur" : document.getElementById("aut4").value,
			"datePublication" : document.getElementById("aut5").value,
			"genre": document.getElementById("aut6").value,
			"resume" : document.getElementById("aut7").value,
			"langue" : document.getElementById("aut8").value,
			"nombrePages" : document.getElementById("aut9").value,
			"disponibilite" : document.getElementById("aut10").value,
			"etat" : document.getElementById("aut11").value,
			"emplacement" : document.getElementById("aut12").value,
        }
        addLivre(tab);
    })
    function afficheAdd(){
        let livre = localStorage.getItem("livres");
        livre = JSON.parse(livre);
        let ajouter = `
        `;
 //       alert(livre.livres[0].titre);
        
        for(let i = 0;i < livre.livres.length;i++){
            let contenus = `
                <div>
                    <div>
                        <img src=l2/${livre.livres[i].image} class="pic">
                    </div>
                    <div>
                        <p>Titre : <strong>${livre.livres[i].titre}</strong></p>
                    </div>
                    <div>
                        <p>Auteur : <strong>${livre.livres[i].auteurs}</strong></p>
                    </div>
                        <button class="button" id="a${i}">Detail</button>
                </div>
            `;
            ajouter = ajouter + contenus;
        }
        plus.innerHTML = ajouter;
        for (let i = 0; i < livre.livres.length; i++) {
            let bouton = document.getElementById(`a${i}`);           
            bouton.addEventListener('click', function() {
                console.log(`Détails du livre ${i} :`, livre.livres[i]);
                afficherDetails(livre.livres[i]);
            });
        }        
        function afficherDetails(livre) {
            let contenus = `
                <div>
                    <div>
                        <img src=l2/${livre.image} class="picInfos">
                    </div>
                    <div>
                        <p>Titre : <strong>${livre.titre}</strong></p>
                    </div>
                    <div>
                        <p>Auteur : <strong>${livre.auteurs}</strong></p>
                    </div>
                    <div>
                        <p>Resume : <strong>${livre.resume}</strong></p>
                    </div>
                    <div>
                        <p>editeur : <strong>${livre.editeur}</strong></p>
                    </div>
                    <div>
                        <p>Langue : <strong>${livre.langue}</strong></p>
                    </div>
                    <div>
                        <p>Isbn : <strong>${livre.isbn}</strong></p>
                    </div>
                    <div>
                        <p>NBPage : <strong>${livre.nombrePages}</strong></p>
                    </div>
                    <div>
                        <p>Etat : <strong>${livre.etat}</strong></p>
                    </div>
                    <div>
                        <p>Emplacement : <strong>${livre.emplacement}</strong></p>
                    </div>

                </div>
            `;
            more.innerHTML = contenus;
        }
    }
    function addLivre(tab){
        let livre = localStorage.getItem("livres");
        if(livre === null){
            let first = {
                "livres" : [
                    tab,
                ]
            }
            let jl = JSON.stringify(first);
            localStorage.setItem("livres",jl);
        }
        else{
            livre = JSON.parse(livre);
            livre.livres.push(tab);
            let co = JSON.stringify(livre);
            localStorage.setItem("livres",co);
        }
    }
    function affichedispo(){
        fetch("data.json")
            .then(respo => {
                return respo.json();
            })
            .then(data => {
                let ajouter = `
                `;
                for(let i = 0;i < data.livres.length;i++){
                    let contenus = `
                        <div>
                            <div>
                                <img src=l2/${data.livres[i].image} class="pic">
                            </div>
                            <div>
                                <p>Titre : <strong>${data.livres[i].titre}</strong></p>
                            </div>
                            <div>
                                <p>Auteur : <strong>${data.livres[i].auteurs}</strong></p>
                            </div>
                                <button class="button" id="b${i}">Detail</button>
                        </div>
                    `;
                    ajouter = ajouter + contenus;
                }
               dispo.innerHTML = ajouter;
               for (let i = 0; i < data.livres.length; i++) {
                let bouton = document.getElementById(`b${i}`);           
                bouton.addEventListener('click', function() {
                    console.log(`Détails du livre ${i} :`, data.livres[i]);
                    printD(data.livres[i]);
                });
            }        
            function printD(livre) {
                let contenus = `
                    <div>
                        <div>
                            <img src=l2/${livre.image} class="picInfos">
                        </div>
                        <div>
                            <p>Titre : <strong>${livre.titre}</strong></p>
                        </div>
                        <div>
                            <p>Auteur : <strong>${livre.auteurs}</strong></p>
                        </div>
                        <div>
                            <p>Resume : <strong>${livre.resume}</strong></p>
                        </div>
                        <div>
                            <p>editeur : <strong>${livre.editeur}</strong></p>
                        </div>
                        <div>
                            <p>Langue : <strong>${livre.langue}</strong></p>
                        </div>
                        <div>
                            <p>Isbn : <strong>${livre.isbn}</strong></p>
                        </div>
                        <div>
                            <p>NBPage : <strong>${livre.nombrePages}</strong></p>
                        </div>
                        <div>
                            <p>Etat : <strong>${livre.etat}</strong></p>
                        </div>
                        <div>
                            <p>Emplacement : <strong>${livre.emplacement}</strong></p>
                        </div>
                    </div>
                `;
                more.innerHTML = contenus;
            }    
            })
    }
});
