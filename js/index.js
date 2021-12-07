(() => { 
    const resizeVideo = ()=>{
        let timeout;
        return () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                const elementIframe = document.querySelector('iframe');
                const elementHeader = document.querySelector('header');
                const elementContainer = document.querySelector('.container');
                const elementBlockVideo = document.querySelector('#blockVideo');
                const {innerWidth:largura,innerHeight:altura} = window;
                
                if(largura <= 1000){
                    elementIframe.style.height = `${altura}px`;
                    elementIframe.style.width = `${altura*1.777}px`;
                    elementHeader.style.height = `${altura}px`;
                    elementBlockVideo.style.height = `${altura}px`;
                    elementContainer.style.height = `${altura}px`;
                }
                else{
                    elementIframe.style.width = `${largura}px`;
                    elementIframe.style.height = `${largura*0.5625}px`;
                    elementHeader.style.height = `${largura*0.5625}px`;
                    elementBlockVideo.style.height = `${largura*0.5625}px`;
                    elementContainer.style.height = `${altura}px`;
                }
            }, 1000);
        }
    } 
    window.addEventListener("resize", resizeVideo());
    resizeVideo()();
})()



