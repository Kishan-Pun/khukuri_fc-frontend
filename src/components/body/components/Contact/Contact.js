import React from 'react';

const Contact = (props) => {
    return( 
        <div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0"> {props.phnum} </h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">You Can Email Us</h5>
                            <h4 className="text-primary mb-0"> {props.email} </h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Visit our office</h5>
                            <h4 className="text-primary mb-0"> {props.address} </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;