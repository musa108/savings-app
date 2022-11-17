let tiers = document.getElementById("tiers")
tiers.addEventListener('change',function () 
{
    tier_info = document.getElementById("tier-info");
    let btn = document.getElementById("btn");
 if (tiers.value == "Tier 1") {
    tier_info.innerText = "5% interest per week";
    let calculate = () =>{
        let p = Number(document.getElementById("amount").value);
        console.log(p)
        let si = p*5*7/100*1/365;
    console.log(si);
    let amount = p + si;
    let Name = document.getElementById("name");
    let output_name = document.getElementById("result-name");
    let input_tier = document.getElementById("tier-one");
    let output_tier = document.getElementById("result-tier");
    let input_amount = document.getElementById("amount");
    let output_amount = document.getElementById("result-amount");
    let amount_info = document.getElementById("amount-info");
      input_amount.addEventListener("keyup", () =>{
        if (input_amount.length > 1000) {
            amount_info.innerText = "cant be more than 10000"

        }
      })
 
     output_name.innerHTML = 
     `<div>Student Name: <span>${Name.value}</span></div>`;
     output_tier.innerHTML = 
     `<div>Tier: <span>${input_tier.value}</span></div>`;
     output_amount.innerHTML = 
     `<div>Amount Saved: <span>N${input_amount.value}</span></div>`;
    document.getElementById("total").innerHTML=
    `<div>Total amount: <span>N${amount.toFixed(2)}</span></div>`;
    
    };
    window.addEventListener("load",calculate);
btn.addEventListener("click", calculate);
 } else if(tiers.value == "Tier 2") {
    tier_info.innerText = "10% interest per week";

    let calculate = () =>{
        let p = Number(document.getElementById("amount").value);
        console.log(p)
        let si = p*10*7/100*1/365;
    console.log(si);
    let amount = p + si;
    let Name = document.getElementById("name");
    let output_name = document.getElementById("result-name");
    let input_tier = document.getElementById("tier-two");
    let output_tier = document.getElementById("result-tier");
    let input_amount = document.getElementById("amount");
    let output_amount = document.getElementById("result-amount");
    let amount_info = document.getElementsByClassName("amount-info");
     output_tier.innerHTML = 
     `<div>Tier: <span>${input_tier.value}</span></div>`;
     output_name.innerHTML = 
     `<div>Student Name: <span>${Name.value}</span></div>`
     output_amount.innerHTML = 
     `<div>Amount Saved: <span>N${input_amount.value}</span></div>`;
    document.getElementById("total").innerHTML=
    `<div>Total amount: <span>N${amount.toFixed(2)}</span></div>`;
    
    };
    window.addEventListener("load",calculate);
btn.addEventListener("click", calculate);
 }
else if (tiers.value == "Tier 3") {
    tier_info.innerText = "20% interest per week";   
    
    let calculate = () =>{
        let p = Number(document.getElementById("amount").value);
        console.log(p)
        let si = p*20*7/100*1/365;
    console.log(si);
    let amount = p + si;
    let Name = document.getElementById("name");
    let output_name = document.getElementById("result-name");
    let input_tier = document.getElementById("tier-three");
    let output_tier = document.getElementById("result-tier");
    let input_amount = document.getElementById("amount");
    let output_amount = document.getElementById("result-amount");
    let amount_info = document.getElementsByClassName("amount-info");
     output_name.innerHTML = 
     `<div>Student Name: <span>${Name.value}</span></div>`;
     output_tier.innerHTML = 
     `<div>Tier: <span>${input_tier.value}</span></div>`;
     output_amount.innerHTML = 
     `<div>Amount Saved: <span>N${input_amount.value}</span></div>`;
    document.getElementById("total").innerHTML=
    `<div>Total amount: <span>N${amount.toFixed(2)}</span></div>`;
    
    };
    window.addEventListener("load",calculate);
   btn.addEventListener("click", calculate);

}
else{
    tier_info.innerText = "";
}
},false);




