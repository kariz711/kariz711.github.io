$(document).ready(function(){


// js fiddle shit
var sine_wave1 = function(options) {
    var origin = { //origin of axes
            x: options.x,
            y: options.y
        },
    	amplitude = options.a, // wave amplitude (10)
    	rarity = 700, // point spacing
    	freq = 0.1, // angular frequency
    	phase = options.p, // phase angle (45)

	/* DRAW HERE */
        d = '';
        
    for(var i = 0; i < 100; i++) {
        var operator = 'M ';

        d += operator + ((i - 1) * rarity + origin.x) + ' ';
        d += (Math.sin(freq * (i - 1 + phase)) * amplitude + origin.y);

        if(operator !== ' L ') { operator = ' L '; }

        d += ' L ' + (i * rarity + origin.x) + ' ';
        d += (Math.sin(freq * (i + phase)) * amplitude + origin.y);
        

        document.querySelector('#some').setAttribute('d', d);
    }
    

};

sine_wave1({ x: 800, y: 00, a: 20, p: 145});

var dec = 0.1;
var a = 10;
var p = 145;

//sun sine wave 2

var sine_wave2 = function(options) {
    var origin = { //origin of axes
            x: options.x,
            y: options.y
        },
        amplitude = options.a, // wave amplitude (10)
        rarity = 4, // point spacing
        freq = .09, // angular frequency
        phase = options.p, // phase angle (45)

    /* DRAW HERE */
        d = '';
        
    for(var i = 0; i < 100; i++) {
        var operator = 'M ';

        d += operator + ((i - 1) * rarity + origin.x) + ' ';
        d += (Math.sin(freq * (i - 1 + phase)) * amplitude + origin.y);

        if(operator !== ' L ') { operator = ' L '; }

        d += ' L ' + (i * rarity + origin.x) + ' ';
        d += (Math.sin(freq * (i + phase)) * amplitude + origin.y);
        

        document.querySelector('#s').setAttribute('d', d);
    }
    

};

sine_wave2({ x: 000, y: 800, a: 200, p: 145});

var dec = .5;
var a = 100;
var p = 45;
var req = function() {
    p++;
    if(a > 20 || a < 0) {
        dec *= -1;
    }
    a += dec;

    sine_wave2({ x:200, y: 150, a:a, p: p});

    window.requestAnimationFrame(req);
};
req();

// };

});