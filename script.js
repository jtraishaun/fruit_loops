var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];

function popUp(id) {
  var that = this;
  this.menu = document.createElement("div");
  this.Imagepop = document.createElement("img");
  this.Namepop = document.createElement("div");
  this.Pricepop = document.createElement("div");
  this.menu.classList.add("popUp");

  this.Imagepop.src = products[id].image;
  this.Namepop.innerHTML = "Name: " + products[id].name;
  this.Pricepop.innerHTML = "Price: " + products[id].price;

  this.menu.addEventListener("click", function () {
    that.menu.style.display = "none";
  });

  this.menu.appendChild(this.Imagepop);
  this.menu.appendChild(this.Namepop);
  this.menu.appendChild(this.Pricepop);
  document.body.appendChild(this.menu);
}

function main() {
  this.fruit = [];

  for (var i = 0; i < products.length; i++) {
    this.fruit.push(
      new product(products[i].name, products[i].price, products[i].image, i)
    );
  }
}

function product(name, price, image, id) {
  var that = this;
  this.price = price;
  this.name = name;
  this.wrapper = document.createElement("div");
  this.image = document.createElement("img");
  this.name = document.createElement("div");
  this.price = document.createElement("div");
  this.wrapper.classList.add("product");

  this.wrapper.addEventListener("mouseout", function () {
    that.wrapper.style.borderColor = "black";
  });

  this.wrapper.addEventListener("mouseover", function () {
    that.wrapper.style.borderColor = products[id].color;
  });

  this.wrapper.addEventListener("click", function () {
    var pop = new popUp(id);
  });

  this.image.src = image;
  this.name.innerHTML = "Name: " + name;
  this.price.innerHTML = "Price: " + price;

  this.wrapper.appendChild(this.image);
  this.wrapper.appendChild(this.name);
  this.wrapper.appendChild(this.price);
  document.body.appendChild(this.wrapper);
}

var display = new main();