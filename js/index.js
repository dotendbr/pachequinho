(() => { 

    function onYouTubeIframeAPIReady() {
        var player;
        player = new YT.Player('muteYouTubeVideoPlayer', {
            videoId: '3t6Z0qRftQ0', // YouTube Video ID
            width: 560,               // Player width (in px)
            height: 316,              // Player height (in px)
            playerVars: {
                autoplay: 1,        // Auto-play the video on load
                controls: 0,        // Show pause/play buttons in player
                showinfo: 0,        // Hide the video title
                mute: 1,
                modestbranding: 1,  // Hide the Youtube Logo
                loop: 1,            // Run the video in a loop
                fs: 0,              // Hide the full screen button
                cc_load_policy: 0, // Hide closed captions
                iv_load_policy: 3,  // Hide the Video Annotations
                autohide: 0         // Hide video controls when playing
            },
            events: {
                onReady: function(e) {
                    e.target.mute();
                    e.target.playVideo();
                    document.querySelector("#blockVideo").style.opacity = 0;
                }
            }
        });
    }
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



