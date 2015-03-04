(function ( $ ) {
 
    $.fn.typeWriter = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            txt: "Hello, World",
            audioSrc:"",
            interval:500
        }, options );
 
        // Greenify the collection based on the settings variable.
        return this.each(function (){
            
            $(this).text(settings.txt.length);

            var track = "";

var len = settings.txt.length;

var n = 0;

var aud = new Audio(settings.audioSrc);

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
 
}( jQuery ));