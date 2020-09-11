# Rouge-WebApp-Frontend


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
* Input and track expenses
* Visualize expenses through a colored donut chart
* Provide finance and budgetting resources


To-Do List:
* Add expense breakdown option: labeling expense type

## Status
Completed.

This app is built to carry out the CRUD framework

## Why Rouge?
I created this app because of my personal affinity for finance. Being a recent graduate of both finance and accounting, I constantly think about the ways I am breaking out my daily, weekly, and monthly income. This app serves as a beginner's resource for those just now thinking about how finance plays into their lives and ways to improve financial habits.

## Contact
Created by [Nyaradzo Bere](http://www.linkedin.com/in/nyaradzo-bere)

## License
[View Here](License.txt)
