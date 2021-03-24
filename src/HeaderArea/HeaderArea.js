import React from 'react'
import './HeaderArea.css'
import {FaYoutube} from 'react-icons/fa'
import {MdSearch, MdVideoCall, MdViewComfy} from 'react-icons/md'
import {AiTwotoneBell} from 'react-icons/ai'
function HeaderArea(){
    return(
        <body>
            <div className="HeaderArea">
                <div className="Header">
                    <header className="header">
                        <button className="button">
                            &#9776;
                        </button>
                        <FaYoutube color="red" fontSize="3rem"/>
                        <div> YouTube</div>
                    </header>
                    <div className="Search">
                        <input type="search"placeholder="Search"/>
                        <div className="search">
                            <MdSearch fontSize="3rem"></MdSearch>
                        </div>

                    </div>

                    <div className="Icon">
                        <div className="icon"> <MdVideoCall fontSize="2.8rem"/></div>
                        <div className="icon"> <MdViewComfy fontSize="2.8rem"/></div>
                        <div className="icon"> <AiTwotoneBell fontSize="2.8rem"/></div>
                        <div className="icon">
                            <img src="data:image/jpeg;base64,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"alt="dp"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </body>
    )
}

export default HeaderArea;