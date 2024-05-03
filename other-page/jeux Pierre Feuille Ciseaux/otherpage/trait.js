/*const Pi = document.querySelector('.pi');
const Pa = document.querySelector('.fe');
const Ci = document.querySelector('.ci');
const Pier = document.querySelector('.a-pier');
const Paps = document.querySelector('.a-paps');
const Ciss = document.querySelector('.a-cis');


Pi.addEventListener('click', function(){
    Pier.style.opacity = '1';
    Paps.style.opacity = '0.2';
    Ciss.style.opacity = '0.2';
});
Pa.addEventListener('click', function(){
    Pier.style.opacity = '0.2';
    Paps.style.opacity = '1';
    Ciss.style.opacity = '0.2';
});
Ci.addEventListener('click', function(){
    Pier.style.opacity = '0.2';
    Paps.style.opacity = '0.2';
    Ciss.style.opacity = '1';
});*/

const Buttons = document.querySelectorAll('button');

for (let i = 0 ; i < Buttons.lenght;i++){
    Buttons[i].addEventListener('click', function(){
        /*const joueur = Buttons[i].innerHtml;
        const robot = Buttons[Math.floor(Math.random() * Buttons.lenght)].innerHtml;*/
        console.log('csssss');
        /*let resultat = "";
        if (joueur === robot){ resultat = 'E g a l i t é'}
        else if ((joueur === 'Pierre' && robot==='Ciseaux') || (joueur === 'Feuille' && robot === 'Pierre') || (joueur === 'Ciseaux' && robot==='Feuille')) {
             resultat = 'G a g n é !';
            }
            else  {resultat = "P e r d u !"; 
        } 
            document.querySelector('.resultat').innerHTML = 'joueur : $(joueur) robot : ${robot}';*/
        });
}