import React from 'react'
import { FaFutbol, FaGripfire, FaMusic, FaNewspaper } from 'react-icons/fa'
import { MdHistory, MdHome, MdPlaylistPlay, MdRssFeed, MdVideoLibrary, MdWatchLater } from 'react-icons/md'
import './MainArea.css'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player'


function MainArea(){
    return(
        <div className="MainArea">
           <div className="Sidebar">
               <div className="Home">
                    <div className="Icon">
                       
                        <div className="icon">
                            <img src="/images/dhoni2.jpg"alt="dp"/>
                            &nbsp;
                            <h4><b>NaveenRDNK</b></h4>
                        </div>                      
                        
                        
                    </div>

                    <div>Videos |  Subscribers</div>
                    <div>279    |&nbsp;&nbsp;2.5K</div>
                    <hr></hr>
                   <div className="Quick_Icon">
                       <MdHome color = "red" fontSize="3rem"/>
                       <div>Home</div>
                   </div>
                   <div className="Quick_Icon">
                       <FaGripfire color = "grey" fontSize="3rem"/>
                       <div>Trending</div>
                   </div>
                   <div className="Quick_Icon">
                       <BsFillCollectionPlayFill color = "grey" fontSize="3rem"/>
                       <div>Subscriptions</div>
                   </div>

                   <hr></hr>

                   <div className="Library"></div>
                   
                   <div className="Quick_Icon">
                       <MdVideoLibrary color = "grey" fontSize="3rem"/>
                       <div><b>Library</b></div>
                   </div>

                   <div className="Quick_Icon">
                       <MdHistory color = "grey" fontSize="3rem"/>
                       <div>History</div>
                   </div>
                   <div className="Quick_Icon">
                       <MdWatchLater color = "grey" fontSize="3rem"/>
                       <div>Watch Later</div>
                   </div>
                   <hr></hr>
                   <div className="Quick_Icon">
                       <MdPlaylistPlay color = "grey" fontSize="3rem"/>
                       <div><b>Best of YouTube</b></div>
                   </div>
                   <div className="Quick_Icon">
                       <GiGamepad color = "grey" fontSize="3rem"/>
                       <div>Gaming</div>
                   </div>
                   <div className="Quick_Icon">
                       <MdRssFeed color = "grey" fontSize="3rem"/>
                       <div>Live</div>
                   </div>
                   <div className="Quick_Icon">
                       <FaFutbol color = "grey" fontSize="3rem"/>
                       <div>Sports</div>
                   </div>
                   <div className="Quick_Icon">
                       <FaMusic color = "grey" fontSize="3rem"/>
                       <div>Musics</div>
                   </div>
                   <div className="Quick_Icon">
                       <FaNewspaper color = "grey" fontSize="3rem"/>
                       <div>News</div>
                   </div>
                   <hr></hr>
                   <div className="Quick_Icon">
                       <MdPlaylistPlay color = "grey" fontSize="3rem"/>
                       <div>Settings</div>
                   </div>

                   <br></br>

                    <div className = "extra_option" >Show More</div>                  
                   
               </div>
               <div className="logout"><b>Logout</b></div>
               <br></br>
               <div className="extra_option"> 2018 YouTube,LLC
               <hr></hr> 
               </div>
                 
           </div>
            

           <div className="Main">
              
              <h3>Weekly Featured</h3>

              <h1>Hello, Summer Vacation!</h1>

              <div className="extra_option">
                  <p>
                      School is just around the corner, so finish off summer break with a bang.<br></br> A last  minute family
                      vacation will give the kids stories to share when they return to school and memories to last a lifetime.
                      
                  </p>

                  
              </div>
              
              <div className="Videos">
                  <div className="Video">
                      <ReactPlayer
                      url="https://www.youtube.com/watch?v=hxeITyt_XfU"
                      height="150px"
                      width="160px"
                      controls/>
                      <br></br>
                      <div><b>Top 10 Vacation Spots In The World</b> </div>                       
                  </div>
              

                  <img src="https://th.bing.com/th/id/OIP.0tt5ZRyIVgA-OCaf5kW_pQHaE8?w=238&h=180&c=7&o=5&pid=1.7" style={{height:"150px",width:"180px"}} alt="discount"/>
                  <div className="Video">
                      <ReactPlayer
                      url="https://www.youtube.com/watch?v=BHdIQy00_p4"
                      height="150px"
                      width="160px"
                      controls/>
                      <br></br>
                      
                          <div> <b>10 Best Places to Visit in Canada - Travel Video </b></div>
                       
                  </div>
              </div>                   

             <h2 className="alignleft"><b>Recommended Videos</b></h2>

              <div className="Videos">
                  <div className="Video">
                      <ReactPlayer
                      url="https://www.youtube.com/watch?v=DLX62G4lc44"
                      height="150px"
                      width="240px"
                      controls/>
                      <br></br>
                      <div className="Logo">
                          <img src="/images/dhoni.jpg"alt="Dhoni"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                          <div>Learn React JS - Full Course for Beginners - Tutorial 2019 </div>
                       </div>
                       <br></br>
                       <div className="view">
                       2,447,696 views•18 Dec 2018
                      </div>
                  </div>
              

              
                  <div className="Video">
                      <ReactPlayer
                      url="https://www.youtube.com/watch?v=yalxT0PEx8c"
                      height="150px"
                      width="240px"
                      controls/>
                      <br></br>
                      <div className="Logo">
                          <img src="/images/dhoni.jpg"alt="Dhoni"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                          <div> Learn Bootstrap in 5 minutes | Responsive Website Tutorial </div>
                       </div>
                       <br></br>
                       <div className="view">
                       502,630 views•22 Jul 2016
                      </div>
                  </div>
              

                <div className="Video">
                      <ReactPlayer
                      url="https://www.youtube.com/watch?v=I2UBjN5ER4s"
                      height="150px"
                      width="240px"
                      controls/>
                      <br></br>
                      <div className="Logo">
                          <img src="/images/dhoni.jpg"alt="Dhoni"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                          <div> Beginner React JS Project Fully Responsive </div>
                       </div>
                       <br></br>
                       <div className="view">
                       305,567 views•11 Aug 2020
                      </div>
                </div>
        

              
                                    
              
            </div>

            

            <div className="Videoss">

            <div className="Video">
                      <ReactPlayer
                      url="https://www.youtube.com/watch?v=fSp2C7QPH8M"
                      height="150px"
                      width="240px"
                      controls/>
                      <br></br>
                      <div className="Logo">
                          <img src="/images/dhoni.jpg"alt="Dhoni"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                          <div>Learn React.js in 4 Hours | React.js Tutorial | Edureka </div>
                       </div>
                       <br></br>
                       <div className="view">
                       180,803 views•14 Jul 2019
                      </div>
                  </div>


                  <div className="Video">
                      <ReactPlayer
                      url="https://www.youtube.com/watch?v=62mC2lrMoRI"
                      height="150px"
                      width="240px"
                      controls/>
                      <br></br>
                      <div className="Logo">
                          <img src="/images/dhoni.jpg"alt="Dhoni"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                          <div>FREE FIRE FACTORY ROOF FIRST FIGHT </div>
                       </div>
                       <br></br>
                       <div className="view">
                       12,263,357 views•3 Jan 2021
                      </div>
                  </div>
              

              
                  <div className="Video">
                      <ReactPlayer
                      url="https://www.youtube.com/watch?v=qLXp4MoBXOQ"
                      height="150px"
                      width="240px"
                      controls/>
                      <br></br>
                      <div className="Logo">
                          <img src="/images/dhoni.jpg"alt="Dhoni"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                          <div> Solo vs Squad 2 AWM - Garena Free Fire</div>
                       </div>
                       <br></br>
                       <div className="view">
                       8,918,093 views•8 Jan 202
                      </div>
                  </div>
                
            </div>
            <div className = "extra_option" >Show More</div>
        </div>  

        <div className="Sidebar2">
               <div className="Home">
                    <div className="Icon">
                       <h2><b>Live</b></h2>
                        <img src="https://th.bing.com/th/id/OIP.XOKFluoOsGob005RrXSHTAHaD4?w=330&h=180&c=7&o=5&pid=1.7"alt="dp"/>
                           
                    </div>

                    <div>VIEWS 10K &nbsp;&nbsp; COMMENTS 7.5K</div>
                    <hr></hr>

                    <h2><b>Top Channels</b></h2>
                    <div className = "extra_option" >Show More</div>

                   
                   <div className="Icon">
    
                   <img src="https://th.bing.com/th?q=YouTube+Disney+Channel+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247"alt="Dhoni"style={{height:"55px",width:"55px",borderRadius:"50%"}}/>
                       <div>Disney Channel</div>
                       <div className = "extra_option" >6.2M Subscribers</div>
                        
                   </div>
                   <div className="Icon">
    
                   <img src="https://th.bing.com/th/id/OIP.ZnzXGtOphwxhWiTiCDn9gwAAAA?w=218&h=180&c=7&o=5&pid=1.7"alt="Music_time"style={{height:"55px",width:"55px",borderRadius:"50%"}}/>
                       <div>Music Time</div>
                       <div className = "extra_option" >3.7M Subscribers</div>
                   </div>
                   
                   <div className="Icon">
    
                   <img src="https://th.bing.com/th/id/OIP.swohpqpWLxr9jIaBaY5dwQHaHZ?w=176&h=180&c=7&o=5&pid=1.7"alt="t-series"style={{height:"55px",width:"55px",borderRadius:"50%"}}/>
                       <div>T-Series</div>
                       <div className = "extra_option" >20.2M Subscribers</div>
                   </div>

                   <div className="Icon">
    
                   <img src="data:image/jpeg;base64,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"alt="Dell"style={{height:"55px",width:"55px",borderRadius:"50%"}}/>
                       <div>DELL</div>
                       <div className = "extra_option" >12.2M Subscribers</div>
                   </div>

                   <div className="Icon">
    
                   <img src="https://th.bing.com/th/id/OIP.gffO6Q99CvT2Q3CRdgAF_gHaDt?w=349&h=175&c=7&o=5&pid=1.7"alt="CNN"style={{height:"55px",width:"55px",borderRadius:"50%"}}/>
                       <div>CNN</div>
                       <div className = "extra_option" >8.9M Subscribers</div>
                   </div>
                   
                   <div className="Icon">
    
                   <img src="https://th.bing.com/th/id/OIP.QdgqWp9Kugz7Lr_jNVi_jwHaEK?w=304&h=180&c=7&o=5&pid=1.7"alt="Sony"style={{height:"55px",width:"55px",borderRadius:"50%"}}/>
                       <div>Sony Entertainment</div>
                       <div className = "extra_option" >7.5M Subscribers</div>
                   </div>
                   <hr></hr>
                   
                   <img src="https://th.bing.com/th/id/OIP.w0qj0XXPdIW7YaUf0Fa8kgHaDb?w=287&h=161&c=7&o=5&pid=1.7" alt = "Coke" style={{height:"225px",width:"350px"}}></img>
                   <br></br>
                   <br></br>
                   <img src="https://th.bing.com/th/id/OIP.YxU1UkCHoWVeL9VHNTiR0AHaJF?w=182&h=223&c=7&o=5&pid=1.7" alt ="Car" style={{height:"225px",width:"350px"}}/>
                   <br></br>
                   <br></br>
               </div>
               
               
           </div>
    </div>
    )
}

export default MainArea