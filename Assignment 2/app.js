//      Question#1
document.write("<h1>Questions # 01</h1>")

let exp = "faraz" || (true + false) + 5 && " " || "true";
document.write(`Ans1. ${exp} <br>`);

let b = 3;
let exp1 = (1 + 2) + ++b || 5 && 0 ; 
document.write(`Ans2. ${exp1} <br>`);

let a = 5;
let exp2 = 32 && true - ++a && " " || "true"; 
document.write(`Ans3. ${exp2} <br>`);

let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
document.write(`Ans4. ${exp3} <br>`);

let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
document.write(`Ans5. ${exp4} <br>`);

let exp5 = false || (true + true) + 15 && "" || 50;
document.write(`Ans6. ${exp5} <br>`);

let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
document.write(`Ans7. ${exp6} <br>`);

let exp7 = "faraz" || false + 10 || "true";
document.write(`Ans8. ${exp7} <br>`);

let exp8 = 12 + (false + false) + true && null || "faraz";
document.write(`Ans9. ${exp8} <br>`);

let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
document.write(`Ans10. ${exp9} <br>`);

let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
document.write(`Ans11. ${exp10} <br>`);

let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
document.write(`Ans12. ${exp11} <br>`);
//   Question # 1 end


//    Questions # 2 start
document.addEventListener("DOMContentLoaded", function() {
const brands = {
    "Apple": ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 15 Pro"],
    "Samsung": ["Galaxy A55", "Galaxy Z Fold5", "Galaxy Z Flip5", "Galaxy S24 Ultra"],
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const searchButton = document.getElementById("searchButton");
const resultDiv = document.getElementById("result");

    //  brand dropdown
for (let brand in brands) {
    let option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
}

    //  brand dropdown change
brandSelect.addEventListener("change", function() {
    modelSelect.innerHTML = '<option value="">--Select Model--</option>';
    let selectedBrand = brandSelect.value;
    if (selectedBrand) {
        let models = brands[selectedBrand];
        models.forEach(model => {
            let option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
});

    //  search button
searchButton.addEventListener("click", function() {
    let selectedBrand = brandSelect.value;
    let selectedModel = modelSelect.value;
    if (selectedBrand && selectedModel) {
            resultDiv.textContent = `Selected Brand: ${selectedBrand}, Selected Model: ${selectedModel}`;
    } else {
            resultDiv.textContent = "Please select both brand and model.";
        }
    });
});
//    Question# 2 end