import React from 'react'
import "./PopUp.scss"
import {  AiOutlineClose,AiOutlineColumnWidth } from "react-icons/ai"
import {  BiBed ,BiBath} from "react-icons/bi"
const PopUp = ({ popup, closeToggle, changePopup }) => {
  return (
    <>



      {closeToggle && popup.map((pop) => {
        return (

          <>
            <div className="popup-container">
              <div className="popup-wrapper">
                

                <div className="pop-image">

                  <img src={pop.img} alt="" />
                </div>
                <div className="pop-details">

                  <div className="tags">
                    <p>{pop.category}</p>
                    <p>{pop.location}</p>
                    <p>{pop.price}</p>
                  </div>
                  <div className="main-taglines">

                  <h2>{pop.rent}<span>/month</span></h2>
                  <h3>{pop.title}</h3>
                  <h4>{pop.address}</h4>
                  </div>
                  <div className="about">
                    <p><span><BiBed/></span>{pop.bedroom}</p>
                    <p><span><BiBath/></span>{pop.bathroom}</p>
                    <p><span><AiOutlineColumnWidth/></span>{pop.builtup}</p>
                  </div>

                </div>

                <button onClick={changePopup} className="close-btn" >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </>
        )
      })}

    </>
  )
}

export default PopUp
