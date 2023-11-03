import React from 'react';

const Contactmap = (props) => {
    return(
        <div>
            <div className="col-lg-12 wow slideInUp" data-wow-delay="0.6s">
                    <iframe className="position-relative rounded w-100 h-100" title="Club Location"
                        src={props.srcformap}
                         style={{minHeight: "350px", border: "0"}}  aria-hidden="false"
                        ></iframe>
                </div>
        </div>
    )
};

export default Contactmap;