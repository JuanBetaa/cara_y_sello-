let btnmodal = document.getElementById("am")
let venmodal = document.getElementById("vmpc")
let cermodal = document.querySelector(".cerrarModal")

btnmodal.addEventListener("click", () => {
    venmodal.style.display = "block"
})

cermodal.addEventListener("click", () => {
    venmodal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmodal) {
        venmodal.style.display = "none"
    }
})

let btnmoda = document.getElementById("dm")
let venmoda = document.getElementById("vmac")
let cermoda = document.querySelector(".cerrarModal1")

btnmoda.addEventListener("click", () => {
    venmoda.style.display = "block"
})

cermoda.addEventListener("click", () => {
    venmoda.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmoda) {
        venmoda.style.display = "none"
    }
})

let cara = 0;
let sello = 0;
let cont=0;
let total=0;
let totalapuesta=0
let moneda = document.querySelector(".moneda");
let girarBtn = document.querySelector("#flip-button");
let reinicioBtn = document.querySelector("#reinicio-button");
let apuestaInput = document.querySelector("#apuest");
let opcionInput = document.querySelector("#opcion");


girarBtn.addEventListener("click", () => {
    
    if(apuestaInput.value !='' && opcionInput.value!=''){

        let i = Math.floor(Math.random() * 2);
        cont++;

    moneda.style.animation = "none";
    
    let opcUsuario=parseInt(opcionInput.value)
   
    let apuestaUsu=parseInt(apuestaInput.value)
   
    totalapuesta+=apuestaUsu;
    
    if(i){
        
        moneda.style.animation = "spin-cara 2s forwards";
        setTimeout(function(){
           
            if(i===opcUsuario){
                total+=apuestaUsu*2;
                alert(`ganado la moneda cayo en cara. ganaste (${apuestaUsu*2}). el total de dinero que tiene es: (${total})`);
                
                
            } else{
                total-=apuestaUsu;
                alert(`perdido la moneda cayo en cara. perdiste (${apuestaUsu}). el total de dinero que tiene es: (${total})`);
              
            }
        }, 2000);
        cara++;

    }
    else{
        moneda.style.animation = "spin-sello 2s forwards";
        setTimeout(function(){
            if(i===opcUsuario){
                total+=apuestaUsu*2;
                alert(`ganado la moneda cayo en sello. gano (${apuestaUsu*2}). el total de dinero que tiene es: (${total})`);
               
            } else{
                total-=apuestaUsu;
                alert(`perdido la moneda cayo en sello. perdiste (${apuestaUsu}). el total de dinero que tiene es: (${total})`);
                
            }
        }, 2000);
        sello++;
    }
    setTimeout(updateStats, 2000);
    disableButton();
    }else{
        alert('elije una opcion para jugar y cantidad a apostar')
    }
    
});
function updateStats(){
 document.querySelector("#cant-count").textContent = `jugadas: ${cont}`;
document.querySelector("#dinero-count").textContent = `dinero: ${total}`;   
}

function disableButton(){
   girarBtn.disabled = true;
    setTimeout(function(){
       girarBtn.disabled = false;
    },3000);
}
reinicioBtn.addEventListener("click",() => {
    alert(`Fin De Partida: partidas jugadas: (${cont}), su dinero apostado fue: (${totalapuesta}) Dinero final fue: (${total}).`)
    .then((result) => {
        
            window.location.href = "./index.html";
            
        
      })
      
    
})

