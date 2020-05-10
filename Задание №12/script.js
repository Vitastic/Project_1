class Options {
    constructor( height, width, bg, fontSize, textAlign ) {
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = bg;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;    
    }

    createDiv(text) {
        let element = document.createElement('div');
        element.textContent = text;
        element.style.height = this.height;
        element.style.width = this.width ;
        element.style.backgroundColor = this.bg ;
        element.style.fontSize = this.fontSize;
        element.style.textAlign = this.textAlign;
        document.body.appendChild(element);
        return element;

    }

}

let optionOne = new Options(200, 500, 'yellow', 50, 'center');
let optionSecond = new Options(350, 750, 'yellow', 75, 'right');



optionOne.createDiv('Hello, ');
optionSecond.createDiv('this cool world!!!');

// Изучаем JSON!
//console.log(optionOne);
console.log(JSON.stringify(optionOne));
console.log(JSON.parse(JSON.stringify(optionOne)));

