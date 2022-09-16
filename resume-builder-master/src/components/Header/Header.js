import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mt-1">
      <div div className="card bg-white text-dark text-center overflow-hidden align-middle" style={{ height: '460px' }} >
        {/* <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2PiT0?ver=6106" class="card-img" alt="..." /> */}
        {/* < img src="https://maxwell.cz/wp-content/uploads/2018/12/Customer-Service-5.jpg" class="card-img" alt="..." /> */}

        < img src="https://www.nasa.gov/specials/X57/images/future_dzyne_bwb.png" class="card-img" alt="..." />

        <div className="card-img-overlay my-4">
          <h2 className="card-title my-5">Land your dream job with the help of our resume builder.</h2>
          <p className="card-text my-3">The online resume builder getting folks hired by BBC, Google, Apple, Tesla, and Airbnb.</p>
          <p class="card-text">Build your brand-new resume in as little as 5 minutes.
            Try it for free.</p>
          <Link to="/body"><button type="button" className="btn btn-outline-dark my-4">Start Building</button></Link>
        </div>
      </div >

      <div id="carouselExampleFade" className="carousel slide carousel-fade bg-light mt-5" data-bs-ride="carousel" >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://resumebuild.com/wp-content/uploads/2021/11/icon-resume-examples.svg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://resumebuild.com/wp-content/uploads/2021/11/icon-resume-templates.svg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://resumebuild.com/wp-content/uploads/2021/11/icon-resume-resources.svg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <ul className="list-group mt-0 mb-5 border-white text-center" >
        <h1 className="my-5">𝙺𝚎𝚢 𝙵𝚎𝚊𝚝𝚞𝚛𝚎𝚜 𝚘𝚏 𝚘𝚞𝚛 𝚂𝚎𝚛𝚟𝚒𝚌𝚎</h1>
        <li className="list-group-item border-white bg-dark text-light rounded-pill my-1">Robust Dynamic Input Field </li>
        <li className="list-group-item border-white bg-light rounded-pill my-1">Fast and Easy to Use</li>
        <li className="list-group-item border-white bg-primary rounded-pill my-1">Having Multiple Colour Options</li>
        <li className="list-group-item border-white bg-light rounded-pill my-1">Professional Experience</li>
        <li className="list-group-item border-white bg-warning rounded-pill my-1">Download your resume as PDF</li>
      </ul>

      <div class="accordion accordion-flush mt-0 mb-5" id="accordionFlushExample" >
        <h1 className="my-5 text-center">𝙼𝚘𝚜𝚝𝚕𝚢 𝙰𝚜𝚔𝚎𝚍 𝚀𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜</h1>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Why should I use a resume builder?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder Using a resume builder makes the process of creating a resume significantly faster and easier. Ever tried building your resume with Word?
              The whole process is a huge pain – you make a TINY change to your resume, and the entire resume layout gets completely messed up.
              With a resume builder, you don’t have to worry about the nitty gritty of resume creation, like font selection, layout, formatting, etc.
              All you have to do is pick a resume template, fill it in, and then you’re ready to start applying for jobs! class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              What is a resume?
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history.
              It usually includes information about the following:

              <ul>
                <li>Your work history</li>
                <li>Contact information</li>
                <li>Educational background</li>
                <li>Achievements</li>
                <li>Resume summary or resume objective.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              What's the difference between a CV and a resume?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">In the EU, the words "CV" and "resume" are used interchangeably
              In the United States, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics.
              Want to learn more? Check out our article on the differences between CVs and resumes.
            </div></div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Is this a completely free resume builder?</button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Yes, Novorésumé is a 100% free resume builder.
              If you’re on a budget, you can use it to create your resume completely free of charge. And no, unlike some other resume builders out there, we don’t hit you with a paywall once you’ve completed your resume.
              If you use any of our premium features, the software will let you know about it. It will then ask if you did it accidentally, or if you would like to upgrade to Novorésumé Premium. You're in control!
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div >
  );
}

export default Header;