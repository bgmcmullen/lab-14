'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // Save product data to local storage
  let stringifiedProducts = JSON.stringify(this.allProducts);

  localStorage.setItem('myProducts', stringifiedProducts);
}

AppState.prototype.loadItems = function () {

  // Retrieve data from local storage.
  this.instantiateProducts();
  let retrievedProducts = JSON.parse(localStorage.getItem('myProducts'));

  if(retrievedProducts){
    for(let i = 0; i < retrievedProducts.length; i++){
      this.allProducts[i].timesClicked = retrievedProducts[i].timesClicked;
      this.allProducts[i].timesShown = retrievedProducts[i].timesShown;
    }
  }
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
