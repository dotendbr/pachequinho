(() => { 
    const funcaoResize = ()=>{
        const {width:largura,height:altura}=screen; 
        const maior = largura > altura ? largura : altura 
        //if(largura > altura){
            document.getElementById("player").style.width = `${largura}px`;   
            document.getElementById("player").style.height = `${altura}px`;
        //}else{
            //document.getElementById("player").style.width = `${maior*1.777}px`;   
            //document.getElementById("player").style.height = `${maior}px`;
        //}
        console.log("passouAki")
        console.log(altura,largura)
    } 
    window.addEventListener("resize", funcaoResize);
    funcaoResize();
})()



