import React from "react"
import Product from "./Product"

const productsJson = require("./../products.json")

class App extends React.Component {
  render() {
    let storeProducts = []
    storeProducts = productsJson.products

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
            </div>
          </section>
        </div>
      </div>
    )
  }

}

export default App
