const products = ["mercedes", "audi", "ford", "lamborghini"];

const showProduct=()=> {
  if (products.length === 0) {
    console.log("Không có sản phẩm để hiển thị");
  } else {
    console.log("Tất cả sản phẩm trong mảng:");
    for (var i = 0; i < products.length; i++) {
      console.log(products[i]);
    }
  }
}

const addProduct=()=>{
    let add = ""
    do{
        add=prompt("nhap vao ten san pham moi:");
        products.push(add);
    }while(add.length<5)
   
}
console.log(addProduct());
addProduct()

const removeProduct=()=> {
  var productName = prompt("Nhập tên sản phẩm cần xóa:");
  var index = products.indexOf(productName);
  if (index !== -1) {
    products.splice(index, 1);
    console.log("Đã xóa sản phẩm: " + productName);
    showProduct();
  } else {
    console.log("Không tìm thấy sản phẩm cần xóa");
  }
}

const updateProduct=()=> {
  var productName = prompt("Nhập tên sản phẩm cần cập nhật:");
  var index = products.indexOf(productName);
  if (index !== -1) {
    var newProductName = prompt("Nhập tên mới cho sản phẩm:");
    while (newProductName.length < 5) {
      newProductName = prompt("Tên sản phẩm phải có ít nhất 5 ký tự, vui lòng nhập lại:");
    }
    products[index] = newProductName;
    console.log("Đã cập nhật sản phẩm: " + productName + " thành " + newProductName);
    showProduct();
  } else {
    console.log("Không tìm thấy sản phẩm cần cập nhật");
  }
}

const removeAllProduct=()=> {
  products = [];
  console.log("Đã xóa toàn bộ sản phẩm");
  showProduct();
}
