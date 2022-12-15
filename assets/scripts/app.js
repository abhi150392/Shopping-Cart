class Product {
  constructor(title, image, desc, price) {
    //this refers to class
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart = () => {
    console.log(this.product);
  };

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src = "${this.product.imageUrl}">
        <div class = "product-item__content">
          <h2>${this.product.title}</h2>
          <h3>${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
    const addCartBtn = prodEl.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Table",
      "https://i.pinimg.com/originals/8d/36/db/8d36db430b72322f0cae58519f75a573.png",
      29.99,
      "A Study Table"
    ),
    new Product(
      "A Chair",
      "https://i.pinimg.com/originals/8d/36/db/8d36db430b72322f0cae58519f75a573.png",
      49.99,
      "A Study Chair"
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
