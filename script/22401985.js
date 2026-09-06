/*@Param:ESTIMATION_MIGRATION (les conséquences de changement climatique:migration)
*on demande de donner une année n entre 2025 et 2050 .
*le calcul fais retourner une estimlation des 
nombres des migrateurs entre 2025 et n*/

function estimation_migration(){
    let n;
    n=document.getElementById("estimation").value;
    if (n<=2025){
        alert ("Veuillez saisir une anée strictemnt supèrieur à2025");

    }else{
        if(n>=2050){
            alert("Veuillez saisr une année inférieur strictement à2050");
        }
        else{
            let p=n-2025;
            let nb=p*5.6;/*on a 140 millions migrateurs d'ici jusqu'à 2050
                            donc une estimation de 5.6 million migrateurs chaque année*/
            alert("le nombre des migrateus entre 2025 et "+ n+" est : "+nb+" millions migrateurs");


        }           
    }
}


/*(déplacement des  petits images dans les onglets de causes et conséauences)*/
function img1_g(){
    let img = document.getElementById("img1");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);// Récupère la valeur actuelle de la marge gauche de l'image 
    // et la convertit en nombre entier
    img.style.marginLeft = (marginLeft - 100) + "px";// Déplace l'image  de 100px vers la gauche 
}
function img1_d(){
    let img = document.getElementById("img1");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}
