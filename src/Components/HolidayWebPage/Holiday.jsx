import React from 'react'
import "./Style.css";
import img from "../Day1/images/sidekiqmountain.jpg"
import twitterLogo from "./twitter_logo.png";
import wifiLogo from "./wifi_logo.png";
const Holiday = () => {
    return (
        <div className='container-fluid'>
            <div className='row bgDiv'>
                <div className='row'>
                    <div className='col-lg-12 col-sm-12 col-md-12 holidayDiv'>
                        <h1 id='h1'>HOLIDAY</h1>
                    </div>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light navDiv">
                        <div className="container">
                            <a className="navbar-brand" id='navbarText' href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navbarlink" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Templates</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Contact</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Enter Keyword here..." aria-label="Search" id="searchInput" />
                                    <button type="submit">Go</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='row imgDivRow'>
                    <div className='col-lg-9 col-sm-12 col-md-12 imgDiv'>
                        <div className='row imgRow'>
                            <div className='col-lg-6 col-sm-6 col-md-6'></div>
                            <div className=' col-lg-6 col-sm-5 col-md-5 imgDiv_inner'>
                                <h1>Etharum quidem rerum</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, debitis minus! Consequatur ipsum libero veritatis tempora et mollitia, distinctio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row second'></div>
            <div className='row contentDiv'>
                <div className='col-lg-8 col-sm-12 col-md-12'>
                    <div className='left-upper-div'>
                        <h1>HOLIDAY - Free CSS Template</h1>
                        <div className='row main_content_div'>
                            <div className='col-lg-4 col-sm-12 col-md-4'>
                                <img src={img} alt="img here" id='img' />
                            </div>
                            <div className='col-lg-8 col-sm-12 col-md-6'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, possimus. <span>Qui deserunt dolore rerum aperiam?</span>  Voluptates ea <span>consectetur</span>  culpa recusandae iure iusto delectus <span>consequuntur</span> excepturi, ipsa distinctio <span>aperiam obcaecati quo est,</span> totam aliquid eius corrupti saepe placeat ut error? Corporis ab id eaque hic quas. Deleniti nihil expedita harum architecto?</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                        <hr />
                        <div className='row '>
                            <div className='col-lg-6 col-sm-12 col-md-6 spec'>
                                <h1>Special Package <span>&#8544;</span></h1>
                                <p className='spec_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat sequi eius natus doloribus, veritatis accusantium minima repudiandae !</p>
                                <ul>
                                    <li>Suspendisse Feugat</li>
                                    <li>ulstadeals licnic ut odlo</li>
                                    <li>mesaisia haoh snasis regiitsref thbs</li>
                                </ul>
                            <hr />
                            </div>
                            <div className='col-lg-6 col-sm-12 col-md-6 spec'>
                                <div class="vertical"></div>
                                <div className='right-content-div'>
                                    <h1>Special Package <span>&#8545;</span></h1>
                                    <p className='spec_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat sequi eius natus doloribus, veritatis accusantium minima!</p>
                                    <ul>
                                        <li>Suspendisse Feugat</li>
                                        <li>ulstadeals licnic ut odlo</li>
                                        <li>mesaisia haoh snasis regiitsref thbs</li>
                                    </ul>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12 col-md-12 right_content_main'>
                    <h1>Destinations</h1>
                    <div className='main_content_div'>
                        <h5 className='p'>Donec mollis aliquet ligula</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, have a nice day</p>
                    </div>
                    <hr />
                    <div className='main_content_div'>
                        <h5 className='p'>Donec mollis aliquet ligula</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, have a nice day</p>
                    </div>
                    <hr />
                    <div className='main_content_div'>
                        <h5 className='p'>Donec mollis aliquet ligula</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, have a nice day</p>
                    </div>
                    <hr />
                    <div className='row main_content_div logo'>
                        <div className='col-lg-6 col-sm-6 col-md-6 logo ' style={{width:"50%",textAlign:"center"}}>
                            <img src={twitterLogo} alt="twitter logo" id='twitterImg' className='logoImages' />
                        </div>
                        <div className='col-lg-6 col-sm-6 col-md-6 logo'  style={{width:"50%",textAlign:"center"}}>
                            <img src={wifiLogo} alt="wifi logo" className='logoImages' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='row footerDiv'>
                <div className='col-lg-2 col-sm-12 col-md-12 infoBox'>
                    <h5>Contact</h5>
                    <p>Tel: 010-020-0889</p>
                    <p>Fax: 020-010-0650</p>
                    <p>Email: holiday@gmail.com</p>
                </div>
                <div className='col-lg-3 col-sm-12 col-md-12 infoBox'>
                    <h5>Privacy Policy</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, sapiente. Ipsa similique exercitationem ab reprehenderit debitis ipsum. </p>
                </div>
                <div className='col-lg-3 col-sm-12 col-md-12 infoBox'>
                    <h5>Partners</h5>
                    <ul>
                        <li> <span>Free CSS Template</span> </li>
                        <li> <span>Free Flash Template</span>  </li>
                        <li> <span>Web Design</span> </li>
                        <li> <span>Flash Website</span> </li>
                    </ul>
                </div>
                <div className='col-lg-3 col-sm-12 col-md-12 infoBox'>
                    <h5>Copyright</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae praesentium explicabo dolores nobis hic.</p>
                </div>
                <div className='copyrightText'>
                    <span >Copyright &copy; 2048 Your Company Name | Website Template by CSS Template</span>
                </div>
            </div>
        </div>
    )
}

export default Holiday
