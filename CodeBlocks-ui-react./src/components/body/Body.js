import React from 'react';
import Form from '../form/Form';
import './Body.css';

const Body = () => { 
    return (
        <div>
            <div className="container main-content">
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-0 feature-img">
                        <img style={{ 'margin-top': 25 }} className="img-fluid" src="./images/backround-pic-1.PNG" />
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <Form/>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Body;