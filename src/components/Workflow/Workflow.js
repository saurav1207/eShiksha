import React from 'react';
import './Workflow.css'; 
import data from './Workflow.json'; 

const WorkFlow = () => {
  return (
    <section className="workflow" id="workflow">
      <div className="container">
        <h2 className="section-title">
          <span className="slogan">What's the function - </span>
          <span className="title"> Let's see how it works</span>
        </h2>

        <div className="grid">
          {data.map((item, index) => (
            <div className="card" key={item.id}>
              <div className="iconBox">{`0${item.id}`}</div>
              <div className="wrapper">
                <h3 className="title">{item.title}</h3>
                <p className="subTitle">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
