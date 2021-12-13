function onYouTubeIframeAPIReady() {
    setTimeout(() => {
        var player;
        player = new YT.Player('video', {
            // videoId: '3t6Z0qRftQ0', 
            width: 560,               
            height: 316,            
            playerVars: {
                listType:'playlist',
                list: 'PLAEnSK9WS80IT67VpLxs-d4pIAeiLiBp5',
                autoplay: 1,        
                controls: 0,    
                showinfo: 0,       
                mute: 1,
                modestbranding: 1, 
                loop: 1,
                fs: 0,
                cc_load_policy: 0,
                iv_load_policy: 3,
                autohide: 0
            },
            events: {
                onReady: function(e) {
                    e.target.mute();
                    e.target.playVideo();
                    setTimeout(() => {
                        document.querySelector("#blockVideo").style.opacity = 0;
                        
                    }, 4000);
                }
            }
        });
    }, 1000)

}

(() => { 
    
    document.addEventListener('DOMContentLoaded',function(){
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
                }, 2000);
            }
        } 
        window.addEventListener("resize", resizeVideo());
        resizeVideo()();


        //VIMEO

        // const iframe = document.querySelector('#ifrmMain');
        // const player = new Vimeo.Player(iframe);

        // player.on('play', function() {
        //     setTimeout(() => {
        //         document.querySelector("#blockVideo").style.opacity = 0;
        //     }, 2000);
        // });

        // player.play();

        });
})()



