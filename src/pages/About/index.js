import React from 'react';

import "./index.scss";

const About = React.memo(() => {
    return (
        <div className="about row m-0">
            <h2>
                Thanks for visiting this website. This website is solely developed for educational purpose.
                <br/>
                Data is taken from <a href="https://www.mohfw.gov.in/">MOHFW </a> &  <a href="https://www.covid19india.org/">COVID19</a> websites.
                <br/>
                Lets stay strong and fight <strong>COVID19</strong> outbreak by taking all precautionary measures.             
                <br/>
                <i>"Stay home. Stay safe. Save lives"</i>
            </h2>
        </div>
    );
});

export default About;