function img2_g(){
    let img = document.getElementById("img2");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img2_d(){
    let img = document.getElementById("img2");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img3_g(){
    let img = document.getElementById("img3");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img3_d(){
    let img = document.getElementById("img3");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img4_g(){
    let img = document.getElementById("img4");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img4_d(){
    let img = document.getElementById("img4");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img5_g(){
    let img = document.getElementById("img5");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img5_d(){
    let img = document.getElementById("img5");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img6_g(){
    let img = document.getElementById("img6");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img6_d(){
    let img = document.getElementById("img6");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img7_g(){
    let img = document.getElementById("img7");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img7_d(){
    let img = document.getElementById("img7");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img8_g(){
    let img = document.getElementById("img8");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img8_d(){
    let img = document.getElementById("img8");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img9_g(){
    let img = document.getElementById("img9");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img9_d(){
    let img = document.getElementById("img9");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img10_g(){
    let img = document.getElementById("img10");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img10_d(){
    let img = document.getElementById("img10");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}

function img11_g(){
    let img = document.getElementById("img11");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la gauche (les petits images dans les onglets de cuases et conséauences)
    img.style.marginLeft = (marginLeft - 100) + "px";
}
function img11_d(){
    let img = document.getElementById("img11");
    let marginLeft = parseInt(window.getComputedStyle(img).marginLeft);
    // Déplace l'image  de 100px vers la droite
    img.style.marginLeft = (marginLeft + 100) + "px";

}












function Image(climate){
    var img=document.getElementById("climate");
    if (climate==="En pèriode glacière"){
        img.src="../img/glace-passé.png"}
    else {
        img.src="../img/chaud-passé.png" 
    } 

}


  
    

/*annimation de diaporama de la page d'acceuil*/

// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM chargé !"); // Affiche un message dans la console pour indiquer que le DOM est prêt
    
    let currentIndex = 0;   // Déclaration de l'index actuel pour suivre l'image affichée
    const slides = document.querySelectorAll(".slides");   // Sélectionne tous les éléments ayant la classe "slides" (les images du diaporama)
    const totalSlides = slides.length;  // Récupère le nombre total d'images dans le diaporama

    console.log("Nombre de slides trouvés :", totalSlides);   // Affiche le nombre de slides trouvées

    // Vérifie qu'il y a bien des slides avant d'exécuter le code
    if (totalSlides === 0) {
        console.error("Aucune slide trouvée !"); // Affiche une erreur dans la console si aucune image n'est trouvée
        return;  // Arrête l'exécution du script
    }

    // Fonction pour afficher une image spécifique
    function showImage(index) {
        console.log("Affichage de l'image :", index);   // Affiche dans la console l'index de l'image affichée
        
        // Vérifie si l'index dépasse la dernière image, revient à la première image
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Vérifie si l'index est négatif, revient à la dernière image 
        } else {
            currentIndex = index;
        }
        
           // Parcourt toutes les images et les cache, sauf celle correspondant à `currentIndex`
        for (let i = 0; i < slides.length; i++) {
            if (i === currentIndex) {
                slides[i].style.display = "block";
            } else {
                slides[i].style.display = "none";
            }
        }
    }

    // Fonction pour afficher l'image suivante
    function nextImage() {
        console.log("Next button clicked");
        showImage(currentIndex + 1);
    }

    // Fonction pour afficher l'image précédente
    function prevImage() {
        console.log("Prev button clicked");
        showImage(currentIndex - 1);
    }

    // Fonction pour sélectionner une image via les miniatures
    function selectImage(index) {
        console.log("Miniature cliquée :", index);
        showImage(index);
    }

    // Exposer les fonctions globalement pour être accessibles depuis le HTML
    window.showImage = showImage;
    window.selectImage = selectImage;
    window.nextImage = nextImage;
    window.prevImage = prevImage;

    // Afficher la première image au chargement
    showImage(0);

    setInterval(nextImage, 2000); // Change l'image toutes les 2 secondes (2000 ms)


});


  

      



/*S'INSCRIRE*/
function validateForm() {  
    var message = ""; 
    let uname = document.getElementById("txtUsername");
    var uname_len = uname.value.length;
    let upassword = document.getElementById("txtPassword");
    var upassword_len = upassword.value.length;
    let first_name = document.getElementById("txtFirstname").value;
    let last_name = document.getElementById("txtLastname").value;
    let email = document.getElementById("txtEmail").value;
    let adresse = document.getElementById("txtAdresse").value;

    let regexp = /^[A-Za-z]+$/;
    let regex = /^[0-9a-zA-Z\s]+$/;  // Ajout de \s pour inclure les espaces
    let emailRegex = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;

    // Vérification du nom d'utilisateur
    if (uname_len < 7 || uname_len > 12) {
        message += "! Username must be between 7 to 12 characters \n";
    }

    // Vérification du mot de passe
    if (upassword_len < 7 || upassword_len > 12) {
        message += "! Password must be between 7 to 12 characters \n";
    }

    // Vérification des noms (seulement des lettres)
    if (!regexp.test(first_name)) {
        message += "! First name must have alphabet characters only\n";   
    }

    if (!regexp.test(last_name)) {
        message += "! Last name must have alphabet characters only \n";    
    }

    // Vérification de l'adresse (alphanumérique seulement)
    if (!regex.test(adresse)) {
        message += "! Address must have alphabet characters and numbers only \n";
    }

    // Vérification de l'email
    if (!emailRegex.test(email)) {
        message += "! Email must be valid \n";
    }

    // Affichage des erreurs si trouvées
    if (message !== "") {
        alert(message);
         // Empêche l'envoi du formulaire
    }else {
        alert("Nom d'itulisateur: " + uname.value +  "\n mot de passe : " + upassword.value +"\n Nom:" + first_name+ "\nPrénom:"+
            last_name +"\nemail : "+email +"\nAdresse: "+adresse);
        
        alert("Cher "+ uname.value +" , votre insciption a bien été prise en compte")
    }
    

   
}



function GoHome() {
    window.location.href = "../index.html"; 
}


/*se connecter*/
function validatelogin(){
    var message = ""; 
    let uname = document.getElementById("txtUsername");
    var uname_len = uname.value.length;
    let upassword = document.getElementById("txtPassword");
    var upassword_len = upassword.value.length;
     // Vérification du nom d'utilisateur
    if (uname_len < 7 || uname_len > 12) {
        message += "! Username must be between 7 to 12 characters \n";
    }

    // Vérification du mot de passe
    if (upassword_len < 7 || upassword_len > 12) {
        message += "! Password must be between 7 to 12 characters \n";
    }
    // Affichage des erreurs si trouvées
    if (message !== "") {
        alert(message);
         // Empêche l'envoi du formulaire
    }else  {
        
        alert("Bienvenue "+ uname.value + "!");
		window.location.href = "../index.html";
    }
}




