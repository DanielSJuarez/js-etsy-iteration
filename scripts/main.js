//Get average price of the items
// const prices = items.map(function(item){
//     return item.price;
// });

const prices = _.map(items,function(item){
    return item.price;
})

const amount = _.reduce(prices,function(acc, i){
    return acc + i;
});

let average = amount / prices.length;
console.log(`The average price is $${average.toFixed(2)}`)

//Returns the objects of prices between $14-$18 
const priceList = _.filter(items,function(key){
    if (14 <= key.price && key.price <= 18){
        return key;
    }
})
console.log(priceList)

//Finds items with GBP code and returns the item and price
const curCodTitle = _.map(items,function(key){
        if(key.currency_code == "GBP"){
            return key.title 
        }
})

const curCodePrice = _.map(items,function(key){
    if(key.currency_code == "GBP"){
        return key.price 
    }
})

console.log(`${curCodTitle.join('')} cost £${curCodePrice.join('')}`);

//Finds which items are made of wood
const woodMat = _.filter(items, function(key){
    if(key.materials.includes('wood'))
    return key 
})

const woodTitle = _.forEach(woodMat,function(key){
    console.log(`${key.title} is made of wood`);
})

//Shows which items were made out of more then eight materials
const larMat = _.filter(items, function(key){
    return key.materials.length >= 8
});

_.forEach(larMat,function(key) {
    console.log(`${key.title}`);
    _.forEach(key.materials, function(material) {
        console.log(material);
    });
    console.log(`\n`);
});

//Calculates how many items were made by sellers
const selMade = _.filter(items, function(key){
    return key.who_made == "i_did"
});

console.log(`${selMade.length} were made by their sellers`)

