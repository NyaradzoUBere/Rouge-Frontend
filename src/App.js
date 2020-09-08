import React from 'react';
import Card from './components/Card'
import Banner from './components/Banner'
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
      return <Card image= {product.image_link} name = {product.name}/>
    })
  }

  // console.log(this.state.products)
  render() {
    return (
      <div className="App">
        <Banner />
        <ul className = "product-list">
          {this.showProducts()}
        </ul>
      </div>
    );
  }
}

export default App;
