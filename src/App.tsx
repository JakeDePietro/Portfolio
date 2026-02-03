import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import homepicture from "./assets/homepicture.jpg";
import cargo from "./assets/cargo.png";
import networkmonitor from "./assets/networkmonitor.png";
import transformer from "./assets/transformer.png";
import knn from "./assets/knn.png";

export default function App() {
  return (
    <>
  <Navbar />

  <section className="sectionThing" id="home">
    <div className="page">
      <div className="heroThing heroGridThing">
        <div style={{textAlign: 'center'}}>
          <h2> Hello! I'm </h2>
          <h1>Jake DePietro</h1>
          <p style= {{ fontSize: "1.25rem" }}> I’m a Computer Science student at Worcester Polytechnic Institute with a minor in Data Science. I enjoy building software and understanding how systems work. </p>
          <p style={{ fontSize: "1.1rem" }}> Through coursework and projects, I’ve developed web apps and cloud deployed services. In my free time, I like experimenting with large language models, operating systems, servers, and performance monitoring. </p>
          <p style={{ fontSize: "1.1rem" }}> I’m currently focused on software engineering roles where I can keep growing, and apply my knowledge. </p>
          <a className="heroButton" href="#projects">View Projects</a>
        </div>
        <div className="heroImageThing">
            <img src={homepicture} alt="Jake DePietro" />
        </div>
      </div>
    </div>
  </section>

  <section className="sectionThing projectsStack" id="projects">
    <div className="projectSlide" style={{ background: "#0c93a6" }}>
      <img className="projectImage" src={cargo} alt="Ride Sharing Platform" />
      <div className="projectText">
        <h1 className="projectTitle">Ride Sharing Platform</h1>
        <p className="projectDesc">
          Contributed across the full development lifecycle of a location-based ride-sharing platform, working in a Scrum environment to create user stories, design UI mockups in Figma, and collaborate using Git. Implemented full-stack features using Flask and SQLAlchemy, including user registration and authentication, profile and ride editing, location-based filtering, automated test cases, and deployment to AWS.
        </p>
      </div>
    </div>

    <div className="projectSlide" style={{ background: "#1f3b77" }}>
      <img className="projectImage" src={networkmonitor} alt="Project Two" />
      <div className="projectText">
        <h1 className="projectTitle">Network Monitor</h1>
        <p className="projectDesc">
          Designed and implemented web applications to track and graph router-level network performance. Leveraged Personal VPS and Cloud Infrastructure, Flask, and Plotly.
        </p>
      </div>
    </div>

    <div className="projectSlide" style={{ background: "#6b2cff" }}>
      <img className="projectImage" src={transformer} alt="Project Three" />
      <div className="projectText">
        <h1 className="projectTitle">Custom char-level Transformer (PyTorch)</h1>
        <p className="projectDesc">
          Built a small character-level language model with causal self-attention + a Transformer block; trained on a dad-jokes dataset and generated new text. Learned character encoding, embeddings, and attention.
        </p>
      </div>
    </div>

    <div className="projectSlide" style={{ background: "#e24498" }}>
      <img className="projectImage" src={knn} alt="Project Four" />
      <div className="projectText">
        <h1 className="projectTitle">Air Quality Prediction Model</h1>
        <p className="projectDesc">
          Collaborated in a group, cleaned data, and applied Machine Learning models using Scikit-learn to identify environmental factors that contribute to poor air quality. Team built regression (R² = 0.91) and KNN clustering (92.1% accuracy) models to predict air quality.
        </p>
      </div>
    </div>
  </section>

  <section className="sectionThing" id="resume">
    <div className="heroThing">
      <h1> Resume: </h1>
    </div>
    <div className="resumeStyleThing">
      <iframe src="/src/assets/resume.pdf" title="Resume" />
    </div>
  </section>

  <section className="sectionThing" id="contact">
    <div className="page">
      <div className="heroThing">
        <div style={{textAlign: 'center'}}>
          <h1> Contact: </h1>
        </div>
        <a href="tel:781-690-9802" style= {{ fontSize: "1.25rem", margin: "4px 0"}}> Phone: 781-690-9802</a> <br></br>
        <a href="mailto:jakeadepietro@outlook.com" style= {{ fontSize: "1.25rem", margin: "4px 0"}}> Email: jakeadepietro@outlook.com </a> <br></br>
        <a href="https://www.linkedin.com/in/jake-depietro" style= {{ fontSize: "1.25rem", margin: "4px 0"}}> LinkedIn: www.linkedin.com/in/jake-depietro </a> <br></br>
        </div>
      </div>
      
  </section>

  <Footer />
</>

  );
}
