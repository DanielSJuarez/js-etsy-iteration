(function() {
    'use strict';
//Get average price of the items
const prices = items.map(function(item){
    return item.price;
}); 

const amount = prices.reduce(function(acc, i){
    return acc + i;
})

let average = amount / prices.length;
console.log(`The average price is $${average.toFixed(2)}`)
// const prices = items
    // .map(function(item){
    //     return item.price;
    // }); 
    // .reduce(function(acc, i){
    //     return acc + i;
    // })
//items.length

// const priceOfAllItems = items.reduce(function(acc, i){
//     return acc + i.price; //grabs the first object in the array and grab the first price in that object for the first time. will error the second time as acc.price isnt a prop 
// }, 0) //puts zero as the value of acc the first time and then get i.price which is the nubmer and adds that together. 


//Returns the objects of prices between $14-$18 
// if (14 <= key.price && key.price <= 18){
    //     return key;
    // }

const priceList = items.filter(function(key){
    return 14 <= key.price && key.price <= 18 && key.currency_code === "USD"
})
console.log(`Items that cost between $14.00 USD and $18.00 USD`)
console.log(priceList)

//Finds items with GBP code and returns the item and price
const curCodTitle = items.map(function(key){
        if(key.currency_code == "GBP"){
            return key.title 
        }
})

const curCodePrice = items.map(function(key){
    if(key.currency_code == "GBP"){
        return key.price 
    }
})

console.log(`${curCodTitle.join('')} cost £${curCodePrice.join('')}`);

// items
    // .filter(function(item){
    //     return item.currency_cod === 'GBP'
    // })
    // .forEach(function(item){
    //     console.log(`${item.title} costs ${item.price}`)
    // });

//Finds which items are made of wood
const woodMat = items.filter(function(key){
    if(key.materials.includes('wood'))
    return key 
})

const woodTitle = woodMat.forEach(function(key){
    console.log(`${key.title} is made of wood`);
})

// items
    // .filter(function(key){
    //     return key.materials.includes('wood');
    // })
    // .forEach(function(key){
    //     console.log(`${key.title} is made of wood`);
    // })

//Shows which items were made out of more then eight materials
const larMat = items.filter(function(key){
    return key.materials.length >= 8
});

larMat.forEach(function(key) {
    console.log(`${key.title}`);
    key.materials.forEach(function(material) {
        console.log(material);
    });
    console.log(`\n`);
});

//Calculates how many items were made by sellers
const selMade = items.filter(function(key){
    return key.who_made === "i_did"
});

console.log(`${selMade.length} were made by their sellers`)

})();
