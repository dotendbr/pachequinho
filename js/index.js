(() => { 
    const funcaoResize = ()=>{
        const {availWidth:largura,availHeight:altura}=screen; 
        const maior = largura > altura ? largura : altura 
        console.log(altura,largura)
        console.log("passouAki")
        if(largura > altura){
            document.getElementById("player").style.width = `${maior}px`;   
            document.getElementById("player").style.height = `${maior *0.5625}px`;      
        }else{
            document.getElementById("player").style.width = `${maior*1.777}px`;   
            document.getElementById("player").style.height = `${maior}px`;
        }
    } 
    window.addEventListener("resize", funcaoResize);
    funcaoResize();
})()



