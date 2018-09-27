import React from "react"

class Product extends React.Component {
  render() {

    return (

      <div className="product">

        <h1>{this.props.name}</h1>
        <img src={`${this.props.imageUrl}`} alt="product"></img>
        <p>{this.props.deliveryTime}</p>
        <p>{this.props.description}</p>
        <p>{this.props.id}</p>
        <p>{this.props.numberInPack}</p>
        <p>{this.props.price}</p>
        <p>{this.props.size}</p>

      </div>
    )
  }
}
export default Product
