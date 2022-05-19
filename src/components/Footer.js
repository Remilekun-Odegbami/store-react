import React from 'react'

function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="container">
            <div className="row">
                <nav className="nav footer-nav d-flex justify-content-around mt-3">
                    <a href="index.html" className="footer-logo">Kul Shoppa</a>
                    <div className="nav-links d-flex flex-column">
                        <a href="About.html" className='mx-3'>About</a>
                        <a href="Contact.html" className='mx-3'>Contact</a>
                        <a href="Single Product.html" className='mx-3'>Single Product</a>
                        <a href="Products.html" className='mx-3'>Products</a>
                    </div>
                    <ul className="social-list">
                        <p className="text">Socials</p>
                        <li className="so-list-item">
                            <a href="#link">
                                <span className='sr-only'>facebook</span>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="so-list-item">
                            <a href="#link">
                                <span className='sr-only'>twitter</span>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="so-list-item">
                            <a href="#link">
                                <span className='sr-only'>rss</span>
                                <i className="fa fa-rss" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <h5 className="colophon-text text-center mt-5">Copyright &copy; 2021 Kul Shoppa</h5>
            </div>
        </div>
    </footer>

  )
}

export default Footer