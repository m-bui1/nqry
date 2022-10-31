class Coffee { 
  constructor(type, method, size, condiment) {
    this.type = 'type'
    this.method = 'method'
    this.size = 'size'
    this.condiment = []
    this.order = {}
  }

  // Class Function in order to determine price of drink
  checkOrder() {
    let condimentPrice = this.condiment.reduce((total, price) => { 
      return total + price[1]
      }, 0)
    let condiments = this.condiment
      .reduce((sentence, eachCondiment) => { 
      return sentence + eachCondiment[0]
      }, '')
      .split(/(?=[A-Z])/)
      .join(', ')
    let price = ((this.order['type'][1] + this.order['method'][1]) * this.order['size'][1] + condimentPrice)
    return `One ${this.size}, ${this.type} ${this.method} with ${condiments}. Your total comes to $${price}`
  }

  // Class function to select coffee beans
  coffeeType(brewType) {
    if(brewType == 'House blend' && this.type === 'type'){
      this.order['type'] = [brewType, 1]
      this.type = brewType
    } else if (brewType == 'Dark roast' && this.type === 'type'){
      this.order['type'] = [brewType, 1.5]
      this.type = brewType
    } else if (brewType == 'Robusta' && this.type === 'type'){
      this.order['type'] = [brewType, 2]
      this.type = brewType
    } else if ('type' == 'Arabica' && this.type === 'type'){
      this.order[brewType] = [brewType, 2.5]
      this.type = brewType
    } else {
      throw(`${brewType} beans dont exist! Please select another one`)
    }
  }

  // Class function to select brew method
  coffeeMethod(brewMethod) {
    if(brewMethod == 'Espresso' && this.method === 'method'){
      this.order['method'] = [brewMethod, 1]
      this.method = brewMethod
    } else if (brewMethod == 'Latte' && this.method === 'method'){
      this.order['method'] = [brewMethod, 1.25]
      this.method = brewMethod
    } else if (brewMethod == 'Cappuccino' && this.method === 'method'){
      this.order['method'] = [brewMethod, 1.5]
      this.method = brewMethod
    } else if (brewMethod == 'Macchiato' && this.method === 'method'){
      this.order['method'] = [brewMethod, 1.75]
      this.method = brewMethod
    } else if (brewMethod == 'Mocha' && this.method === 'method'){
      this.order['method'] == [brewMethod, 2]
      this.method = brewMethod
    } else {
      throw(`${brewMethod} does not exist! choose another drink!`)
    }
  }

  // Class function to select drink size
  coffeeSize(brewSize) {
    if(brewSize == 'Standard' && this.size === 'size'){
      this.order['size'] = [brewSize, 1]
      this.size = brewSize
    } else if (brewSize == 'Child' && this.size === 'size'){
      this.order['size'] = [brewSize, 0.75]
      this.size = brewSize
    } else if (brewSize == 'Large' && this.size === 'size'){
      this.order['size'] = [brewSize, 1.5]
      this.size = brewSize
    } else if (brewSize == 'Addict' && this.size === 'size'){
      this.order['size'] = [brewSize, 2]
      this.size = brewSize
    } else {
      throw(`${brewSize} is not a valid size! choose another size!`)
    }
  }

  // Class function to add additional toppings
  coffeeCondiments(brewToppings) {
    if(brewToppings == 'Milk'){
      this.order['condiments'] = this.condiment.push([brewToppings, 1])
      this.condimentPrice = this.condimentPrice + 1
    } else if (brewToppings == 'Sugar'){
      this.order['condiments'] = this.condiment.push([brewToppings, 0.25])
      this.condimentPrice = this.condimentPrice + 0.25
    } else if (brewToppings == 'Coco powder'){
      this.order['condiments'] = this.condiment.push([brewToppings, 0.1])
      this.condimentPrice = this.condimentPrice + 0.1
    } else {
      throw(`we don't have ${brewToppings}. Please choose a different topping! `)
    }
  }

}

let MyOrder = new Coffee("Martin's Coffee")
MyOrder.coffeeType('House blend')
MyOrder.coffeeMethod('Espresso')  
MyOrder.coffeeSize('Large')
MyOrder.coffeeCondiments('Sugar')
MyOrder.coffeeCondiments('Coco powder')

console.log(MyOrder.order)
console.log(MyOrder.checkOrder())
