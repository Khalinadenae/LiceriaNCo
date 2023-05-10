fetch("products.json")
// using the fetch api to retrieve the json data

// fetch returns a promise 

.then(function(response){ // promise is handeled by taking the response and convertimng it to JSON object 
   return response.json(); // convert data to work with it in JS 
 
})
.then(function(products){ // generates HTML content for the data to be displays in HTML 
   let output = "";
   // if( categoryTitle)
   for(let product of products){
      
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
   
   document.querySelector(".products").innerHTML = output;
});


