import React from "react";
import Landing3 from "./Landing3";

const Landing3info = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No News Yet</h2>
      </div>
    );
  }

  // console.log(props.items);
  return (

    // <ul style={{ paddingLeft: "0rem", listStyle: "none" }}>
    //   {props.items.map((news) => (
    //     <Landing3
    //       key={news.nid} // Use news.nid as the key
    //       news={news.nid} // Use news.nid here
    //       pid={news.pid}
    //       img={news.img}
    //       title={news.title}
    //       shortdescp={news.shortdecsp}
    //       publisher={news.publisher}
    //       date={news.date}
    //     />
    //   ))}
    // </ul>
    // </div>

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Latest News</h5>
          <h1 className="mb-0">Read The Latest Articles from Our Club News</h1>
        </div>
        <div className="row g-5">
          {props.items.map((news) => (
            <Landing3
              key={news.id}
              news={news.id}
              publisher={news.publisher}
              img={news.img}
              date={news.date}
              title={news.title}
              newsdetail={news.newsdetail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing3info;
