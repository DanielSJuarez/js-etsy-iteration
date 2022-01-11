//Get average price of the items
const prices = items.map(function(item){
    return item.price;
});

let amount = 0;
for(let i = 0; i < prices.length; i++) {
    amount += prices[i];
} 

let average = amount / prices.length;
console.log(`The average price is $${average.toFixed(2)}`)

//Returns the objects of prices between $14-$18 
const priceList = items.filter(function(key){
    if (14 <= key.price && key.price <= 18){
        return key;
    }
})
console.log(priceList)

//Finds items with GBP code and returns the item and price
const curCodTitle = items.map(function(code){
        if(code.currency_code == "GBP"){
            return code.title 
        }
})

const curCodePrice = items.map(function(code){
    if(code.currency_code == "GBP"){
        return code.price 
    }
})

console.log(`${curCodTitle.join('')} cost $${curCodePrice.join('')}`);

//Finds which items are made of wood

