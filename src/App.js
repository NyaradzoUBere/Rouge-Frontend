import React from 'react';
import Card from './components/Card'
import Banner from './components/Banner'
// import Button from './components/Button'
import './App.css';

const baseUrl = "http://localhost:3000"
const productsUrl = `${baseUrl}/products`

class App extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch(productsUrl)
      .then(response => response.json())
      .then(products => this.setState({products}))
      // .then(products => console.log(products))
  }

  showProducts = () => {
    return this.state.products.map(product => {
      return <Card image= {product.image_link} name = {product.name} description = {product.description}/>
    })
  }

  // productColors = () => {
  //   return this.state.products.map(product => {
  //     return (product.product_colors.map(color =>{
  //       // console.log(color)
  //       const newString = (color.substr(14,12))
  //       const productColor = newString.substr(1,7)
  //       const rawProductColor = productColor.substr(1,productColor.length);
  //       console.log(productColor)
  //     }))
  //   })
  // }

  productColors = () => {
    return this.state.products.map(product => {
      return (product.product_colors.map(color =>{
        // console.log(color)
        const newString = (color.substr(14,12))
        let productColor = newString.substr(1,7)
        productColor = +("0x" + productColor.slice(1).replace( 
          productColor.length < 5 && /./g, '$&$&'));

          // let r, g, b, hsp;
          let r
          let g
          let b
          let hsp
          r = productColor >> 16;
          g = productColor >> 8 & 255;
          b = productColor & 255;

          hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
            );
        
            // Using the HSP value, determine whether the color is light or dark
            if (hsp>127.5) {
                console.log('light');
            } 
            else {
                console.log('dark');
            }
            // this.setState({product_colors: hsp})
            // <Button hsp = {this.state.product.product_colors} />
      }))
    })
  }

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
        {this.productColors()}
      </div>
    );
  }
}

export default App;
