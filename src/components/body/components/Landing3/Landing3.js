import React from "react";

import "./Landing3.css";
const Landing3 = (props) => {
  return (
    // <div>
    //   {/* <!-- News Start --> */}
    //   <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    //     <div className="container py-5">
    //       <div
    //         className="section-title text-center position-relative pb-3 mb-5 mx-auto"
    //         style={{ maxWidth: "600px" }}
    //       >
    //         <h5 className="fw-bold text-primary text-uppercase">Latest News</h5>
    //         <h1 className="mb-0">
    //           Read The Latest Articles from Our Club News
    //         </h1>
    //       </div>
    //       <div className="row g-5">
    //         <li className="news-list">
    //           <div className="col-lg-4 wow slideInUp" data-wow-delay="0.5s">
    //             <div className="blog-item bg-light rounded overflow-hidden">
    //               <div className="blog-img position-relative overflow-hidden">
    //                 <img className="img-fluid" src="img/blog-1.jpg" alt="" />
    //               </div>
    //               <div className="p-4">
    //                 <div className="d-flex mb-3">
    //                   <small className="me-3">
    //                     <i className="far fa-user text-primary me-2"></i>
    //                     {props.publisher}
    //                   </small>
    //                   <small>
    //                     <i className="far fa-calendar-alt text-primary me-2"></i>
    //                     {props.date}
    //                   </small>
    //                 </div>
    //                 <h4 className="mb-3">{props.title}</h4>
    //                 <p>{props.shortdescp}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <!-- News Start --> */}
    // </div>
    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.5s">
      <div className="blog-item bg-light rounded overflow-hidden" style={{height: "400px"}} >
        <div className="blog-img position-relative px-4 py-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <img className="img-fluid" src={props.img} alt="newsimg" style={{height: "250px", width: "200px" }} />
        </div>
        <div className="p-4">
          <div className="d-flex mb-3">
            <small className="me-3">
              <i className="far fa-user text-primary me-2"></i>
              {props.publisher}
            </small>
            <small>
              <i className="far fa-calendar-alt text-primary me-2"></i>
              {props.date}
            </small>
          </div>
          <h4 className="mb-3">{props.title}</h4>
          <p>{props.newsdetail}</p>
        </div>
      </div>
    </div>
  );
};

export default Landing3;
