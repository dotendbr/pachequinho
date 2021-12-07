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
                    elementIframe.style.width = `${altura*1.777}px`;
                    elementIframe.style.height = `${altura}px`;
                    elementHeader.style.height = elementIframe.style.height;
                    elementBlockVideo.style.height = elementIframe.style.height;
                    elementContainer.style.height = elementIframe.style.height;
                }
                else{
                    elementIframe.style.width = `${largura}px`;
                    elementIframe.style.height = `${largura*0.5625}px`;
                    elementHeader.style.height = elementIframe.style.height;
                    elementBlockVideo.style.height = elementIframe.style.height;
                    elementContainer.style.height = elementIframe.style.height;
                }
            }, 1000);
        }
    } 
    window.addEventListener("resize", resizeVideo());
    resizeVideo()();
})()



