import React from 'react'
import { Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="container">
            <div className="row">
                <nav className="nav footer-nav d-flex justify-content-around mt-3">
                    <div className='col-md-4 col-sm-12 mt-4'>
                        <h3> <Link to='/' className='text-uppercase text-success'> Kul Sh<span className='text-danger'>op</span>pa</Link> </h3> 
                    </div>
                    <div className='col-md-4 col-sm-12 mt-4'>
                        <div className="nav-links ml-3 d-flex flex-column">
                        <Link className='nav-links ml-3' to='/about'>About</Link>
                        <Link className='nav-links ml-3' to='/contact'>Contact</Link>
                        <Link className='nav-links ml-3' to='/products'>Products</Link>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 mt-4 '>
                        <ul className="social-list m-0">
                            <h5 className="text">Socials</h5>
                            <li className="so-list-item mx-0">
                                <a href="#link">
                                    <span className='sr-only'>facebook</span>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="so-list-item mx-0">
                                <a href="#link">
                                    <span className='sr-only'>twitter</span>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="so-list-item mx-0">
                                <a href="#link">
                                    <span className='sr-only'>rss</span>
                                    <i className="fa fa-rss" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <h5 className="colophon-text text-center mt-5">Copyright &copy; 2021 Kul Shoppa</h5>
            </div>
        </div>
    </footer>

  )
}

export default Footer