import React from 'react'
import { Link } from 'react-router-dom'

const Contact = (props)=>{
    return(
        <div className="container">
            <div className="row">
            <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/home" >Home</Link></li>
                    <li className="breadcrumb-item active">Contact Us</li>
                </ol>
                <div className="col-12">
                    <h3>Conatact Us</h3>
                    <hr />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque odio expedita laudantium voluptates nesciunt a commodi totam accusamus quaerat?</p>
        </div>
        
    )
    
}

export default Contact