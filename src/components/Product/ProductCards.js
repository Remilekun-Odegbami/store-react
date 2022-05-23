
// Products
const ProductCard = ({productName, price, productImage}) => {


    return (
        
        <section className='slider-wrapper mt-5'>
            <div className='container slider'>
                <div className='row slider-cards'>
                    <div className="card">
                            <img src={productImage} className="card-img-top" alt={productName} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{productName}</h5>
                                <p className="card-text text-danger">Old Price: ${price}</p>
                                <p className="card-text text-success">New Price: ${(price - 1.5).toFixed(2)}</p>
                                <div>
                                    <button type="submit" className="btn btn-success text-uppercase" >More info</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>        
    )
}

export default ProductCard;