"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood() {
    var colors=['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый', 'новый цвет' ];

    var obj = {};

    console.log( 'цветов: ' + colors.length );

    for (var i = 0; i < colors.length; i++) {
        var n=randomDiap(0, colors.length - 1);
        var colorName = colors[n];
        obj[colorName] = colorName;
    }

    return Object.keys(obj);

    // for ( var i=0; i<=colors.length; i++ ) {
    //     var n=randomDiap(0,colors.length - 1);
    //     var colorName=colors[n];
    //
    // }
    // return colorName;
}



console.log(mood());

