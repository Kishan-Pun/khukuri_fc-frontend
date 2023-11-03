import React, {useState, useEffect} from "react";
import Contactinfo from "../components/Contact/Contactinfo";

import LoadingSpinner from "../UIElements/LoadingSpinner";
import ErrorModal from "../UIElements/ErrorModal";

import { useHttpClient } from "../hooks/http-hook";


// const Contact = [
//     {
//         phnum: '+356 2163 6734',
//         email: 'xyz@gmail.com',
//         address: '123 Street, NY, USA',
//         srcformap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7245161762394!2d83.46194687375075!3d27.694908126043067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868a00b9414f%3A0x2b3bcc802b959afe!2sButwal%20Bus%20Park!5e0!3m2!1sen!2snp!4v1696098075264!5m2!1sen!2snp',
//     }
// ];

const Contact = () => {

  const [loadedContact, setLoadedContact] = useState();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/khukurifc/contact"
        );

        setLoadedContact(responseData.contact);
        // setLoadedteamfcabout(responseData.longteamabout);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal
        error={error}
        onClear={clearError}
        style={{ height: "200px" }}
      />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
    <div>
    {!isLoading && loadedContact && <Contactinfo items={loadedContact} />}
      
    </div>
    </React.Fragment>
  );
};

export default Contact;
