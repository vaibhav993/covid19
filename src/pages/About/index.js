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
            <div className="Links">
                <h1 class="px-4">Usefull Links</h1>
                <div className="link fadeInUp">
                    <h3>HELPLINE NUMBERS [by State]</h3>
                    <a href="https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf">https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf</a>
                </div>
                <div className="link fadeInUp">
                    <h3>Ministry of Health and Family Welfare, Gov. of India</h3><a
                        href="https://www.mohfw.gov.in/">https://www.mohfw.gov.in/</a>
                </div>
                <div className="link fadeInUp">
                    <h3>WHO : COVID-19 Home Page</h3>
                    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a>
                </div>
                <div className="link fadeInUp">
                    <h3>CDC</h3>
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">https://www.cdc.gov/coronavirus/2019-ncov/faq.html</a>
                </div>
                <div className="link fadeInUp">
                    <h3>COVID-19 Global Tracker</h3>
                    <a href="https://coronavirus.thebaselab.com/">https://coronavirus.thebaselab.com/</a>
                </div>
            </div>
        </div>
    );
});

export default About;
