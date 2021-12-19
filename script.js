document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("form");
    const includeDigits = document.getElementById("include_digits");
    const includeLowercase = document.getElementById("include_lowercase");
    const includeUppercase = document.getElementById("include_uppercase");
    const includeSpecialCharacters = document.getElementById("include_special_characters");
    const passwordLength = document.getElementById("password_length");
    const quantity = document.getElementById("quantity");
    const result = document.getElementById("result");
   
    form.addEventListener("submit", function(event){
        event.preventDefault();
        event.stopPropagation();
        result.textContent = "";
        const urlRoot = "https://api.motdepasse.xyz/create/?";
        let url = urlRoot;
        let isOK = false;
        if(includeDigits.checked){
            url += includeDigits.value;
            isOK = true; 
        }
        if(includeLowercase.checked){
            if(url != urlRoot){
                url += "&"; 
            }
            url += includeLowercase.value; 
            isOK = true;
        }
        if(includeUppercase.checked){
            if(url != urlRoot){
                url += "&"; 
            }
            url += includeUppercase.value; 
            isOK = true;
        }
        if(includeSpecialCharacters.checked){
            if(url != urlRoot){
                url += "&"; 
            }
            url += includeSpecialCharacters.value; 
            isOK = true;
        }
        if(url != urlRoot){
                url += "&"; 
        }
        url += "password_length=" + passwordLength.value + 
        "&quantity=" + quantity.value; 

        if(isOK){

            fetch(url).then(function(response){
                if(response.ok){
                    return response.json();
                }
            }).then(function(value){
                result.innerHTML = "<h1>Generated password(s)</h1>";
                value.passwords.forEach(element => {
                    const newParagraph = document.createElement("p");
                    newParagraph.textContent = element;
                    result.appendChild(newParagraph);
                });
            }).catch(function(err){
                console.log(err);
            })

        } else{
            alert("Choose at least one option.");
        }
    
        
    })


});

