import React from 'react';
import { useState } from 'react';

const productLists = [
    {
        name: 'iPhone 14 Pro Max 128GB Chính hãng (VN/A)',
        id: 1,
        price: '26.190.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pro-max-128gb-didongviet_5.jpg',
        category_id: 1,
    },
    {
        name: 'iPhone 14 128GB Chính hãng (VN/A)',
        id: 2,
        price: '26.190.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg',
        category_id: 1,
    },
    {
        name: 'iPhone 11 64GB Chính Hãng (VN/A)',
        id: 3,
        price: '26.190.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 1,
    },
    ,
    {
        name: 'Oppo 11 64GB Chính Hãng (VN/A)',
        id: 4,
        price: '26.190.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 1,
    },
    {
        name: 'Samsung 11 64GB Chính Hãng (VN/A)',
        id: 5,
        price: '26.190.000 đ',
        description:
            'iPhone 14 Pro Max 128GB Chính hãng (VN/A) hiện đã có mặt tại Di Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam. Với thiết kế thời thượng và các tính năng hiện đại, chiếc smartphone này sẽ mang đến cho bạn trải nghiệm đầy cảm xúc với khả năng sáng tạo bứt phá với bộ 3 camera gồm: 48MP và 2 camera 12MP, kết hợp với hiệu năng mạnh mẽ từ chipset Apple A16 Bionic 6 nhân. Bên cạnh đó, với dung lượng pin lớn cho phép người dùng trải nghiệm dài lâu. Đặt mua iPhone 14 tại Di Động Việt để có thể sở hữu chiếc máy sớm nhất với nhiều ưu đãi và khuyến mãi đi kèm.',
        image: 'https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg',
        category_id: 1,
    },
];
function Search() {
    const [search, setSearch] = useState('search...');
    const [productList, setProductList] = useState([]);
    // const { id } = useParams();
    // get search value : iphone   ==> {keyword}
    // search a string exist in a string
    // search nhung sp co name chua chu iphone
    const handleChange = (e) => {
        setSearch(e.target.value);
        const productSearchList = productLists.filter((product) =>
            product.name.toLowerCase().includes(e.target.value.toLowerCase()),
        );
        setProductList(productSearchList);
        console.log(productSearchList);
    };
    return (
        <nav class="navbar navbar-light bg-light justify-content-between">
            <form class="form-inline">
                <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </nav>
    );
}
export default Search;
