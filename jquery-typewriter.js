(function ( $ ) {
 
    $.fn.typeWriter = function( options ) {
 

 
        return this.each(function (){
        
            var settings = $.extend({
            txt: "Hello, World",
            audioSrc:"",
            interval:500
            }, options );
            
            $(this).text(settings.txt.length);

            var track = "",
                len   = settings.txt.length,
                n     = 0,
                aud   = new Audio(settings.audioSrc);

            $(this).text("");

            var si = setInterval($.proxy(function () {
                        typeWriting.call(this);
                    }, this), settings.interval);

            function typeWriting(){
                if(!aud.paused){    
                aud.pause();
                aud.currentTime = 0;
            }

            var res = track + settings.txt.charAt(n);

            $(this).text(res);

            if(settings.txt.charAt(n)!==" "){
                aud.play();
            }

            track = res;

            if(n===len-1){
        
                clearInterval(si);

            }

            n = n + 1;
            }


      
    });
 
    }
 
})( jQuery );
