import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Facility from './Facility';
import './gym.css';
import Plan from './Plan';
import Star from './Star';
import WhyChoose from './WhyChoose/WhyChoose';


function Gym(props) {
    const [filtered, setFiltered] = useState({});
    const { id } = useParams();
    const [plan, setPlan] = useState([])
    useEffect(() => {
        const find = props.arr.find(element => element.user_id === id)
        setFiltered(find);
    }, [props, id])


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
                        setPlan(res.data)
                    }
                    
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [filtered, id])
    return (
        <div className='gym'>
            <Link to='/' className='back'>
                <i className='fa fa-angle-left'></i>
                <span>Back</span>
                </Link>
            <div className='title'>
                {filtered ? <h2>{filtered.gym_name
                }</h2> : null}
                <div className='column'>
                    <Star />
                    <span>{filtered ? `${filtered.rating} Rating` : ''}</span>
                </div>
            </div>
            <div className='address'>
                <i className='fa fa-map-marker'></i>
                {filtered ? <span>{filtered.address1}, {filtered.address2}</span> : null}
            </div>
            <div className='grid'>
                <div className='left'>
                    <h3>Description</h3>
                    <span>{filtered ? filtered.description
                        : ''}</span>
                    <h3>Facilities</h3>
                    {filtered ? <Facility /> : null}
                    <h3>Why to choose WTF?</h3>
                    {filtered ? <WhyChoose /> : null}
                </div>
                <div className='right'>
                    <span>Choose Membership</span>
                    {(plan !== []) || (plan !== undefined) ? plan.map((e, index) => {
                        return (
                            <Plan plan={e} index={index} key={`plan-${index}`} />
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default Gym