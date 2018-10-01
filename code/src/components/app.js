import React from "react"
import Product from "./Product"

const productsJson = require("./../products.json")

console.log("Products:", productsJson)

class App extends React.Component {
  render() {
    let storeProducts = []
    storeProducts = productsJson.products
    console.log(storeProducts)

    // Removes the last word of product name if longer than 18 characters
    storeProducts.forEach((product) => {
      if (product.name.length > 18) {
        const lastWhiteSpace  = product.name.lastIndexOf(" ");
        const shorterName = product.name.slice(0, lastWhiteSpace)
        product.name = shorterName
      }
    })

    return (
      <div className="App">
        <div className="mainContainer">
          <section className="headerSection">
            <h1><span id="logo1">APP</span><br></br>[OTEKET]</h1>
          </section>

          <section className="productSection">
            <h1 className="categoryHeader"><span>BUTIKEN</span><span className="nrItems">({storeProducts.length} produkter)</span></h1>
            <div className="productContainer">
              {storeProducts.map((product, index) => {
                console.log(index)
                return <Product
                  name={product.name}
                  imageUrl={product.image}
                  deliveryTime={product.deliveryTime}
                  description={product.description}
                  key={product.id}
                  numberInPack={product.numberInPack}
                  price={product.price}
                  size={product.size}
                  substance={product.substance}
                  type={product.type}
                />
            })}


{/*              <Product
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
              /> */}

            {/*            <Product name={productsJson.products[1].name} imageUrl={productsJson.products[1].image}></Product>
          <Product name={productsJson.products[2].name} imageUrl={productsJson.products[2].image}></Product>


          */}
            </div>
          </section>

        </div>
      </div>
    )
  }

}

export default App
