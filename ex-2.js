let product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};

ratings = 4.5;
photo =
  "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";
product.code = "IT0101010";
price = 6000;
delete product.ratings;
let socialMediaShare = "facebookShare";

product[socialMediaShare] = 45.5;
console.log(product);
