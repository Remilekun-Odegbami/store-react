
// Products
const ProductCard = ({productName, price, rating, size, productImage, isFav}) => {

    return (
        
        <section className='slider-wrapper mt-5'>
            <div className='container slider'>
                <div className='row slider-cards'>
                    <div className="card">
                            <img src={productImage} className="card-img-top" alt={productName} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{productName}</h5>
                                <p className="card-text">Price: ${price}</p>
                                <div className="middle">
                                <p className="card-text">New Price: ${price}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>        
    )
}

export default ProductCard;