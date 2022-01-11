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

//Find item with GBP code and returns the item and price
const curCode = items.reduce(function(code){
    
})

//console.log(`${} cost ${}`);
