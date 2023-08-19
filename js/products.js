function obtenerAutos(){
    const producto = document.getElementById("mostrar-productos");
    const promise = fetch("https://japceibal.github.io/emercado-api/cats_products/101.json");
        promise
            .then(response => response.json())
            .then(infoApi => {
                console.log(infoApi);
                let prod = infoApi.products
    
               for (let i = 0; i < prod.length; i++) {
                   producto.innerHTML += `<div>
                   <div>${prod[i].name} - ${prod[i].currency}  ${prod[i].cost}</div>   
                   <div><img src=${prod[i].image} style= max-width:20vh></div>
                   ${prod[i].description}  
                   ${prod[i].soldCount} vendidos</div>`;
                   
                  
               }
            }); 
};
                    // <li class=product-id>${prod[i].id}</li>
obtenerAutos();
