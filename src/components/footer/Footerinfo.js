import React from 'react';
import Footer from './Footer';

const Footerinfo = (props) => {
    return (
        <div>
            {props.items.map((contact) => (
                    <Footer
                      key={contact.id}
                      phnum={contact.phnum}
                      email={contact.email}
                      address={contact.address}
                    //   srcformap={contact.srcformap}
                    />
                  ))}
            
        </div>
    )
};

export default Footerinfo;