const btnPelo = document.getElementById("pelo");

btnPelo.addEventListener('click',()=>{
    
    const colores = ["red","blue","yellow","green"]
    let i = 0;
    i= Math.floor(Math.random() * 4);

    document.querySelector(".pelo").style.background = colores[i];
    

})
