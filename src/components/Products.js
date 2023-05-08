import React from "react";
const productLists = [
  {name: "Product 1", 
  id: 1,
  price: 10,
  description:" tét RAM desktop APACER DDR4 8G 3200 OC NOX RGB AURA 2 (1 x 8GB) DDR4 3200MHz (AH4U08G32C28YNBAA-1)"
  },
  {name: "Product 2", 
  id: 2,
  price: 20,
  description:" test react test 2 RAM desktop APACER DDR4 8G 3200 OC NOX RGB AURA 2 (1 x 8GB) DDR4 3200MHz (AH4U08G32C28YNBAA-1)"
  },
  {name: "Product 3", 
  id: 3,
  price: 30,
  description:"RAM desktop APACER DDR4 8G 3200 OC NOX RGB AURA 2 (1 x 8GB) DDR4 3200MHz (AH4U08G32C28YNBAA-1)"
  },
]

function Products (){
  return(
    <div>
      {productLists.map(product =>
        <div key={product.id}>
          <h2>{product.name} xx</h2>
          <p>{product.price} 000</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}
export default Products;