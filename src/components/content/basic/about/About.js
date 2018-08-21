import React from 'react';
import './About.css';
//import '../home/Home.css';
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css';
import {$} from 'jquery';
import '../../../../../node_modules/jquery/dist/jquery.min.js';
// import '../../../../../node_modules/dist/jquery.lineProgressbar.js';
// import '../../../../../node_modules/dist/jquery.lineProgressbar.css';
// import {Progress} from 'reactstrap';






export const About= (props)=>{
    return(
        <div className="about">
            <div className="container about-icon">
               <i className="fa fa-user"></i>
               <h3>ABOUT <span>ME</span></h3>
            </div>   
                <div className="container about-skills">
                  <div className="row">
                    <div className="col-sm-6 about-block1">
                      <div className="about-heading">
                          <h3>HELLO, I AM A WEB <span>DEVELOPER</span></h3>
                      </div>
                      {/* about us */}
                      <div className="about-desc">
                      {/* name */}
                          <div className="about-desc-info">
                              <div className="about-info">
                                 <i className="fa fa-user"></i> 
                                 <p>NAME</p>
                              </div>
                              <div className="about-detail">
                                  <p>ASHU PAL</p>
                              </div>
                          </div>
                          {/* dob */}
                          <div className="about-desc-info">
                             <div className="about-info">
                             <i class="fa fa-calendar"></i>
                              <p>DATE OF BIRTH</p>
                             </div>
                              <div className="about-detail">
                                  <p>December 5th 1995</p>
                              </div>
                          </div>
                          {/* phone */}
                          <div className="about-desc-info">
                            <div className="about-info">
                              <i class="fa fa-phone"></i>
                              <p>PHONE</p>
                            </div>
                              <div className="about-detail">
                                  <p>+91 9891899553</p>
                              </div>
                          </div>
                          {/* email */}
                          <div className="about-desc-info">
                            <div className="about-info">
                              <i class="fa fa-paper-plane"></i>
                              <p>EMAIL</p>
                            </div>
                              <div className="about-detail">
                                  <p>ashupal0005@gmail.com</p>
                              </div>
                          </div>
                          {/* location */}
                          <div className="about-desc-info">
                             <div className="about-info">
                             <i className="fa fa-map-marker"></i>
                              <p>ADDRESS</p>
                              </div>
                              <div className="about-detail">
                                  <p>NEW DELHI</p>
                            </div>
                          </div>
                          <div className="about-desc-info about-para">
                              <p>
                                  A divide rule that second said Two deep. Darkness made great over moving together is us over
                                   unto heaven seed under set star lesser had to Fruit so open, of there isn't, whose saw.
                              </p>
                          </div>
                          

                      </div>
                    </div>
                    <div className="col-sm-6 about-block2">
                      <div className="about-heading">
                        <h3>
                            MY <span>SKILLS</span>
                        </h3>
                      </div>  
                        <div className="mySkills">
                        {/* skill-html/css */}
                            <div className="inner-skills">
                                <div className="skill-title">
                                   <span>HTML5/CSS3</span>
                                </div>
                                <div className="skill-bar">
                                  <div className="skill-bar-percent">
                                  80%</div>
                                  <progress value="80%"/>
                                </div>
                            </div>
                            {/* skill-js */}
                            <div className="inner-skills">
                                <div className="skill-title">
                                   <span>Javascript</span>
                                </div>
                                <div className="skill-bar">
                                  <div className="skill-bar-percent">
                                  50%</div>
                                  <progress value="50%"/>
                                </div>
                            </div>
                            {/* skill-jquery */}
                            <div className="inner-skills">
                                <div className="skill-title">
                                   <span>JQuery</span>
                                </div>
                                <div className="skill-bar">
                                  <div className="skill-bar-percent">
                                  50%</div>
                                  <progress value="50%"/>
                                </div>
                            </div>
                            {/* skill-photoshop */}
                            <div className="inner-skills">
                                <div className="skill-title">
                                   <span>Photoshop</span>
                                </div>
                                <div className="skill-bar">
                                  <div className="skill-bar-percent">
                                  50%</div>
                                  <progress value="50%"/>
                                </div>
                            </div>
                            {/* skill-reactjs */}
                            <div className="inner-skills">
                                <div className="skill-title">
                                   <span>Reactjs</span>
                                </div>
                                <div className="skill-bar">
                                  <div className="skill-bar-percent">
                                  50%</div>
                                  <progress value="50%"/>
                                </div>
                            </div>
                            {/* skill-angular */}
                            <div className="inner-skills">
                                <div className="skill-title">
                                   <span>Angular</span>
                                </div>
                                <div className="skill-bar">
                                  <div className="skill-bar-percent">
                                  50%</div>
                                  <progress value="50%"/>
                                </div>
                            </div>
                            {/* finish */}
                        </div>
                      
                    </div>
                  </div> 

                     {/*about experience  */}
                     <div className="about-heading">
                         <h3>
                             MY <span>EXPERIENCE</span>
                         </h3>
                     </div>
                     <div className="about-para">
                         <p>
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dusmod tempor incididunt ut labore 
                             et dolore magna aliqua. Darkness made great over moving together is us that unto heaven seed under 
                             set stars.
                         </p>
                     </div>
                     
                    <div className="about-exp">
                            <div className="row">
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-briefcase"></i>
                                <h3>Projects</h3>
                                <p>58</p>
                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-coffee"></i>
                                <h3>Coffees</h3>
                                <p>310</p>
                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-smile-o"></i>
                                <h3>Clients</h3>
                                <p>420</p>

                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-trophy"></i>
                                <h3>Contest Won</h3>
                                <p>32</p>

                                </div>
                            </div>
                    </div>
                    
                    {/* about hobbies and interests */}
                    <div className="about-heading">
                         <h3>
                             MY HOBBIES & <span>INTEREST</span>
                         </h3>
                     </div>
                     <div className="about-para">
                         <p>
                             Together moved fruitful seasons cattle morning seasons fourth above replenish dry doesn't gathered 
                             midst given have green him was. God midst deep open she'd moving their, green grass to years life 
                             cattle heaven moveth. 
                         </p>
                     </div>
                     <div className="about-exp">
                            <div className="row">
                            {/* 1st row */}
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-rocket"></i>
                                <h4>Space</h4>
                               
                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-music"></i>
                                <h4>Music</h4>
                                
                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-plane"></i>
                                <h4>Travelling</h4>
                               
                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-gamepad"></i>
                                <h4>Video games</h4>
                                </div>
                                {/* 2nd row */}
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-film"></i>
                                <h4>Movies</h4>
                               
                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-tree"></i>
                                <h4>Forest</h4>
                                
                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-book"></i>
                                <h4>Books</h4>
                               
                                </div>
                                <div className="col-sm-3 exp-info">
                                <i class="fa fa-picture-o"></i>
                                <h4>Photos</h4>
                                </div>
                            </div>
                    </div>
                    {/* about services */}

                    <div className="about-heading">
                         <h3>
                             MY <span>SERVICES</span>
                         </h3>
                     </div>
                     <div className="about-para">
                         <p>
                             Herb have fish darkness life give above and unto multiply whales, give every is so. God. Isn't 
                             called after moveth. God, us midst also winged. 
                         </p>
                     </div>
                     <div className="about-exp">
                            <div className="row">
                                <div className="col-sm-6 exp-info service-info">
                                <i class="fa fa-lightbulb-o"></i>
                                <h4>Innovative Ideas</h4>
                                <p>
                                    We don't want to conquer the cosmos, we simply want to  extend the boundaries of Earth to 
                                    the Frontiers of the Cosmos.
                                </p>
                                </div>
                                <div className="col-sm-6 exp-info service-info">
                                <i class="fa fa-code"></i>
                                <h4>Clean Code</h4>
                                <p> We don't want to conquer the cosmos, we simply want to  extend the boundaries of Earth to 
                                    the Frontiers of the Cosmos.</p>
                                </div>
                                <div className="col-sm-6 exp-info service-info">
                                <i class="fa fa-html5"></i>
                                <h4>HTML5</h4>
                                <p> We don't want to conquer the cosmos, we simply want to  extend the boundaries of Earth to 
                                    the Frontiers of the Cosmos.
                                </p>

                                </div>
                                <div className="col-sm-6 exp-info service-info">
                                <i class="fa fa-css3"></i>
                                <h4>CSS3</h4>
                                <p>
                                We don't want to conquer the cosmos, we simply want to  extend the boundaries of Earth to 
                                    the Frontiers of the Cosmos.
                                </p>

                                </div>
                            </div>
                    </div>

                </div> 
               
        </div>
        
    )
}