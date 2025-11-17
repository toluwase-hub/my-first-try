const initiallInvest = document.getElementById("initial-invest");
const gainInvest = document.getElementById("gain-invest");
const periodInvest = document.getElementById("period-invest");
const calculateInvest = document.getElementById("calculateInvest");
const resultInvest = document.getElementById("resultInvest");
const anual = document.getElementById("anual");
const option = document.getElementById("option");
const showoption = document.getElementById("showoption");
const totalin = document.getElementById("totalin");

showoption.addEventListener("click", () => {
    // e.stopPropagation();
    if(option.style.display === "none"){
        option.style.display = "flex"
    } else{
        option.style.display = "none"
    }
    
})
//  showoption.addEventListener('click', (e) => {
//   if(e.target !== drop1 &&  !list1.contains(e.target)){
//     option.style.display = "none"
//   }
// })

function addtoYear(value){
    periodInvest.value = value
}




calculateInvest.addEventListener("click", () => {
    const inti = parseFloat(initiallInvest.value);
    const gain = parseFloat(gainInvest.value);
    const period = parseFloat(periodInvest.value);

if(isNaN(inti) || isNaN(gain) || isNaN(period)){
    resultInvest.textContent = `Input valid numbers`;
    return;
}
    
    let simple = inti * gain * period / 100;
    let total = inti + simple;
    let anuall = simple / period
    

    
     
    resultInvest.innerHTML = `Payback: ${total.toFixed(2)}`;
    anual.innerHTML = `Annua Interest: ${anuall.toFixed(2)}`;
    totalin.innerHTML = `Total Interest: ${simple.toFixed(2)}`
})
