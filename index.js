//RESUELVE LOS EJERCICIOS AQUI
//EJERCICIO 1 
const numbers = [4, 5, 6, 7, 8, 9, 10 ];

const elevados= () => numbers.map(num => num**num) 

console.log(elevados());

//EJERCICIO 2
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const result2 = foodList.map((com) => {
    if (com == "Pizza"){
        return `Como soy de Italia, amo comer ${com}`
    }
    if (com == "Ramen"){
        return `Como soy de Japón, amo comer ${com}`
    }
    if (com == "Paella"){
        return `Como soy de Valencia, amo comer ${com}`
    }
    if (com == "Entrecot"){
        return `Aunque no como carne, el ${com} es sabroso`
    }
});

//EJERCICIO 3
const staff = ["The Boss", "becaria", "programador", "secretario"];
const result3 = staff.map((empleo) => {
    if (empleo === "The Boss"){
        return `Pepe es ${empleo} y le gusta leer y ver pelis`
    }
    if (empleo == "becaria"){
        return `Ana es ${empleo} y le gusta nadar y bailar`
    }
    if (empleo == "programador"){
        return `Luis es ${empleo} y le gusta dormir y comprar`
    }
    if (empleo == "secretario"){
        return `Carlos es ${empleo} y le gusta futbol y queso`
    }
});

//EJERCICIO 4 
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result4 = numbers2.filter((num) => num % 2 !== 0);
//console.log(result4);

//EJERCICIO 5 
const foodList2 = [
    {name: 'Tempeh', isVeggie: true},
    {name: 'Cheesbacon burguer', isVeggie: false},
    {name: 'Tofu burguer', isVeggie: true},
    {name: 'Entrecot', isVeggie: false}
]
const result5 = foodList2((obj) => {
    if (obj.isVeggie === true) {
        return obj;
    }
});
