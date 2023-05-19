import React from "react";
import { Link} from "react-router-dom";
import Product from "../Product/Product";
import styles from './Products.module.scss';
const productLists = [
  {
  name: "iPhone 14 Pro Max 128GB Chính hãng (VN/A)", 
  id: 1,
  price: "26.190.000 đ",
  description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
  image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg'
  },
  {name: "iPhone 14 128GB Chính hãng (VN/A)", 
  id: 2,
  price: "26.190.000 đ",
  description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
  image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg'
  },
  {name: "iPhone 11 64GB Chính Hãng (VN/A)", 
  id: 3,
  price: "26.190.000 đ",
  description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
  image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg'
  },
  {name: "iPhone 11 64GB Chính Hãng (VN/A)", 
  id: 4,
  price: "26.190.000 đ",
  description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
  image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg'
  },
  {
    name: "iPhone 14 Pro Max 128GB Chính hãng (VN/A)", 
    id: 5,
    price: "26.190.000 đ",
    description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
    image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg'
    },
    {name: "iPhone 14 128GB Chính hãng (VN/A)", 
    id: 6,
    price: "26.190.000 đ",
    description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
    image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg'
    },
    {name: "iPhone 11 64GB Chính Hãng (VN/A)", 
    id: 7,
    price: "26.190.000 đ",
    description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
    image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg'
    },
    {name: "iPhone 11 64GB Chính Hãng (VN/A)", 
    id: 8,
    price: "26.190.000 đ",
    description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
    image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg'
    },
    {
      name: "iPhone 14 Pro Max 128GB Chính hãng (VN/A)", 
      id: 9,
      price: "26.190.000 đ",
      description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
      image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg'
      },
      {name: "iPhone 14 128GB Chính hãng (VN/A)", 
      id: 10,
      price: "26.190.000 đ",
      description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
      image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg'
      },
      {name: "iPhone 11 64GB Chính Hãng (VN/A)", 
      id: 11,
      price: "26.190.000 đ",
      description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
      image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg'
      },
      {name: "iPhone 11 64GB Chính Hãng (VN/A)", 
      id: 12,
      price: "26.190.000 đ",
      description:"iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.",
      image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg'
      }
]

function Products (){
  return(
    
    <div className={styles.productList}>
      {productLists.map(product =>
        <div className={styles.productItem} key={product.id}>
          <img src={product.image} height="250" width="250"/>
          <h2>{product.name} </h2>
          <p>{product.price} </p>
          <p className={styles.oldPrice}>30.990.000 đ</p>
          <Link to={`/products/${product.id}`}>Chi tiết sản phẩm</Link>
        </div>
      )}
    </div>
    
  );
}
export default Products;