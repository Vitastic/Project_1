//alert ('Hello!!!');

//let timeId = setTimeout(sayHello,5100);
//clearTimeout(timeId);

//let timeId = setInterval(sayHello,3100);
//clearTimeout(timeId);


//function sayHello() {
//console.log ('Hello77777777777!!!');
//}

//let timerId = setTimeout (function log() {
//    console.log('Hello!');
//    setTimeout(log,2000);
//})

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event){
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log ("Hello!");
    }

});

