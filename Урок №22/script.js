function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello! I'm " + this.name + '!');
    };
}
User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушёл!');
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);
alex.exit();