function Get(id){
  return document.getElementById(id)
}

const page = () =>{


const myHeaderUL = document.querySelector("header section:nth-child(2")
const myHeader = document.querySelector("header")
const btnToggle = Get("menu-burger")
let myUL = Get("myUl")

btnToggle.onclick = () =>{
    btnToggle.classList.toggle("change"); 
    myHeaderUL.classList.toggle("displaUl")
    myUL.classList.toggle("displaUl")
}
  
let switche = Get("switch")
switche.onmousemove = () =>{
    messageAlerte("changer le thème")
}

let btnEngagement = Get("btn-engagement")
btnEngagement.onclick = () => {
    alert("S'il vous plait ! Contacter moi sur mon compte gmail fabioramefiarison@gmail.com")
}

function messageAlerte (message, e){

        let box = document.createElement('span')
        switche.appendChild(box)
        box.textContent = message
        box.className = 'style-box'
}

//thème sombre 
let themeButton = Get('theme-button')
let BODY = document.querySelector('body')
let Apropos = Get('Apropos')
let projets = Get('projets')
let formInput = document.querySelectorAll("#form-contact input")


const changeAllColor = ()=> {
  myHeader.classList.toggle('change-theme-sombre')
  BODY.classList.toggle('change-theme-sombre')
  Apropos.classList.toggle('aproposSombre')
  projets.classList.toggle('aproposSombre')

  
  const myHeaderULA = document.querySelectorAll(".a")
      myHeaderUL.classList.toggle('displayLI')
      myHeader.classList.toggle('headerSombre')

    for (let i = 0; i < myHeaderULA.length; i++) {
       myHeaderULA[i].classList.toggle('change-theme-white-li')  
    }

    const MonNom = document.querySelector('.mon-nom')
    const JeSuis = document.querySelectorAll('.Je-suis')
    MonNom.classList.toggle('change-theme-white')

    JeSuis.forEach(element => {
      element.classList.toggle('change-theme-white')
    });

    formInput.forEach(element => {
      element.classList.toggle('change-theme-white')
    });

}

themeButton.onclick = (e) =>{
    //stocker le thème sur session storage
    if (e.target.checked) {
      changeAllColor()
       sessionStorage.setItem('theme', 'sombre')
    }
    else {
      sessionStorage.setItem('theme', 'clair')
    }
}
x = sessionStorage.getItem('theme')
x == 'sombre' ? changeAllColor() : null  


/* animaton postes*/
const target =document.getElementById("poste");
let array = ["Web stagiaire"];
let i=0;
let j=0;

const creationLettre = () =>{
     const lettre = document.createElement('span');
     target.appendChild(lettre);
     lettre.textContent = array[i][j];  
     setTimeout(() => {
        lettre.remove();
    }, 2800);
    
}
function tourne() {
  setTimeout(()=>{
if (j<array[0].length) {
creationLettre();
j++;
tourne();}
else{
j=0;
i=0;

setTimeout(() => {
tourne();
}, 2800);}
  },50)
}
tourne();


//aficher un peu sur l'a propos
const btnReadMore = Get("btn-read-more")
btnReadMore.onclick = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn-read-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "voir plus "
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "voir moins"; 
      moreText.style.display = "inline";
    }
  }
window.onscroll = () => {

  if (window.scrollY > 260 && window.screenX > 740) {
    let AproposImg = document.querySelector('#Apropos section:nth-child(1) img')
    AproposImg.classList.add('appart-apropos-img')
    let AproposDescription = document.querySelector('#Apropos section:nth-child(2)')
    AproposDescription.classList.add('appart-descr')
}

const myCompetencesDivSectionspan = document.querySelectorAll('.my-Competences div section span')
if (window.scrollY > 1020 && window.screenX > 740) {
  for (let  i = 0;  i < myCompetencesDivSectionspan.length;  i++) {
    myCompetencesDivSectionspan[i].classList.add('appart-compet-span')
  }
}

const projets = document.querySelector('#projets section:nth-child(2)')
if (window.scrollY > 2650) {
  projets.classList.add('appart-projets')
}
}

//effet hover sur les images de compétences 
const parenTarget = document.querySelector('.my-Competences')
const lesSpan = document.querySelectorAll('.my-Competences div section span img')


lesSpan.forEach(target => {
    target.onmouseover = (e) => {

  let targetHover = document.createElement('span')
  parenTarget.appendChild(targetHover)
  targetHover.textContent = e.target.id
  targetHover.style.top = (e.pageY - 60) + 'px'
  targetHover.style.left = (e.pageX + 40) + 'px'
  targetHover.className = 'compet-span-hover'
    }
});


//image projet scolaire
var slideIndex = 1;
const prev = Get("prev")
const next = Get("next")
const rowImg = document.querySelectorAll(".row img")

prev.onclick = () =>{
  plusSlides(-1)
}
next.onclick = () =>{
  plusSlides(1)
}
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
for (let img = 0; img < rowImg.length; img++) {
  rowImg[img].onclick = ()=>{
    currentSlide(img + 1)
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = "<a href='"+ dots[slideIndex-1].name + "' class='link-projet'>" + dots[slideIndex-1].alt + "<i class='fas fa-arrow-right'></i>" + "</a>" 
}
const links = document.querySelectorAll('#myUL li a');
let clickCount = 0;

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        clickCount++;
    
        if (clickCount === 1) {
            // Défilement vers la section
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth !important'
            });
              
            // Réinitialisation du compteur
            clickCount = 0;
        }
    });
});
(function() {
  emailjs.init("wTVsJAEU42T0EMcU5"); // Remplacez YOUR_USER_ID par votre identifiant d'utilisateur Email.js

  document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    var prenom = document.getElementById('prenom').value;
    var EmailContact = document.getElementById('email').value;
    var messageContact = document.getElementById('message').value;

    // Paramètres de l'email
    var params = {
      from_name: prenom,
      to_name: 'Fabio', // Remplacez par le nom du destinataire
      message_html: messageContact,
      reply_to: EmailContact
    };

    // Envoyer l'email
    emailjs.send('service_vbvnjc2', 'template_lunfyle', params) // Remplacez YOUR_SERVICE_ID et YOUR_TEMPLATE_ID
      .then(function() {
        alert('Email envoyé avec succès!');
        document.getElementById('emailForm').reset(); // Réinitialiser le formulaire après l'envoi
      }, function(error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        alert('Une erreur s\'est produite, veuillez réessayer plus tard.');
      });
  });
})();
}
window.onload = () => {
  Get("chargement-debut").style.display = 'none'
  Get("container-page").style.display = 'block'
  page()
  
}

