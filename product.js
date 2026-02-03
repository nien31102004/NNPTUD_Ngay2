// Tạo constructor Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Danh sách sản phẩm
const products = [
  new Product(1, "iPhone 36 Pro Max", 36000000, 36, "Phone", true),
  new Product(2, "Samsung Galaxy S18", 28000000, 0, "Phone", true),
  new Product(3, "MacBook Air M2", 32000000, 3, "Laptop", true),
  new Product(4, "AirPods Pro", 6500000, 10, "Accessories", true),
  new Product(5, "Apple Watch", 12000000, 0, "Accessories", false),
  new Product(6, "Logitech Mouse", 800000, 15, "Accessories", true),
];

// Lấy thẻ output để in ra màn hình
const output = document.getElementById("output");

// Hàm in kết quả ra frontend
function printResult(title, data) {
  const div = document.createElement("div");
  div.className = "section";

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(data, null, 2);

  div.appendChild(h2);
  div.appendChild(pre);
  output.appendChild(div);
}

// Câu 3: lấy name và price
const productNamePrice = products.map(p => ({
  name: p.name,
  price: p.price,
}));
printResult("Câu 3: Tên và giá sản phẩm", productNamePrice);

// Câu 4: sản phẩm còn hàng
const inStockProducts = products.filter(p => p.quantity > 0);
printResult("Câu 4: Sản phẩm còn hàng", inStockProducts);

// Câu 5: có sản phẩm giá trên 30 triệu không
const hasExpensiveProduct = products.some(p => p.price > 30000000);
printResult("Câu 5: Có sản phẩm > 30 triệu?", hasExpensiveProduct);

// Câu 6: tất cả Accessories có đang bán không
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable);
printResult("Câu 6: Accessories đang bán?", accessoriesAvailable);

// Câu 7: tổng giá trị kho
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
printResult("Câu 7: Tổng giá trị kho", totalInventoryValue);

// Câu 8: for...of
console.log("Câu 8:");
for (const product of products) {
  console.log(
    product.name +
      " -- " +
      product.category +
      " -- " +
      (product.isAvailable ? "Đang bán" : "Ngừng bán")
  );
}

// Câu 9: for...in
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(key + ": " + products[0][key]);
}

// Câu 10: tên sản phẩm đang bán và còn hàng
const availableAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);
printResult("Câu 10: Đang bán và còn hàng", availableAndInStockNames);
