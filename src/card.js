import React from 'react'

const Card = (props) => {
    const { name, age, job, img, location, gender } = props
    return (
        <div className="card">
            <img src={img} alt="Avatar" style={{ width: '100%', height: '250px' }} />
            <div className="card-items">
                <h4>Name: <b>{name}</b></h4>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Location: {location}</p>
                <p>Job: {job}</p>
            </div>
        </div>
    )
}

export default Card