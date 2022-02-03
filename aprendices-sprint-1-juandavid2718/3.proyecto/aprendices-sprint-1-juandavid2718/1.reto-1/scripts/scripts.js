
const quantityData = document.getElementById("quantity");
const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
const contentTotalCompra = document.getElementById("totalCompra")
const contentDiscount = document.getElementById("discount")
const contentTotal = document.getElementById("total")
const labelDiscount = document.getElementById("labelDiscount")
var btn = document.getElementById("boton");
const computer =  950000 

const calculate = (e) => {
    e.preventDefault();
    const totalCompra = quantityData.value * computer
    let discount = 0
   
    switch (true) {
        case (totalCompra >= 1640000 && totalCompra <= 3280000):
            discount = 0.15 
            break;
        case (totalCompra >= 3280000 && totalCompra <= 6560000 ):
            discount = 0.25;
            break;
        case (totalCompra >= 6560000 && totalCompra <= 9840000 ):
            discount = 0.35
            break;  
        default:        
            discount = 0
            break;
    }
    const totalDiscount = totalCompra * discount
    section1.setAttribute("class", "hide");
    section2.setAttribute("class", "visible")
    contentTotalCompra.getElementsByTagName("input")[0].value = totalCompra
    if (discount === 0 ) {
        contentDiscount.getElementsByTagName("input")[0].value = "No tiene derecho a descuento";
    } else {
        contentDiscount.getElementsByTagName("input")[0].value = totalDiscount;
    }
    contentTotal.getElementsByTagName("input")[0].value = totalCompra - totalDiscount 
    labelDiscount.textContent = `Su descuento fue de: ${discount * 100}%`
    
}

btn.onclick = calculate

