import React from 'react';
import Contact from './Contact';
import Contactform from './Contactform';
import Contactmap from './Contactmap';

const Contactinfo = (props) => {

    if (props.items.length === 0) {
        return (
          <div className="center">
            <h2>Team Members are yet to show on this page!!!!</h2>
          </div>
        );
      }

  return (
    <div>
      <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: "90px" }}>
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
          </div>
        </div>
      </div>

      {/* contact start */}

      <div className="container-fluid py-3 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us Through Given Details</h1>
          </div>
          {props.items.map((contact) => (
                <Contact 
                  key={contact.id}
                  phnum={contact.phnum}
                  email={contact.email}
                  address={contact.address}
                />
              
            ))}
          
          <div className="row g-5">
            <div className="col-lg-6">
              <Contactform />
            </div>
            <div className="col-lg-6">
            {props.items.map((contactmap) => (
              <Contactmap 
                key={contactmap.id}
                srcformap={contactmap.srcformap}
              />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* contact end */}

    </div>
  );
};

export default Contactinfo;
