import React from "react";
import Header from "./Header/Header";
import Order from "./Order/Order";
import Inventory from "./Inventory/Inventory";
import Fish from "./Fish/Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  //- jkl;jk

  addFish = fish => {
    // take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // add our new fish to the fishes
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <p>Hey!</p>
        <div className="menu">
          <Header tagline="test tagline"></Header>
          <ul>
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSamplefishes}
        ></Inventory>
        <Order></Order>
      </div>
    );
  }
}
export default App;

var x, y, z;
x = 5;
y = 6;
z = x + y;

var x = 5;

function myFunction(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}

for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

while (i < 10) {
  text += "The number is " + i;
  i++;
}

for (; cars[i]; ) {
  text += cars[i] + "<br>";
  i++;
}

hello = () => {
  return "Hello World!";
};

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

const PI = 3.141592653589793;
PI = 3.14; // This will give an error
PI = PI + 10; // This will also give an error

do {
  // code block to be executed
} while (condition);

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo").innerHTML = toCelsius(77);

var x = toCelsius(77);

var text = "The temperature is " + toCelsius(77) + " Celsius";

var car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

document.getElementById("demo").innerHTML = "Hello Dolly!";
numbers.forEach(myFunction);
