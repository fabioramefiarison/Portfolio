const bouton1 = document.querySelector('.btn-info');
const charge1 = document.querySelector('.anim1');
const charge2 = document.querySelector('.anim2');
const bouton2 = document.querySelector('.dropdown-toggle');

bouton1.addEventListener('click', function(){
   charge1.classList.add('ajouter1');
   charge2.classList.add('ajouter2');
});
bouton2.addEventListener('click', function(){
charge1.classList.add('suppr');
charge2.classList.add('suppr');
});