const initialPrice=document.querySelector("#init-price");
const numberOfStocks=document.querySelector("#stocks");
const FinalPrice=document.querySelector("#final-price");
const checkButton=document.querySelector("#check");
const output=document.querySelector("#output");

checkButton.addEventListener("click",clickHandler);

function clickHandler()
{
    initPrice=parseInt(initialPrice.value);
    numOfStocks=parseInt(numberOfStocks.value);
    finPrice=parseInt(FinalPrice.value);
    if(initialPrice.value && numberOfStocks.value && FinalPrice.value)
    {
        calculateNet(initPrice,finPrice,numOfStocks);
    }
    else
    {
        output.style.display="none";
        alert("Please Enter all the Fields!!");
    }
}
function calculateNet(initPrice,finPrice,numOfStocks)
{
    costPrice=initPrice*numOfStocks;
    sellingPrice=finPrice*numOfStocks;

    if(costPrice < sellingPrice)
    {
        profit=(sellingPrice-costPrice).toFixed(2);
        profitPercentage=((profit/costPrice)*100).toFixed(2);
        output.innerText="Yaay🥳!You made a profit of "+profit+" and your Profit Percentage is "+profitPercentage+"%";
        output.style.color="green";
        output.style.display="block";
    }
    else if(costPrice > sellingPrice)
    {
        loss=(costPrice-sellingPrice).toFixed(2);
        lossPercentage=((loss/costPrice)*100).toFixed(2)
        output.innerText="Uh-Oh😭!Your loss is "+loss+" and your loss Percentage is "+lossPercentage+"%";
        output.style.color="red";
        output.style.display="block";
    }
    else
    {
        output.innerText="No pain,No gain and No gain,No pain :)";
        output.style.color="gray";
        output.style.display="block";
    }
}