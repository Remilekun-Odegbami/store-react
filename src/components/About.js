import NavBar from './NavBar';
import Footer from './Footer';
import AboutImg from '../Media/item1.jpg'
import customer1 from '../Media/customer1.jpg'
import customer2 from '../Media/customer2.jpg'
import customer3 from '../Media/customer3.jpg'
import customer4 from '../Media/customer4.jpg'


function About() {
    return (
        <section className="about mt-0">
        <div className="container">
            <div className="row">
                <h1 className="header"> About Us</h1>
                <p className="sub-header"> Folores accusantium inventore itaque. Eos doloribus blanditiis libero aperiam. </p>
                <div className="section1 d-flex justify-content-between py-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={AboutImg} alt="About" className='img-fluid' />
                    </div>
                        <div className="abt-text col-lg-6 col-md-6 col-sm-12">
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur voluptatibus praesentium laborum ullam deleniti ipsa! Aliquid officiis dignissimos assumenda repellat, animi fuga temporibus sit pariatur laudantium quibusdam fugit, dolores accusantium inventore itaque. Eos doloribus blanditiis libero aperiam facere deleniti placeat facilis porro quaerat, dolorum officia nihil molestiae voluptas vitae? </p>
                            <p className="text">Aliquid officiis dignissimos assumenda repellat, animi fuga temporibus sit pariatur laudantium quibusdam fugit.</p>
                            <p className="text"> Dores accusantium inventore itaque. Eos doloribus blanditiis libero aperiam. </p>
                        </div>
                </div>
                <div className="section2 mb-5">
                    <h2 className="second-header">Reviews from our customers</h2>
                    <div className="cards d-flex justify-content-between">
                        <div className="card m-5">
                            {/* <i className="fa fa-globe" aria-hidden="true"></i> */}
                        <img src={customer1} alt="About" className='img-fluid' />
                            <h3 className="card-header">Kemi Seun</h3>
                            <p className="card-text">Sanimi fuga temporibus sit pariatur laudantium.</p>
                            <div className="green"></div>
                        </div>
                        <div className="card">
                        <img src={customer2} alt="About" className='img-fluid' />
                            <i className="fa fa-bullhorn" aria-hidden="true"></i>
                            <h3 className="card-header">Sarah Roland</h3>
                            <p className="card-text">Sanimi fuga temporibus sit pariatur laudantium.</p>
                            <div className="green"></div>
                        </div>
                        <div className="card m-5">
                        <img src={customer3} alt="About" className='img-fluid' />
                            <i className="fa fa-diamond" aria-hidden="true"></i>
                            <h3 className="card-header">Habib Peter</h3>
                            <p className="card-text">Canimi fuga temporibus sit pariatur laudantium</p>
                            <div className="green"></div>
                        </div>
                        <div className="card">
                        <img src={customer4} alt="About" className='img-fluid' />
                            <i className="fa fa-users" aria-hidden="true"></i>
                            <h3 className="card-header">Samuel David</h3>
                            <p className="card-text">Sanimi fuga temporibus sit pariatur laudantium</p>
                            <div className="green"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        < Footer />
    </section>
  )
}

export default About