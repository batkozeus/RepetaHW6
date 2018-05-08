// Task 1

// /**
//  * Класс, объекты которого описывают параметры гамбургера. 
//  * 
//  * @constructor
//  * @param size        Размер
//  * @param stuffing    Начинка
//  * @throws {HamburgerException}  При неправильном использовании (только в доп. задании)
//  */
// function Hamburger(size, stuffing) { ...
// }

// /* Размеры, виды начинок и добавок добавить как статические свойства класса */
//   Hamburger.SIZE_SMALL = ...
//   Hamburger.SIZE_LARGE = ...
//   Hamburger.STUFFING_CHEESE = ...
//   Hamburger.STUFFING_SALAD = ...
//   Hamburger.STUFFING_MEAT = ...
//   Hamburger.TOPPING_SPICE = ...
//   Hamburger.TOPPING_SAUCE = ...

//   /**
//    * Добавить topping к гамбургеру. Можно добавить несколько
//    * topping, при условии, что они разные.
//    * 
//    * @param topping  Тип добавки
//    * @throws {HamburgerException}	При неправильном использовании (только в доп. задании)
//    */
//   Hamburger.prototype.addTopping = function (topping) { ...
//   }

// /**
//  * Убрать topping, при условии, что она ранее была 
//  * добавлена.
//  * 
//  * @param topping  Тип добавки
//  * @throws {HamburgerException}  При неправильном использовании (только в доп. задании)
//  */
// Hamburger.prototype.removeTopping = function (topping) { ...
// }

// /**
//  * Получить список topping.
//  *
//  * @return {Array} Массив добавленных topping, содержит константы
//  *                 Hamburger.TOPPING_*
//  */
// Hamburger.prototype.getToppings = function () { ...
// }

// /**
//  * Узнать размер гамбургера
//  */
// Hamburger.prototype.getSize = function () { ...
// }

// /**
//  * Узнать начинку гамбургера
//  */
// Hamburger.prototype.getStuffing = function () { ...
// }

// /**
//  * Узнать цену гамбургера
//  * @return {Number} Цена в деньгах
//  */
// Hamburger.prototype.calculatePrice = function () { ...
// }

// /**
//  * Узнать калорийность
//  * @return {Number} Калорийность в калориях
//  */
// Hamburger.prototype.calculateCalories = function () { ...
// }


// /* 
//   Переданную информацию о параметрах гамбургера 
//   класс хранит внутри в своих полях. Вот как может 
//   выглядеть использование этого класса:
// */

// // маленький гамбургер с начинкой из сыра
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SPICE);

// // спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories());

// // сколько стоит
// console.log("Price: %f", hamburger.calculatePrice());

// // я тут передумал и решил добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // А сколько теперь стоит? 
// console.log("Price with sauce: %f", hamburger.calculatePrice());

// // Проверить, большой ли гамбургер? 
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings().length); // 1


// /**
//  * Представляет информацию об ошибке в ходе работы с гамбургером. 
//  * Подробности хранятся в свойстве message.
//  * @constructor 
//  */
// function HamburgerException(...) { ...
// }

// // не передали обязательные параметры
// const h2 = new Hamburger(); // => HamburgerException: no size given

// // передаем некорректные значения, добавку вместо размера
// const h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);
// // => HamburgerException: invalid size 'TOPPING_SPICE'

// // добавляем много добавок
// const h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // => HamburgerException: duplicate topping 'SAUCE'

// ------------------------------------------------

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];

    try {
      if (this.size === undefined) {
        throw new Error(`no size given`);
      }
      if (this.size !== 'small' && this.size !== 'large') {
        throw new Error(`invalid size`);
      }
    } catch (e) {
      this.HamburgerException(e.message);
    }

    try {
      if (this.stuffing === undefined) {
        throw new Error(`no stuffing given`);
      }
      if (this.stuffing.name !== 'CHEESE' && this.stuffing.name !== 'SALAD' && this.stuffing.name !== 'MEAT') {
        throw new Error(`invalid stuffing`);
      }
    } catch (e) {
      this.HamburgerException(e.message);
    }
  }

  static get SIZE_SMALL() {
    return 'small';
  }

  static get SIZE_LARGE() {
    return 'large';
  }

  static get STUFFING_CHEESE() {
    return {
      name: 'CHEESE',
      price: 15,
      calories: 20
    };
  }

  static get STUFFING_SALAD() {
    return {
      name: 'SALAD',
      price: 20,
      calories: 5
    };
  }

  static get STUFFING_MEAT() {
    return {
      name: 'MEAT',
      price: 35,
      calories: 15
    };
  }

  static get TOPPING_SPICE() {
    return {
      name: 'SPICE',
      price: 10,
      calories: 0
    };
  }

  static get TOPPING_SAUCE() {
    return {
      name: 'SAUCE',
      price: 15,
      calories: 5
    };
  }

  addTopping(topping) {
    let checkTopping = false;
    this.topping.forEach(topp => {
      if (topp.name === topping.name) {
        checkTopping = true;
      }
    });

    try {
      if (checkTopping) {
        throw new Error(`duplicate topping '${topping.name}'`);
      }
    } catch (e) {
      this.HamburgerException(e.message);
    }

    if (!checkTopping) {
      this.topping.push(topping);
    }
  }

  removeTopping(topping) {
    let checkTopping = false;
    this.topping.forEach(topp => {
      if (topp.name === topping.name) {
        checkTopping = true;
        this.topping.splice(this.topping.indexOf(topping), 1);
      }
    });
    try {
      if (!checkTopping) {
        throw new Error(`absent topping '${topping.name}'`);
      }
    } catch (e) {
      this.HamburgerException(e.message);
    }
  }

  getToppings() {
    // let allToppings = this.topping.map(item => item.name);
    // return allToppings.join(',');
    return this.topping;
  }

  getSize() {
    return this.size;
  }

  getStuffing() {
    return this.stuffing.name;
  }

  calculatePrice() {
    let totalPrice = this.stuffing.price;
    this.topping.forEach(item => totalPrice += item.price);
    if (this.size === 'large') {
      return totalPrice * 2;
    } else {
      return totalPrice;
    }
  }

  calculateCalories() {
    let totalCalories = this.stuffing.calories;
    this.topping.forEach(item => totalCalories += item.calories);
    if (this.size === 'large') {
      return totalCalories * 2;
    } else {
      return totalCalories;
    }
  }

  HamburgerException(exception) {
    console.log(`HamburgerException: ${exception}`);
  }
}

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);

// добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());

// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());

// я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // А сколько теперь стоит? 
console.log("Price with sauce: %f", hamburger.calculatePrice());

// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1

// не передали обязательные параметры
const h2 = new Hamburger(); // => HamburgerException: no size given

// передаем некорректные значения, добавку вместо размера
const h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);
// => HamburgerException: invalid size 'TOPPING_SPICE'

// добавляем много добавок
const h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
h4.addTopping(Hamburger.TOPPING_SAUCE);
h4.addTopping(Hamburger.TOPPING_SAUCE);
// => HamburgerException: duplicate topping 'SAUCE'
h4.removeTopping(Hamburger.TOPPING_SPICE);