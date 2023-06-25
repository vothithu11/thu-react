import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import styles from './Products.module.scss';
const categoryLists = [
    {
        id: 1,
        name: 'Iphone',
    },
    {
        id: 2,
        name: 'Samsung',
    },
    {
        id: 3,
        name: 'Nokia',
    },
    {
        id: 4,
        name: 'Huawei',
    },
    {
        id: 5,
        name: 'Oppo',
    },
];
const productLists = [
    {
        name: 'iPhone 14 Pro Max 128GB Chính hãng (VN/A)',
        id: 1,
        price: '32.190.000 đ',
        price_old: '39.990.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg',
        category_id: 1,
    },
    {
        name: 'iPhone 14 128GB Chính hãng (VN/A)',
        id: 2,
        price: '28.190.000 đ',
        price_old: '34.990.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg',
        category_id: 1,
    },
    {
        name: 'iPhone 11 64GB Chính Hãng (VN/A)',
        id: 3,
        price: '26.190.000 đ',
        price_old: '29.990.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 1,
    },
    {
        name: 'iPhone 11 64GB Chính Hãng (VN/A)',
        id: 4,
        price: '26.190.000 đ',
        price_old: '29.990.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 1,
    },
    {
        name: 'Samsung Galaxy A34 5G 128GB Chính Hãng (BHĐT)',
        id: 5,
        price: '6.790.000 đ',
        price_old: '7.990.000 đ',
        description:
            'Samsung Galaxy A34 128GB (BHĐT) là máy mới, nguyên Seal 100%, sản phẩm chỉ kích hoạt trực tuyến và được bảo hành trong vòng 12 tháng. Galaxy A34 128GB Chính Hãng (BHĐT) sở hữu thiết kế mỏng nhẹ, bo cong bốn góc cạnh mềm mại. Chiếc smartphone này được trang bị màn hình Super AMOLED mang đến trải nghiệm mượt mà. Bên cạnh đó, điện thoại còn sở hữu sức mạnh từ con chip Dimensity 1080. Ngoài ra, với dung lượng pin 5000nmAh cho phép người dùng trải nghiệm dài lâu.',
        image: 'https://cdn-v2.didongviet.vn/files/products/2023/5/9/1/1686296072076_samsung_galaxy_a34_128gb_xanh_dao_didongviet_1.jpg',
        category_id: 2,
    },
    {
        name: 'Samsung Galaxy A54 5G 128GB Chính Hãng',
        id: 6,
        price: '8.490.000 đ',
        price_old: '9.990.000 đ',
        description:
            'Samsung Galaxy A54 128GB sở hữu thiết kế trẻ trung, hiện đại. Chiếc smartphone này được trang bị màn hình Super AMOLED rộng 6.4 inch với độ phân giải 1080 x 2400 pixel mang đến khả năng hiển thị rõ ràng, sắc nét. Bên cạnh đó, nó còn được trang bị cụm camera lên đến 50MP cho phép sáng tạo bứt phá. Ngoài ra, phiên bản này cũng mang đến hiệu năng ổn định nhờ được trang bị chip Exynos 1380 (5nm).',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/s/a/samsung-galaxy-a54-128gb-den-didongviet.jpg',
        category_id: 2,
    },
    {
        name: 'Samsung Galaxy S23 Plus 5G 512GB Chính Hãng',
        id: 7,
        price: '19.990.000 đ',
        price_old: '29.990.000 đ',
        description:
            'Samsung Galaxy S23+ 5G 512GB sở hữu thiết kế hiện đại, cao cấp với màn hình rộng 6.6 inch, cùng công nghệ màn hình Dynamic AMOLED 2X, 120Hz. Máy được trang bị hiệu năng mạnh mẽ với Snapdragon 8 Gen 2, hệ điều hành Android 12 giao diện One UI 4.0. Đồng thời camera 50MP cũng là điểm nhấn đặc biệt trên máy.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 2,
    },
    {
        name: 'Samsung Galaxy S23 Ultra 5G 1TB Chính Hãng',
        id: 8,
        price: '31.990.000 đ',
        price_old: '44.990.000 đ',
        description:
            'Galaxy S23 Ultra 5G 1TB sở hữu thiết kế cao cấp với màn hình 6.8 inch độ phân giải 3088 x 1440 pixels, tấm nền Dynamic AMOLED 2X tần số quét 120Hz, cấu hình mạnh mẽ với vi xử lý Snapdragon 8 Gen 2. Camera chính 200MP mang lại khả năng chụp ảnh đỉnh cao hỗ trợ nhiều chế độ chụp ảnh khác nhau.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 2,
    },
    {
        name: 'Nokia C01 Plus 16GB Chính Hãng',
        id: 9,
        price: '1.480.000 đ',
        price_old: '1.990.000 đ',
        description:
            'Nokia C01 Plus 16GB Chính Hãng sở hữu thiết kế hiện đại, với màn hình LCD với kích thước vô cùng nhỏ gọn chỉ 5.45-inch. Hiệu năng vô cùng ổn định với vi xử lý SC9863A 8 nhân, dung lượng RAM 2GB đủ để đáp ứng mọi nhu cầu giải trí thông thường. Chiếc máy còn có camera chính độ phân giải 5MP, cùng dung lượng pin lớn lên đến 3000 mAh.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/n/o/nokia-c01-plus-didongviet.jpg',
        category_id: 3,
    },
    {
        name: 'Nokia 105 128GB Chính Hãng',
        id: 10,
        price: '750.000 đ',
        price_old: '990.000 đ',
        description:
            'Nokia 105 4G sở hữu một thiết kế khá đẹp mắt bởi toàn thân của máy được hoàn thiện từ nhựa với lớp vỏ sáng bóng, tạo nên sự sang trọng và tinh tế cho máy. Ngoài ra, máy cũng hỗ trợ 2 sim 2 sóng, nhờ đó việc liên lạc trở nên dễ dàng hơn, thuận tiện hơn và có thể luân phiên giữa hai số liên lạc.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/n/o/nokia-105-4g-didongviet.jpeg',
        category_id: 3,
    },
    {
        name: 'Redmi Note 12 Pro (8GB/256GB) - Chính hãng',
        id: 11,
        price: '7.490.000 đ',
        price_old: '9.990.000 đ',
        description:
            'Redmi Note 12 Pro có ngoại hình hiện đại, trẻ trung với mặt lưng kính thời thượng và khung viền kim loại vuông vức sang trọng. Note 12 Pro chỉ dày 8.12mm và nặng khoảng 201 gram, cầm điện thoại sẽ khá thoải mái. Khung phẳng và mặt lưng bằng kính của Redmi Note 12 Pro mang đến cho điện thoại những đường nét tinh tế, và không khiến việc cầm lâu bị mỏi tay.',
        image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/05/11/k6a-blue-front-removebg-preview_638194126987670605.png',
        category_id: 4,
    },
    {
        name: 'Xiaomi 13 (8GB/256GB) - Chính hãng',
        id: 12,
        price: '16.390.000 đ',
        price_old: '19.990.000 đ',
        description:
            'Không thể bỏ qua màn hình khi nhắc đến Xiaomi 13. Điện thoại sở hữu màn hình AMOLED 6.36 inch FHD+ 1080 x 2400 với tần số quét 120Hz. Đồng thời, màn hình hỗ trợ HDR10+ và độ sáng tối đa 1.900 nit cho người dùng trải nghiệm mãn nhãn khi xem các bộ phim yêu thích hay chơi game giải trí. ',
        image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/02/27/xiaomi-13-xanh2345678900.png',
        category_id: 4,
    },
    {
        name: 'iPhone 14 Pro Max 128GB Chính hãng (VN/A)',
        id: 13,
        price: '26.190.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg',
        category_id: 1,
    },
    {
        name: 'Xiaomi 13 (8GB/256GB) - Chính hãng',
        id: 14,
        price: '16.390.000 đ',
        price_old: '19.990.000 đ',
        description:
            'Không thể bỏ qua màn hình khi nhắc đến Xiaomi 13. Điện thoại sở hữu màn hình AMOLED 6.36 inch FHD+ 1080 x 2400 với tần số quét 120Hz. Đồng thời, màn hình hỗ trợ HDR10+ và độ sáng tối đa 1.900 nit cho người dùng trải nghiệm mãn nhãn khi xem các bộ phim yêu thích hay chơi game giải trí. ',
        image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/02/27/xiaomi-13-xanh2345678900.png',
        category_id: 4,
    },
    {
        name: 'iPhone 14 Pro Max 128GB Chính hãng (VN/A)',
        id: 15,
        price: '26.190.000 đ',
        price_old: '29.990.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg',
        category_id: 1,
    },
    {
        name: 'iPhone 11 64GB Chính Hãng (VN/A)',
        id: 16,
        price: '26.190.000 đ',
        price_old: '29.990.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 1,
    },
    {
        name: 'OPPO Reno8 T 256GB Chính Hãng (BH13T)',
        id: 17,
        price: '7.490.000 đ',
        price_old: '9.990.000 đ',
        description:
            'OPPO Reno8 T 4G 256GB BH13T sở hữu thiết kế mỏng nhẹ và vuông vức với trọng lượng 182,5g. Màn hình điện thoại hoạt động trên tấm nền AMOLED rộng 6.4 inch. Hiệu năng hoạt động mạnh mẽ nhờ được trang bị chip Helio G99, dung lượng pin 5000mAh tích hợp sạc nhanh lên đến 33W. Chưa kể camera chính 100MP mang đến cho người dùng những thước phim, hình ảnh sắc nét và chuyên nghiệp.',
        image: 'https://cdn-v2.didongviet.vn/files/products/2023/5/1/1/1685597109540_oppo_reno8_t_4g_256gb_mau_den_bh13t_didongviet_thumb.jpg',
        category_id: 5,
    },
    {
        name: 'OPPO A96 4G 128GB Chính Hãng',
        id: 18,
        price: '5.990.000 đ',
        price_old: '9.990.000 đ',
        description:
            'OPPO A96 128GB sở hữu thiết kế hiện đại, tinh tế và vô cùng mỏng với độ dày chỉ 8.4mm. Máy được trang bị màn hình IPS 6.59" tần số quét 90Hz, cấu hình mạnh mẽ với vi xử lý Snapdragon 680. OPPO A96 cón được tich hợp hệ thống camera kép với camera chính lên đến 50MP.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg',
        category_id: 5,
    },
    {
        name: 'OPPO A96 4G 128GB Chính Hãng',
        id: 19,
        price: '5.990.000 đ',
        price_old: '9.990.000 đ',
        description:
            'OPPO A96 128GB sở hữu thiết kế hiện đại, tinh tế và vô cùng mỏng với độ dày chỉ 8.4mm. Máy được trang bị màn hình IPS 6.59" tần số quét 90Hz, cấu hình mạnh mẽ với vi xử lý Snapdragon 680. OPPO A96 cón được tich hợp hệ thống camera kép với camera chính lên đến 50MP.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg',
        category_id: 5,
    },
    {
        name: 'Xiaomi 13 (8GB/256GB) - Chính hãng',
        id: 20,
        price: '16.390.000 đ',
        price_old: '19.990.000 đ',
        description:
            'Không thể bỏ qua màn hình khi nhắc đến Xiaomi 13. Điện thoại sở hữu màn hình AMOLED 6.36 inch FHD+ 1080 x 2400 với tần số quét 120Hz. Đồng thời, màn hình hỗ trợ HDR10+ và độ sáng tối đa 1.900 nit cho người dùng trải nghiệm mãn nhãn khi xem các bộ phim yêu thích hay chơi game giải trí. ',
        image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/02/27/xiaomi-13-xanh2345678900.png',
        category_id: 4,
    },
    {
        name: 'iPhone 14 Pro Max 128GB Chính hãng (VN/A)',
        id: 21,
        price: '26.190.000 đ',
        price_old: '29.990.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg',
        category_id: 1,
    },
    {
        name: 'iPhone 11 64GB Chính Hãng (VN/A)',
        id: 22,
        price: '26.190.000 đ',
        price_old: '29.990.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 1,
    },
    {
        name: 'OPPO Reno8 T 256GB Chính Hãng (BH13T)',
        id: 23,
        price: '7.490.000 đ',
        price_old: '9.990.000 đ',
        description:
            'OPPO Reno8 T 4G 256GB BH13T sở hữu thiết kế mỏng nhẹ và vuông vức với trọng lượng 182,5g. Màn hình điện thoại hoạt động trên tấm nền AMOLED rộng 6.4 inch. Hiệu năng hoạt động mạnh mẽ nhờ được trang bị chip Helio G99, dung lượng pin 5000mAh tích hợp sạc nhanh lên đến 33W. Chưa kể camera chính 100MP mang đến cho người dùng những thước phim, hình ảnh sắc nét và chuyên nghiệp.',
        image: 'https://cdn-v2.didongviet.vn/files/products/2023/5/1/1/1685597109540_oppo_reno8_t_4g_256gb_mau_den_bh13t_didongviet_thumb.jpg',
        category_id: 5,
    },
    {
        name: 'OPPO A96 4G 128GB Chính Hãng',
        id: 24,
        price: '5.990.000 đ',
        price_old: '9.990.000 đ',
        description:
            'OPPO A96 128GB sở hữu thiết kế hiện đại, tinh tế và vô cùng mỏng với độ dày chỉ 8.4mm. Máy được trang bị màn hình IPS 6.59" tần số quét 90Hz, cấu hình mạnh mẽ với vi xử lý Snapdragon 680. OPPO A96 cón được tich hợp hệ thống camera kép với camera chính lên đến 50MP.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg',
        category_id: 5,
    },
    {
        name: 'OPPO A96 4G 128GB Chính Hãng',
        id: 25,
        price: '5.990.000 đ',
        price_old: '9.990.000 đ',
        description:
            'OPPO A96 128GB sở hữu thiết kế hiện đại, tinh tế và vô cùng mỏng với độ dày chỉ 8.4mm. Máy được trang bị màn hình IPS 6.59" tần số quét 90Hz, cấu hình mạnh mẽ với vi xử lý Snapdragon 680. OPPO A96 cón được tich hợp hệ thống camera kép với camera chính lên đến 50MP.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg',
        category_id: 5,
    },
];
const PageMenu = ({ hideProductList }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const filterEvenProducts = (menu, id) => {
        const filteredProducts = productLists.filter(
            (product) => product.category_id === menu.id,
        );
        console.log(filteredProducts);
        setFilteredProducts(filteredProducts);
        hideProductList(true);
    };

    return (
        <div>
            {categoryLists.map((menu) => (
                <button key={menu.id} onClick={() => filterEvenProducts(menu)}>
                    {menu.name}
                </button>
            ))}
            <ul>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} height="250" width="250" />
                        <h2>{product.name} </h2>
                        <p className={styles.productPrice}>{product.price} </p>
                        <p className={styles.productDescription}>
                            {product.description}{' '}
                        </p>
                    </div>
                ))}
            </ul>
        </div>
    );
};

function ProductList() {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(productLists.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = productLists.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    var myArr = [];
    for (let i = 0; i < totalPages; i++) {
        myArr.push(i);
    }

    return (
        <>
            <div className={styles.productList}>
                {currentData.map((product) => (
                    <Link to={`/products/${product.id}`}>
                        <div className={styles.productItem} key={product.id}>
                            <img src={product.image} height="250" width="250" />
                            <h2>{product.name} </h2>
                            <p>{product.price} </p>
                            <p className={styles.oldPrice}>
                                {product.price_old}
                            </p>
                            Chi tiết sản phẩm
                        </div>
                    </Link>
                ))}
            </div>
            <div>
                <a href="#">&laquo;</a>
                {Array.from(myArr, (index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        disabled={currentPage === pageNumber}
                    >
                        {pageNumber}
                    </button>
                ))}
                <a href="#">&raquo;</a>
            </div>
        </>
    );
}

function Products() {
    const [hideList, SetHideList] = useState(false);
    const hideProductList = (hide) => {
        SetHideList(hide);
    };

    return (
        <>
            <PageMenu hideProductList={hideProductList} />
            {!hideList && <ProductList />}
        </>
    );
}

export default Products;
