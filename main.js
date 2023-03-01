function calcular() {
    var c,uc,s,us,total
        c = document.getElementById("camiseta").value;
        uc = document.getElementById("ucamisetas").value;
        s = document.getElementById("sudaderas").value;
        us = document.getElementById("usudaderas").value;
        total = document.getElementById("total").value;
        let descuento = 0;
        var precio; 
                precio = (1*c*uc) + (1*s*us);
        if  (document.getElementById("si").checked) {
            descuento = (precio*25)/100
             let preciodescuento = (precio - descuento)
                preciodescuento = preciodescuento + "€"
                    document.getElementById("total").value = preciodescuento;           
         }
         if  (document.getElementById("no").checked) {
                precio = precio + "€"
                    document.getElementById("total").value = precio;           
         }
}

function eliminar() {
    document.getElementById("miform").reset();
}

function enviar() {
    alert("Gracias por contactarme, en breves obtendras mi respuesta")
    document.getElementById("cvform").reset();
}

function formuenviar() {
    alert("Gracias por valorar mi pagina web");
    window.location.href='agradecimientos.html';

}
function formueborrar () {
    document.getElementById("formuval").reset();

}