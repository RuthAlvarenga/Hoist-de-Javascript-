/*Ejercicio 1*/ 
var hello; //La declaración va a la parte superior 
console.log(hello); // se regsitra como indefinido                             
hello = 'world'; //queda donde estaba originalmente 

/*Ejercicio 2*/ 
var needle; //se eleva, y se hace la declaración de la variable global needle
function test(){ //la función test() también se eleva a la parte superior 
    var needle; // se eleva y se declara la var needle que se encuentra dentro de la función test()
    needle = 'magnet'; // se le asigna un valor a la var needle dentro de la función
    console.log(needle); // se registra el valor 'magnet' en la consola 
}
needle = 'haystack'; // se asigna el valor de var needle global
test(); // se llama a la función test()

/*Ejercicio 3*/ 
var brendan; // se declara y se eleva la var brendan
function print(){ // se eleva también la función print 
    brendan = 'only okay';  //se asigna un valor a var brendan dentro de la función
    console.log(brendan);
}
brendan = 'super cool'; //se asigna el valor a la var brendan 'super cool'
console.log(brendan); // se registra el valor de var brendan global 

/*Ejercicio 4*/ 
var food; //se eleva y de declara la var food
function eat(){ // se eleva la funcion eat()
    var food; // se declara y se eleva la var food dentro de la función 
    food = 'gone'; // se asigna el valor 'gone' a la var food
    food = 'half-chicken'; // se reasigna el valor de la var food a 'half-chicken'
    console.log(food); //se registra el valor de food
    
}
food = 'chicken'; // se asigna el valor 'chicken' a la var global food
console.log(food); // se resgista el valor de la var global food 
eat(); // se llama a la funcion eat()

/*Ejercicio 5*/ 
var mean; // se declara y se eleva la variable global mean 
mean(); // se llama a la función, pero al estar la función como función expresiva, se eleva primero la var y por ende al llamar primero a la función sin antes declararla y asignarle valor, nos dira que no existe esta función
console.log(food); // se registra food, en este caso la variable food no declarada
mean = function() {
    var food; // se eleva y declara la var food dentro de la función
    food = "chicken"; // se asigna un valor a food
    console.log(food);
    food = "fish"; // se reasigna el valor de food 
    console.log(food);
}
console.log(food); //se registra food, en este caso la var food no esta declarada 

/*Ejercicio 6*/ 
var genre; //se declara y se eleva la var genre
function rewind() { //se eleva la función rewind 
    var genre; // se eleva la var genre dentro de la función 
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre); // se registra genre 
genre = "disco"; // se asigna el valor de la var global genre 
rewind(); // se llama a la función
console.log(genre); // se registra genre 

/*Ejercicio 7*/ 
function learn() { // le eleva la función 
    var dojo;  // se eleva la varible dojo 
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose"; // se asigna un valor a la varible global 
console.log(dojo);
learn(); // se llama a la función 
console.log(dojo);

/*Ejercicio 8*/
function makeDojo(name, students){ // se eleva la función 
    const dojo = {}; 
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true; // agrega al objeto que es una constante---hiring: true 
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // trata de reasignar un valor al objeto que es una constante, por lo que en console.log dara un error 
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // dara en la consola name: chicago, students: 50, hiring: true 
console.log(makeDojo("Berkeley", 0)); // da un error 







