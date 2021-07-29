import React from 'react'
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
function Header() {
    return (
        <>
            <header>
  	 <div class="top-port">
               <div class="container">
               		<div class="row top-row">
               			  <div class="col-lg-4 header-left-box col-md-5 d-none d-sm-block">
								<p>We have more than 15 years of experience</p>
							</div>
							<div class="col-lg-8 col-md-7 header-right-box">
								<ul>
									<li class="hs-1">
										<i class="fas fa-headphones"></i> 04651 - 270602
									</li>
									<li>
										<i class="fas fa-envelope"></i> suresh01@gmail.com
									</li>
									<li class="hs">
										<i class="fas fa-map-marker-alt"></i> Tamilnadu, India
									</li>
								</ul>
							</div>
               		</div>
               </div>
              
        </div>
        <div id="logo-head" class="logo-port">
            <div class="container ">
                <div class="row logo-port-content">

                    <div class="col-sm-12 logo-box col-md-4">
                        <img src="assets/images/logo.jpg" alt=""/>
                        <a data-toggle="collapse" data-target="#nav-head" href="#nav-head" ><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
                    </div>
                    <div id="menu" class="col-sm-8 d-none d-md-block ">
                        <div class="row">
                            
                            <div class="col-lg-4 col-md-2">
                                
                            </div>
                            <div class="col-lg-4 col-md-5">
                                <div class="row cvnbj">
                                    <div class="col-sm-3 no-padding center ibk-l">

                                        <i class="fas fa-hourglass-half"></i>
                                    </div>
                                    <div class="col-sm-9 det-li">
                                        <b>Monday - Saturday</b>
                                        <br/>
                                        <b>9AM - 8.30PM</b>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-5">
                                <div class="row cvnbj">
                                    <div class="col-sm-3 no-padding center ibk-l">

                                        <i class="fas fa-mobile-alt cl3"></i>
                                    </div>
                                    <div class="col-sm-9 det-li">
                                        <b>Call Us</b>
                                        <br/>
                                        <b>+91 7200 20 40 30</b>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="nav-head" class="nav-port">
        	<div class="container no-padding">
        		<div class="row nav-row no-margin">
        			<div class="col-md-9 nav-coll col-sm-12">
        				<nav>
        					<ul>
        						<li><Link to="/"><a >Home</a></Link></li>
        						<li><Link to="/About"><a >About</a></Link></li>
        						<li><Link to="/Service"><a >Service</a></Link></li>
        						<li><Link to="/Blog"><a >Blog</a></Link></li>
        						<li><Link to="/Contact"><a >Contact</a></Link></li>
        						
        					</ul>
        				</nav>
        			</div>
        			<div class="col-md-3 col-sm-12 cart-ap">
        				<ul>
        					
							<li><a onclick="showModel()"><i class="far fa-calendar-alt"></i> Get Appointment</a></li>
        				</ul>
        			</div>
        		</div>
        	</div>
        </div>
  </header>
        </>
    )
}

export default Header
