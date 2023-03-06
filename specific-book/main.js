// // Суворий режим

// // "use strict"

// // Змінні

// // countAmountBook.value = 43;

// countAmountBook.onfocus = () =>{
    //     canculatedPrice(countAmountBook.value);  
    // }
    // const priseBook = 20;
    // let amountBook = 44;
    // let actualPrise = 0;


    // // //Логіка формування ціни
    // function canculatedPrice(amountBook){
        // if (amountBook < 0 ){
            //     alert("min 0");
            //     amountBook = 0}
            //     if(amountBook > 42){ 
                //         alert("max 42");
                //         amountBook = 42} 
                //         return amountBook;
                //     }
                //     actualPrise = amountBook * priseBook; 
                //     console.log('countAmountBook', canculatedPrice(amountBook));
                
const countAmountBook = document.getElementById('count').value;
function decreaseValue() { if (countAmountBook > 0) { 
    quantity--; document.getElementById('count').value = quantity; updatePrice(); } }

