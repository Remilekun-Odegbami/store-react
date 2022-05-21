import React, {useState} from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/action';

export default function ProductCardGroup( props) {
    const [isFav, setIsFav] = useState('isNotFav');

    const custChoice = () => {
        console.log("clicked")
        setIsFav("isFav")
    } 

    

    const dispatch = useDispatch();

    const addCart = (product) => {
      dispatch(addProduct(product));
    }
    
  return (
    <section className="all-products">
        <div className="container">
            <div className="row">
                <section className="new-products">
                    <div className="row d-flex justify-content-between container">
                        <div className="card mt-5">
                            <img src={props.productImage} className="card-img-top mt-2" alt={props.productName} />
                            <div className="card-body">
                                <h5 className="card-title">{props.productName}</h5>
                                <p className="price">Price: ${props.price}</p>
                                <div className="sizes">
                                    <button type="submit">XS</button>
                                    <button type="submit">S</button>
                                    <button type="submit">M</button>
                                    <button type="submit">L</button>
                                    <button type="submit">XL</button>
                                </div>                                
                                <div className="rating d-flex mt-3">                
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <div className="footer mt-3">
                                    <button type="submit" className="btn btn-success text-uppercase" >Add to Cart</button>
                                    <button onClick={() => addCart()}>Add to cart</button>
                                    <i className="fa fa-heart-o mx-3" aria-hidden="true" onClick={custChoice}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>            
            </div>
        </div>
    </section>
  )
}
