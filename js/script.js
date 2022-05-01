const subTypeElement = document.querySelector("#subscription");
const subDurationElement = document.querySelector("#months");
const result = document.querySelector(".result");
let subType = "basic";
let subDuration = 1;

subTypeElement.addEventListener("click", function(e){
    subType = e.target.value;
    updateSubsriptionDiv();
});

subDurationElement.addEventListener("click", function(e){
    subDuration = e.target.value;
    updateSubsriptionDiv();
});

let updateSubsriptionDiv = function() {
    let monthlyCost = 5;
    if(subType === "standard"){
        monthlyCost = 7;
    } else if(subType === "premium"){
        monthlyCost = 10;
    }
    const total = monthlyCost * subDuration;

    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
}