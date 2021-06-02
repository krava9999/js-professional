class ProductList { // создать объект класса ProductList(лист товаров)
    goods; // свойство goods
    allProducts;//  свойство allProducts
    sumPrice; // свойство итоговой цены
    constructor(container = '.products') { // создаем конструктор  container свойство по умолчанию равной ... 
      this.container = container; // для этого контейнера присвой значение по умолчанию
      this.goods = []; // для этого свойства присвой пустой массив
      this.allProducts = []; // для этого свойства присвой пустой массив
      this.sumPrice = 0;
      this.fetchGoods(); // вызов метода fetchGoods
      this.render(); // вызов метода render
      this.GoodsList(); // вызос подсчета суммы
    }

    fetchGoods() { // метод fetchGoods(получить товар) класса Productlist, который присваивает новый массив с данными
        this.goods = [
          {id: 1, title: 'Notebook', price: 20000},
          {id: 2, title: 'Mouse', price: 1500},
          {id: 3, title: 'Keyboard', price: 5000},
          {id: 4, title: 'Gamepad', price: 4500},
        ];
      }

    GoodsList(){ // метод подсчета итоговой суммы
        let sum = 0;
        this.goods.forEach(function(element){
            sum += element.price;
            console.log(sum);
        })
    }
    
  
    render() { // метод render(прорисовать) 
        const block = document.querySelector(this.container); // в константу block положи элемент .product
    
        for (let product of this.goods) { // выполнять для новой переменной product присваивай каждое значения массива пока не закончатся значения из массива goods
          const productObject = new ProductItem(product); // для константы  productObject скопируй значения класса и передай значение product
    
          this.allProducts.push(productObject); // в свойство allproduct положи в конец массива новое значение
          block.insertAdjacentHTML('beforeend', productObject.render()); //  для блока .product, в конце содержимого добавь 
          // результат который вернет метод render
        }
      }
  
    
  }

  class ProductItem {
    constructor(product, img='https://via.placeholder.com/200x150') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
    }
  
  
    render() {
      return `<div class="product-item" data-id="${this.id}"> 
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`; // верни html разметку с значениями из массива product
    }
  }


  class CartProductList{

    render() { // метод рендер будет прорисовывать html добавленого товара  в корзину
        return `<div class="product-item" data-id="${this.id}"> 
        <img src="${this.img}" alt="Some img">
        <div class="desc">
            <h3>${this.title}</h3>
            <p>${this.price} \u20bd</p>
            <button class="buy-btn">Купить</button>
        </div>
    </div>`;
    }

    delete() // метод будет удалять товар из корзины
    sumCartPrice() // метод будет высчитывать итоговую сумму товара в корзине

  }


 const catalog = new ProductList(); // Создать констаyту catalog и унаследовать все что лежит в ProductList
