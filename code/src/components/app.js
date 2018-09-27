import React from "react"
import Product from "./Product"

const productsJson = require("./../products.json")

console.log("Products: (Remove this line in app.js!)", productsJson)

class App extends React.Component {

  render() {
    // class inStore = productsJson.products
    // console.log(inStore)
    return (
      <div className="App">
        <div className="mainContainer">
          <section className="headerSection">
            <h1>HEADER</h1>
          </section>

          <section className="productSection">
            <h1>PRODUCTS</h1>
            <div className="productContainer">


              <Product
                name={productsJson.products[0].name}
                imageUrl={productsJson.products[0].image}
                deliveryTime={productsJson.products[0].deliveryTime}
                description={productsJson.products[0].description}
                id={productsJson.products[0].id}
                numberInPack={productsJson.products[0].numberInPack}
                price={productsJson.products[0].price}
                size={productsJson.products[0].size}
                substance={productsJson.products[0].substance}
                type={productsJson.products[0].type}
              />

            {/*            <Product name={productsJson.products[1].name} imageUrl={productsJson.products[1].image}></Product>
          <Product name={productsJson.products[2].name} imageUrl={productsJson.products[2].image}></Product>
          {productsJson.products.map()}

          */}
            </div>
          </section>

        </div>
      </div>
    )
  }

}

export default App
