/* Imports */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Facility from './Facility';
import './gym.css';
import Plan from './Plan';
import Star from './Star';
import WhyChoose from './WhyChoose/WhyChoose';

/* Gym component */
function Gym(props) {
    const [filtered, setFiltered] = useState({});
    /* get id from route */
    const { id } = useParams();
    const [plan, setPlan] = useState([])

    /* useEffect triggers when props or id updates */
    useEffect(() => {
        const find = props.arr.find(element => element.user_id === id)
        setFiltered(find);
    }, [props, id])

    /* useEffect when id or filtered value updates */
    useEffect(() => {
        if (filtered.gym_name !== '') {
            fetch(' https://devapi.wtfup.me/gym/plan', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'gym_id': id })
            })
                .then(res => res.json())
                .then((res) => {
                    if(res.data) {
                        /* Set value to plan useState */
                        setPlan(res.data)
                    }
                    
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [filtered, id])
    /* return */
    return (
        <div className='gym'>
            <Link to='/' className='back'>
                <i className='fa fa-angle-left'></i>
                <span>Back</span>
                </Link>
            <div className='title'>
                {/* Set value from props */}
                {filtered ? <h2>{filtered.gym_name
                }</h2> : null}
                <div className='column'>
                    <Star />
                    {/* Set value from props */}
                    <span>{filtered ? `${filtered.rating} Rating` : ''}</span>
                </div>
            </div>
            <div className='address'>
                <i className='fa fa-map-marker'></i>
                {/* Set value from props */}
                {filtered ? <span>{filtered.address1}, {filtered.address2}</span> : null}
            </div>
            <div className='grid'>
                <div className='left'>
                    <h3>Description</h3>
                    <span>{filtered ? filtered.description
                        : ''}</span>
                    <h3>Facilities</h3>
                    {/* Renders Facility Component */}
                    {filtered ? <Facility /> : null}
                    <h3>Why to choose WTF?</h3>
                    {/* Renders WhyChoose component  */}
                    {filtered ? <WhyChoose /> : null}
                </div>
                <div className='right'>
                    <span>Choose Membership</span>
                    {(plan !== []) || (plan !== undefined) ? plan.map((e, index) => {
                        return (
                            /* Rendwers Plan component with props */
                            <Plan plan={e} index={index} key={`plan-${index}`} />
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default Gym