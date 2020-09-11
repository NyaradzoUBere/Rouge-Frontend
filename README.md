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
JavaScript ES6

HTML5 / CSS3

## Setup

1. To run this project, please go to the [Rouge Backend repo](https://github.com/NyaradzoUBere/Rouge-WebApp-Backend)
1. Run ~ lite-server in your front-end directory
1. [Click here!](http://localhost:3001)

## Code Examples

```
function persistExpense(user) {
    user.expenses.forEach(expense => {
        const divExpenses = document.getElementById("expense-list")
        const expenseListElement = document.createElement("p")
        expenseListElement.innerText = `${expense.item}: $ ${expense.amount}`
        divExpenses.append(expenseListElement)
        data = [{
            x: `${expense.item}, value: ${expense.amount}`
        }]
    })
}
```
```
function sumExpenses(user){
    expense_array = []
    user.expenses.map(expense => {
        (expense_array.push(expense.amount))
    })
    expenseSum = expense_array.reduce((total, amount) => total + amount);
    showTotalExpenses()
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
