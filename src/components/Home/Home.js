import React from "react";
import styles from "./Home.module.scss"
function Home (){
    return(
    <div className={styles.detaiProduct}>
        <div className={styles.name}> iPhone 14 Pro Max 128GB Chính hãng (VN/A)</div>
        <div className={styles.image}>
            <img src="https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-mau-xam-den-didongviet_6.jpg" alt=""/>
        </div>
        <div className={styles.price}> "26.190.000 đ" </div>
        <div className={styles.description}>IPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.</div>
   
    </div>
   
    );
}
export default Home;