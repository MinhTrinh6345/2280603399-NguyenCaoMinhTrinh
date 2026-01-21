// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products
const products = [
  new Product(1, "iPhone 15", 30000000, 5, "Electronics", true),
  new Product(2, "MacBook Pro", 45000000, 2, "Electronics", true),
  new Product(3, "AirPods Pro", 7000000, 0, "Accessories", true),
  new Product(4, "Apple Watch", 12000000, 3, "Accessories", false),
  new Product(5, "iPad Pro", 28000000, 4, "Electronics", true),
  new Product(6, "USB-C Cable", 300000, 10, "Accessories", true),
];

// Câu 3:
const namePriceList = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3 - Name & Price:", namePriceList);

// Câu 4:
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Còn hàng:", inStockProducts);

// Câu 5: 
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm > 30 triệu không?", hasExpensiveProduct);

// Câu 6: 
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);
console.log("Câu 6 - Tất cả Accessories đang bán?", accessoriesAvailable);

// Câu 7:
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue);

// Câu 8: 
console.log("Câu 8 - Duyệt for...of:");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: 
console.log("Câu 9 - for...in:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: 
const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10 - Tên sản phẩm đang bán & còn hàng:", sellingAndInStockNames);
