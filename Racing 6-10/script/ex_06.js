window.addEventListener("DOMContentLoaded", function () {
  class Hero {
    constructor(name, type, magic, strength) {
      this.name = name;
      this.type = type;
      this.strength = strength;
      this.magic = magic;
      this.toString = function () {
        return `Soy ${this.name} el ${this.type}, tengo ${this.magic} puntos de magia y ${this.strength} puntos de fuerza`;
      };
    }
  }

  var mage = new Hero("amadeus", "mago", 10, 3);
  var guerrier = new Hero("pontius", "guerrero", 3, 10);
  guerrier.toString();

  console.log(mage.toString());
  console.log(guerrier.toString());

  const cajaBlanca = document.querySelector("footer div");

  cajaBlanca.innerText = mage.toString()
  cajaBlanca.innerHTML = guerrier.toString()

});
