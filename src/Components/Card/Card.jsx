import React from 'react'
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBedFront, faSink, faHouse } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    console.log(props);
  return (
    
        <div className="card">
            <div className="image">
                <img src={props.data.image} alt="Loading..." />
            </div>
            <div className="content">
            <p className='price'><span>{props.data.Price}$</span><i>/month</i></p>
                <h4>{props.data.Name}</h4>
                <p className='address'>{props.data.Location}</p>
        
            <div className="Footer">
                <p>
                <FontAwesomeIcon icon={faBed} className="icons"/>
                    {props.data.Beds}
                </p>
                <p>
                <FontAwesomeIcon icon={faSink} className="icons" />
                    {props.data.Bath}
                </p>
                <p>
                <FontAwesomeIcon icon={faHouse} className="icons" />
                    {props.data.Area}
                </p>
            </div>
            </div>
        </div>

        
  
  )
}

export default Card