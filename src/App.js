import React from 'react';
import Card from './components/Card'
import Banner from './components/Banner'
// import Button from './components/Button'
import './App.css';

const baseUrl = "http://localhost:3000"
const productsUrl = `${baseUrl}/products`

let r
let g
let b
let hsp
let shade

class App extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch(productsUrl)
      .then(response => response.json())
      .then(products => this.setState({products}))
      .then(this.productColors)
  }

  showProducts = () => {
    return this.state.products.map(product => {
      return <Card image= {product.image_link} name = {product.name} description = {product.description} showPrice = {this.showPrice} price = {product.price}/>
    })
  }


  productColors = () => {
    let products = this.state.products.map(product => {
      let hasDark = false
      let hasLight = false
      product.product_colors.forEach(color => {
        const newString = (color.substr(14,12))
        let productColor = newString.substr(1,7)
        productColor = +("0x" + productColor.slice(1).replace( 
          productColor.length < 5 && /./g, '$&$&'));

          r = productColor >> 16;
          g = productColor >> 8 & 255;
          b = productColor & 255;

          hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
            );
        
            // Using the HSP value, determine whether the color is light or dark
            if (hsp > 127.5) {
              hasLight = true;
            } 
            else {
              hasDark = true
            }
      })
      return {...product, hasLight, hasDark}
    })
    this.setState({products})
  }

  // setColorState = () => {
  //   let products = [...this.state.products]
  //   products.product_colors = shade;
  //   this.setState({products})
  // }

  // setColorState = () => {
  //   let products = this.state.products.map(product => {
  //     return {...product, shade: }
  //   })
  //   products.product_colors = shade;
  //   this.setState({products})
  // }

  render() {
    return (
      <div className="App">
        <Banner />
        <div className = "button">
          {/* <Button /> */}
        </div>
        <ul className = "product-list">
          {this.showProducts()}
        </ul>
      </div>
    );
  }
}

export default App;
