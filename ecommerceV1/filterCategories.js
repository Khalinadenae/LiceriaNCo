
              
fetch("products.json")
.then(function(response){
   return response.json();
 //  return products = response.json()
})
.then(function(products){
   let output = "";
   // if( categoryTitle)
   for(let product of products ){
    if (products.category === "necklace" ) {
      output += `
      <div class="product tab-content">
      <img src="${product.image}">
      <p class="title">${product.title}</p>
      <p class="description">${product.description}</p>
      <p class="price">
         <span>${product.price}</span>
      </p>
   </div>
      `;
   }
}
   document.querySelector(".products").innerHTML = output;
});


