//RESUELVE LOS EJERCICIOS AQUI
//EJERCICIO 1 
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => numbers.map(num => num ** num)

console.log(elevados());

//EJERCICIO 2
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const result2 = foodList.map((com) => {
    if (com == "Pizza") {
        return `Como soy de Italia, amo comer ${com}`
    }
    if (com == "Ramen") {
        return `Como soy de Japón, amo comer ${com}`
    }
    if (com == "Paella") {
        return `Como soy de Valencia, amo comer ${com}`
    }
    if (com == "Entrecot") {
        return `Aunque no como carne, el ${com} es sabroso`
    }
});

//EJERCICIO 3
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
]
const result3 = staff.map((ob) => {
    return `${ob.name} es ${ob.role} y le gusta ${ob.hobbies[0]} y ${ob.hobbies[1]}`
});


//EJERCICIO 4 
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result4 = numbers2.filter((num) => num % 2 !== 0);
//console.log(result4);

//EJERCICIO 5 
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

const result5 = foodList2
    .filter((obj) => obj.isVeggie === true)
    .map((obj) => {
        const saludo = obj.name === 'Tofu burguer' ? "Que rica" : "Que rico";
        return `${saludo} ${obj.name} me voy a comer!`;
    });

//EJERCICION 6 
const inventory = [
    {
        name: 'Mobile phone',
        price: 199,
    },
    {
        name: 'TV Samsung',
        price: 459,
    },
    {
        name: 'Viaje a Cancún',
        price: 600,
    },
    {
        name: 'Mascarilla',
        price: 1,
    }
];
const result6 = inventory
    .filter((obj) => obj.price > 300)
    .map((obj) => obj.name)

//EJERCICIO 7
const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((num, numeroActual) => {
    return num * numeroActual;
}, 1);

//EJERCICIO 8 
const sentenceElements = [
    'Me',
    'llamo',
    'Amparo',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
const result8 = sentenceElements.reduce((palabra, cadenaActual) => {
    return palabra + " " + cadenaActual;
}); 

//EJERCICIO 9
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];
const result9 = books
    .filter((book) => book.category === 'code')
    .reduce((monto, book) => {
            return monto + book.price;
    }, 0);
