let data = { price: 5, quantity: 2 };
let target, total, salePrice;

class Dep {
  constructor() {
    this.subscribers = []; // storage
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub());
  }
}


Object.keys(data).forEach(key => {
  let internalValue = data[key];

  const dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      dep.depend(); // remember the target we're running
      return internalValue;
    },
  
    set(newVal) {
      internalValue = newVal;
      dep.notify(); // rerun saved targets
    } 
  });
});

function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
}

watcher(() => {
  total = data.price * data.quantity;
});

console.log(`total = ${total}`);
data.price = 20;
console.log(`total = ${total}`);
data.quantity = 10;
console.log(`total = ${total}`);