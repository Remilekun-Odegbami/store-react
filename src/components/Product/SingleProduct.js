import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/action';

export default function SingleProduct() {
    const [data, setData] = useState({})
    const params = useParams()
    let urlLatest = `http://localhost:3009/api/latest/${params.id}`;
    let urlSlashed = `http://localhost:3009/api/slashed/${params.id}`;

    useEffect(() => {
        if (params.id >= 1001) {
            axios.get(urlSlashed)
            .then(res => {
                setData(res.data)
            })
        } else {
            axios.get(urlLatest)
            .then(res => {
                setData(res.data)
            })
        }
    }, []) 

    const dispatch = useDispatch();

    const addCart = (product) => {
      dispatch(addProduct(product));
    }

    return (
        /*
         data?.{id} is optional chaining saying if data is an empty object do not throw an undefined error 
        instead show a blank result.
        */

        <section key={data?.latestProductId || data?.slashedProductId} className="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product-image">
                            <img src={data?.Image} alt={data?.ProductName} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="product-info">
                            <h1 className="name">{data?.ProductName}</h1>
                            <h3 className="brief-info">This is our best selling, beautiful {data?.ProductName}</h3>
                            <div className="d-flex justify-content-between">
                                <h3 className="price">${data?.Price}</h3>
                                <div className="rating d-flex">                
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <a href="#" className="text-success"> Write a review</a>
                            </div>
                            <p className="full-info">{data?.ProductDescription}</p>
                        </div>
                        <form action="" method=''>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label htmlFor="size">Size:</label>
                                    <select className="custom-select custom-select-lg mb-3" id="size">
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="big">Big</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="qty">Quantity</label>
                                    <select className="custom-select custom-select-lg mb-3" id="qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <button 
                            type="submit" 
                            className="btn btn-success btn-block text-uppercase py-2"  
                            onClick={() => addCart(data)}
                            >
                                Add to Cart
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}







