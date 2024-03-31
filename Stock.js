let prices=[7,1,5,3,60,4];
let buying_price=prices[0];
let profit=0;
let maxProfit=profit;

for(let i=0;i<prices.length;i++)
{
    if(prices[i]>buying_price)
    {
        profit=(prices[i]-buying_price);
        maxProfit=Math.max(profit,maxProfit);
    }
    else{
        buying_price=prices[i];
    }
}
console.log(maxProfit);