import React from 'react';
import Banner from './components/Banner'
import Card from './components/Card'
import LookCard from './components/LookCard'
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
    products: [],
    looks: [],
    lightProducts: false,
    darkProducts: false
  }

  componentDidMount() {
    fetch(productsUrl)
      .then(response => response.json())
      .then(products => this.setState({products}))
      .then(this.productColors)
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

  showProducts = () => {
    return this.state.products.map(product => {
      return <Card product = {product} clickLooks = {this.addToLooks}/>
    })
  }

  showLooks = () => {
    return this.state.looks.map(product => {
    return <LookCard key = {product.id} product={product} clickLooks = {this.removeFromLooks}/>
    })
  }

  addToLooks = (product) => {
    if (!this.state.looks.includes(product)) {
      this.setState({
        looks: [...this.state.looks, product]
      })
    }
  }

  removeFromLooks = (product) => {
    let looks = this.state.looks.filter(look => look !== product)
    this.setState({looks})
  }

  showLightProducts = () => {
    return this.state.products.map(product => {
        if (product.hasLight) {
          return <Card product = {product} clickLooks = {this.addToLooks}/>
        }
      })
  }
  showDarkProducts = () => {
    return this.state.products.map(product => {
        if (product.hasDark) {
          return <Card product = {product} clickLooks = {this.addToLooks}/>
        }
      })
  }

  lightColors = () => {
    this.setState({...this.state, lightProducts: true, darkProducts: false})
  }
  darkColors = () => {
    this.setState({...this.state, darkProducts: true, lightProducts: false})
  }

  lightOrDark = () => {
    if (this.state.lightProducts) {
      return this.showLightProducts()
    } else if (this.state.darkProducts) {
      return this.showDarkProducts()
    } else {
      return this.showProducts()
    }
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <div className = "button">
          <button className = "day-night-button" onClick = {this.lightColors}>Day</button>
          <button className = "day-night-button"  onClick = {this.darkColors}>Night</button>
        </div>
        <ul className = "product-list">
          {this.lightOrDark()}
        </ul>
        <div>
          <h1 className = "looks-title">Your Look</h1>
          <ul className = "looks-list">
            {this.showLooks()}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
