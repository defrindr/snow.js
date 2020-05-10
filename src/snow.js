let Matrix = (function (el, cAttr = undefined) {
    let context = document.querySelector(el);
    let ctx = context.getContext('2d');
    let snowDB = [];


    let matrix = {
        snowCharacter: "*", // Karakter salju
        txtPopulation: 2, // semakin tinggi nilainya akan semakin mengurangi kepadatan salju
        minFontSize: 12, // Ukuran font minimal
        maxFontSize: 18, // Ukuran font minimal
        minTextSpeed: 2, // Kecepatan salju minimal
        maxTextSpeed: 3, // Kecepatan salju maksimal
        snowInScreen: 100, // Jumlah salju yang ditampilkan dilayar,
        snowColor: 'Red', // warna salju
        fontFamily: 'Cursive', // Font family dari salju
        interval: 100, // interval waktu refresh canvas,
    };

    if (cAttr != undefined) {
        /**
         * A simple forEach() implementation for Arrays, Objects and NodeLists
         * @private
         * @param {Array|Object|NodeList} collection Collection of items to iterate
         * @param {Function} callback Callback function for each iteration
         * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
         */
        var forEach = function (collection, callback, scope) {
            if (Object.prototype.toString.call(collection) === '[object Object]') {
                for (var prop in collection) {
                    if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                        callback.call(scope, collection[prop], prop, collection);
                    }
                }
            } else {
                for (var i = 0, len = collection.length; i < len; i++) {
                    callback.call(scope, collection[i], i, collection);
                }
            }
        };

        forEach(cAttr, function (val, prop) {
            matrix[prop] = val;
        })
    }

    /**
     * Setting canvas width & height
     * and make it not blurry
     */
    context.style.position = "absolute";
    context.style.top = 0;
    context.style.left = 0;
    context.style.width = "100%";
    context.style.height = "100%";

    ctx.width = context.getBoundingClientRect().width;
    ctx.height = context.getBoundingClientRect().height;
    context.width = context.getBoundingClientRect().width;
    context.height = context.getBoundingClientRect().height;



    /**
     * generate snow 
     * schema & return it
     */
    function generateDataArray() {
        return {
            txt: matrix.snowCharacter,
            posX: getRandomNumber(0, ctx.width),
            posY: getRandomNumber(0, -(ctx.height) * matrix.txtPopulation),
            // posX: ctx.width/2,
            // posY: ctx.height/2,
            color: matrix.snowColor,
            fontSize: getRandomNumber(matrix.minFontSize, matrix.maxFontSize),
            speedText: getRandomNumber(matrix.minTextSpeed, matrix.maxTextSpeed),
        }
    }

    /**
     * return format font setting
     * 
     * @param {Integer} i 
     */
    function getCtxFont(i) {
        return `${snowDB[i].fontSize}px ${matrix.fontFamily}`;
    }

    /**
     * Update color &
     * font context
     * @param {Integer} i 
     */
    function stylingCanvas(i) {
        ctx.fillStyle = snowDB[i].color;
        ctx.font = getCtxFont(i);
    }

    /**
     * move snow position &
     * update when position greather than
     * context height
     * @param {Integer} i 
     */
    function updateSnow(i) {
        snowDB[i].posY += snowDB[i].speedText;

        if (snowDB[i].posY > ctx.height + 20) {
            snowDB[i] = generateDataArray();
        }
    }

    /**
     * Show and update
     * filling text
     */
    function showTextOnCanvas() {
        for (let i = 0; i < snowDB.length; i++) {
            stylingCanvas(i);
            ctx.fillText(snowDB[i].txt,
                snowDB[i].posX,
                snowDB[i].posY);
            updateSnow(i);
        }
    }

    /**
     * call function clearCanvas 
     * & showTextOnCanvas
     */
    function draw() {
        clearCanvas();
        showTextOnCanvas();
    }

    /**
     * generating snow data
     * for first time running
     * 
     */
    function snowData() {
        for (let i = 0; i < matrix.snowInScreen; i++) {
            snowDB.push(generateDataArray());
        }
    }

    /**
     * Make draw function loop 
     * & loop again
     * 
     */
    function init() {
        snowData();
        setInterval(() => {
            draw();
        }, matrix.interval);
    }

    /**
     * Clear canvas
     * to use again
     * 
     */
    function clearCanvas() {
        ctx.clearRect(0, 0, ctx.width, ctx.height);
    }


    /**
     * Get Random Number between
     * variable min and max
     * 
     * @param {Integer} min 
     * @param {Integer} max 
     */
    function getRandomNumber(min, max) {
        let distance = (max - min) + 1;
        let randomNumber = Math.floor(Math.random() * distance) + min;
        return randomNumber;
    }

    return {
        init: init
    }
});