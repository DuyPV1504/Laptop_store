// src/App.jsx

import React from 'react';
import './App.css';

const data = {
  id: 1,
  name: 'Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD)',
  image: 'https://lh3.googleusercontent.com/OPNIaDml5ZTh9653Gqtxc8BaWFqHZmSjaMs0ou321y3YWNR_68HybgMlVsflBN147gok7WxnsmrB7rKq9Z4a1mhnaS2lSYUPMA=rw-w300',
  price: 25800000,
  discountPercent: 10,
  seller: 'Xiaomi',
  relatedProducts: [
    {
      id: 2,
      name: 'Laptop Lenovo (14" 4GB/128GB SSD/Intel UHD)',
      image: 'https://lh3.googleusercontent.com/TvxcE7fes0NtPyjDUqmvVlbdgj63tujZtJCroBtrrMXu1j-MC1Rns56ia6z2USjinoa5gp_GfbthX5BRThBHEdBXFbWXBQ4K=rw-w300',
      price: 12000000,
      discountPercent: 5            
    },
    {
      id: 3,
      name: 'Apple Macbook Pro 16 inch Retina display',
      image: 'https://lh3.googleusercontent.com/TsvY9ecw4JYAwF0Ez-M5h_xc1qtX2bwLS21Zc_CbKy_qgIB0OEkbSnEREiXqxZEgnaPCyhLvSh04q7Z1GQlRFeyh5sprWto=rw-w300',
      price: 15190000
    },
    {
      id: 4,
      name: 'Laptop Dell (16" 8GB/256GB SSD/Intel UHD)',
      image: 'https://lh3.googleusercontent.com/awNX33cUhBXFLT7Wv9aNBfKo9wiwiwLgPi2JfNgZKHGWTmYZ1N5AMQNE4HZT2AuZMZ1zX2Exk7UwQ0d-irm_sjcUwClzZTlW=rw-w300',
      price: 19000000         
    }
  ]
};

function formatCurrency(num) {
  return num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

const App = () => {
  const discountPrice = data.price * (1 - data.discountPercent / 100);

  return (
    <div className="container">
      {/* Main Product */}
      <div className="product">
        <img src={data.image} alt={data.name} />
        <div className="product-title">{data.name}</div>
        <div className="price">
          {formatCurrency(discountPrice)}{' '}
          <span className="old-price">{formatCurrency(data.price)}</span>
        </div>
        <div className="seller">Bán bởi: {data.seller}</div>
      </div>

      {/* Related Products */}
      <h2>Sản phẩm liên quan</h2>
      <div className="related-products">
        {data.relatedProducts.map((product) => {
          const productDiscountPrice = product.price * (1 - (product.discountPercent || 0) / 100);
          return (
            <div key={product.id} className="related-product">
              <img src={product.image} alt={product.name} />
              <div className="related-product-title">{product.name}</div>
              <div className="related-product-price">{formatCurrency(productDiscountPrice)}</div>
              <button className="btn-add-to-cart">Thêm vào giỏ</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
