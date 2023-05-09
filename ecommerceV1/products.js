// const categoryTitle = document.getElementsByClassName('category-title tabs')

// let products = []
//define global variable to get element that was clicked 

// event listener on category title 
 // categoryTitle.addEventListener('click', function(){

   //empty variable 

   // get value of h3 that was clicked 


   //update variable with h3 clicked 

   // convert json to array 


   // filter array of products based on category 


   // update global variable 
   
// })

fetch("products.json")

.then(function(response){
   return response.json();
 //  return products = response.json()
})
.then(function(products){
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


