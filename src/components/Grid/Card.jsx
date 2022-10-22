import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';

/* Card component */
function Card(props) {
    
    return (
        <Link to={props.item.user_id} className='card'>
            <div className=''></div>
            <div className='details'>
                <div className='row'>
                    <h3>{props.item.gym_name}</h3>
                    <div className='star'>
                        {Math.round(props.item.rating) === 5 ?  <>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        </> : Math.round(props.item.rating) === 4 ? <>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-o'></i>
                        </> : Math.round(props.item.rating) === 3 ? <>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        </>: Math.round(props.item.rating) === 2 ? <>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        </> : Math.round(props.item.rating) === 1 ?
                        <i className='fa fa-star'></i> : <>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i></>
                        }
                    </div>
                    {/* Set value from props */}
                    <span className='address'>{props.item.address1}, {props.item.address2}, {props.item.city}</span>
                    <div className='location'>
                        <i className='fa fa-location-arrow'></i>
                        {/* Set value from props */}
                        <span>{props.item.duration_text} away | {props.item.distance_text}</span>
                    </div>
                </div>
                
                <div className='bottom'>
                    {/* Set value from props */}
                    <span>{props.item.plan_price ? `₹ ${props.item.plan_price} for ${props.item.plan_duration >= 30 ? `${props.item.plan_duration / 30} Months` : `${props.item.plan_duration} Days`}` : ''}</span>
                    <button>Book Now</button>
                </div>
            </div>
        </Link>
    )
}

export default Card;