import React from 'react';
function NumberPage(item) {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(item.productLists.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = item.item.props.productLists.slice(
        startIndex,
        endIndex,
    );

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
                            <img
                                src={product.image}
                                height="250"
                                width="250"
                                alt=""
                            />
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
                <button>Go back</button>
                {Array.from(myArr, (index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        disabled={currentPage === pageNumber}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button>Go forward</button>
            </div>
        </>
    );
}
export default NumberPage;
