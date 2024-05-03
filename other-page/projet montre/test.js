setInterval(setMontre,1000)

const aiguHeures = document.querySelector('[donnee-heures-aigu]')
const aiguMinutes = document.querySelector('[donnee-minutes-aigu]')
const aiguSecondes = document.querySelector('[donnee-secondes-aigu]')

function setMontre(){
    const dateCourante = new Date()
    const leSecondes = dateCourante.getSeconds() / 60
    const leMinutes = (leSecondes + dateCourante.getMinutes()) / 60
    const lHeures = (leMinutes + dateCourante.getHours()) / 12

    leRotation(aiguSecondes,leSecondes)
    leRotation(aiguMinutes,leMinutes)
    leRotation(aiguHeures,lHeures)
}
function leRotation(element,rotationBe){
    element.style.setProperty('--rotation',rotationBe * 360)
}
setMontre()