# Rouge-Frontend


## Table of Contents
* [About](#about-rouge)
* [Video](#rouge-walkthrough-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Features](#rouge-features)
* [Status](#status)
* [Why Rouge](#why-rouge)
* [Contact](#contact)
* [License](#license)

## About Rouge
Rouge is a fun, lighthearted webapp that allows users to pic their makeup looks based on if they want a day or night look. Often, daytime makeup looks are based on light colors and shades while nightime makeup looks permit deeper colors and shades. After selecting if they want a day or night look, the user can view more information about the product, add the product to their "look" and ultimately purchase the product by going to the product link provided. 


## Rouge Walkthrough Video
[Rouge Walkthrough](Insert Here)

## Technologies
React.js - Version 16.13.1

JavaScript ES6

HTML5 / CSS3

## Setup

1. To run this project, please go to the [Rouge Backend repo](https://github.com/NyaradzoUBere/Rouge-Backend) and follow setup instructions
2. Run ~ npm start in your front-end directory

## Code Examples

```
  lightOrDark = () => {
    if (this.state.lightProducts) {
      return this.showLightProducts()
    } else if (this.state.darkProducts) {
      return this.showDarkProducts()
    } else {
      return this.showProducts()
    }
  }
```
```
  showProducts = () => {
    return this.state.products.map(product => {
      return <Card product = {product} clickLooks = {this.addToLooks}/>
    })
  }
```
## Rouge Features
* Select Daytime or Nightime makeup Products
* Receive details of the products selected such as name, brand, description, etc.
* Add your favorite products to your makeup look
* Purchase the product by following the product links provided


To-Do List:
* Break down products by type to allow for an enhanced user experience

## Status
Completed.

## Why Rouge?
I chose to create this app as a fun, lighthearted way to practice my React knowledge. I live off the idea that it's a lot more fun to learn something when it is directly tied to your interests. I have appreciated makeup for many years now and I wanted to make an app that I know I would use as a consumer myself.

## Contact
Created by [Nyaradzo Bere](http://www.linkedin.com/in/nyaradzo-bere)

## License
[View Here](License.txt)
