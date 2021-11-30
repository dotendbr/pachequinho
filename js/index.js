(() => { 
    const funcaoResize = ()=>{
        const {innerWidth:largura,innerHeight:altura}=window; 
        const maior = largura > altura ? largura : altura 
        if(largura > altura){
            document.getElementById("player").style.width = `${maior}px`;   
            document.getElementById("player").style.height = `${maior *0.5622}px`;
        }else{
            document.getElementById("player").style.width = `${maior*1.777}px`;   
            document.getElementById("player").style.height = `${maior}px`;
        }
        console.log("passouAki")
        console.log(altura,largura)
    } 
    window.addEventListener("resize", funcaoResize);
    funcaoResize();
})()



