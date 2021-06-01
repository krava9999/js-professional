﻿class Burger {
  burgerSize;
  allProducts;
  allToppings;
  toppings;
  constructor(size) {
      this.sizeBurger = size;
      this.allProducts = [];
      this.toppings = [];
      this.fetchGoods(); // берем массив бургеров
      this.renderSize(); // рисуем разметку для бургеров
      this.fetchTopping(); //  берем массив топингов
      this.renderTopping(); // ресуем разметку чекбоксов для топингов
  }
  getprice() {
      let price = 0;
      allInput.forEach(function (element) {
          if (element.checked) {
              price += Number(element.getAttribute("data-price"));
          }

      })
      alert(`текущая цена бургера с топингами  ${price} р.`);
  }
  getCalories() {
      let calories = 0;
      allInput.forEach(function (element) {
          if (element.checked) {
              calories += Number(element.getAttribute("data-calories"));
          }

      })
      alert(`Коларийность бургера составляет ${calories} килокалорий`);
  }

  fetchGoods() {
      this.burgerSize = [{
              id: 1,
              title: 'big',
              price: 100,
              calories: 40
          },
          {
              id: 2,
              title: 'small',
              price: 50,
              calories: 20
          }

      ];
  }

  fetchTopping() {
      this.allToppings = [{
              id: 1001,
              title: 'chease',
              price: 10,
              calories: 10
          },
          {
              id: 1002,
              title: 'lettuce',
              price: 20,
              calories: 5
          },
          {
              id: 1003,
              title: 'potatos',
              price: 15,
              calories: 10
          }

      ]
  }
  renderSize() { // вызов метода прорисовки размеров бургера
      const blockSize = document.querySelector('.menu__size');
      for (let product of this.burgerSize) {
          const productObject = new ProductItem(product);

          this.allProducts.push(productObject);
          blockSize.insertAdjacentHTML('beforeend', productObject
              .render()); //  для блока .product, в конце содержимого добавь 
          // результат который вернет метод render
      }


  }

  renderTopping() { // вызов метода прорисовки топинга для бургера
      const blockTopping = document.querySelector('.menu__topping');
      for (let product of this.allToppings) {
          const productObject = new ToppingItem(product);

          this.toppings.push(productObject);
          blockTopping.insertAdjacentHTML('beforeend', productObject.render());
      }
  }
}

class ProductItem {
  constructor(product) {
      this.title = product.title;
      this.price = product.price;
      this.calories = product.calories
      this.id = product.id;
  }


  render() {
      return `<input class="menu__input" type="radio" name="burger" data-size="${this.size}" data-price="${this.price}" data-calories="${this.calories}"> ${this.title}`;
  }
}

class ToppingItem {
  constructor(product) {
      this.title = product.title;
      this.price = product.price;
      this.calories = product.calories
      this.id = product.id;
  }


  render() {
      return `<input class="menu__input" type="checkbox" name="burger" data-size="${this.size}" data-price="${this.price}" data-calories="${this.calories}"> ${this.title}`;
  }
}
let btn = document.querySelector(".menu__btn");
let check1 = new Burger("big");
let allInput = document.querySelectorAll("input");

btn.addEventListener('click', function () {

  check1.getprice();
  check1.getCalories();
})