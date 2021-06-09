import "./App.css";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { MdPhoneAndroid, MdEmail } from "react-icons/md";

function App() {
  return (
    <>
      <main id="main">
        <nav id="header">
          <div>
            <h1 id="title">Ashraf Azemi</h1>
          </div>
          <div class="nav">
            <a href="#welcome-section">
              <h1 class="nav-child">Profile</h1>
            </a>
            <a href="#projects">
              <h1 class="nav-child">Project</h1>
            </a>
            <a href="#contact">
              <h1 class="nav-child">Contact</h1>
            </a>
          </div>
        </nav>
        <section id="welcome-section">
          <h1 id="profile-title">Hey there! I am Ashraf</h1>
          <h3 id="profile-quote">a self-taught web developer</h3>
          <img
            id="profile-pic"
            src="https://scontent.fkul8-1.fna.fbcdn.net/v/t31.18172-8/13161912_10153859317843110_6677943647445087117_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeH3JXvZCM9BwYa7yXHXjgIX0iJxIxx6A8rSInEjHHoDypYtvD7HeFTZ5cobaWfC410&_nc_ohc=_iom4H810RMAX_b2aZN&_nc_ht=scontent.fkul8-1.fna&oh=4e02593c8b63b686a85be591e0e685fd&oe=60E1A62D"
            alt="ashraf"
          />
        </section>
        <section id="projects">
          <h1 id="portfolio-title">Portfolio</h1>
          <div id="portfolio" className="project-tile">
            <section class="img-container">
              <figure>
                <a href="https://codepen.io/jabawaki90/pen/abJVQLv">
                  <img
                    class="img-port"
                    src={process.env.PUBLIC_URL + "/image/img1.png"}
                    alt=""
                  />
                </a>
                <figcaption>Form</figcaption>
              </figure>
            </section>
            <section class="img-container">
              <figure>
                <a href="https://codepen.io/jabawaki90/pen/mdWqpyG">
                  <img
                    class="img-port"
                    src={process.env.PUBLIC_URL + "/image/img2.png"}
                    alt=""
                  />
                </a>
                <figcaption>Tribute Page</figcaption>
              </figure>
            </section>
            <section class="img-container">
              <figure>
                <a href="https://codepen.io/jabawaki90/pen/oNZpeWp">
                  <img
                    class="img-port"
                    src={process.env.PUBLIC_URL + "/image/img3.png"}
                    alt=""
                  />
                </a>
                <figcaption>Landing Page</figcaption>
              </figure>
            </section>
            <section class="img-container">
              <figure>
                <a href="https://codepen.io/jabawaki90/pen/dyvdaEE">
                  <img
                    class="img-port"
                    src={process.env.PUBLIC_URL + "/image/img4.png"}
                    alt=""
                  />
                </a>
                <figcaption>Documentation</figcaption>
              </figure>
            </section>
          </div>
        </section>
        <section id="contact">
          <h1 id="contact-title">Lets build together!</h1>
          <h6 id="quote">
            "Alone we can do so little; together we can do so much."
          </h6>
          <div className="icon-container">
            <section id="linkedin" className="social-media">
              <FaLinkedin className="icon" />
              <a href="https://www.linkedin.com/in/ashrafazemi/">
                <h3 className="label">LinkedIn</h3>
              </a>
            </section>
            <section id="facebook" className="social-media">
              <FaFacebook className="icon" />
              <a href="https://www.facebook.com/ashraf.azemi/">
                <h3 className="label">Facebook</h3>
              </a>
            </section>
            <section id="github" className="social-media">
              <FaGithub className="icon" />
              <a href="https://github.com/Jabawaki90">
                <h3 className="label">Github</h3>
              </a>
            </section>
            <section className="social-media">
              <MdEmail className="icon" />
              <a href="#footer-email">
                <h3 className="label">Email</h3>
              </a>
            </section>
            <section className="social-media">
              <MdPhoneAndroid className="icon" />
              <a href="#footer-tel">
                <h3 className="label">Call me</h3>
              </a>
            </section>
          </div>
        </section>
        <footer id="footer">
          <div className="left-side">
            <h3 id="footer-email" className="child">
              ashraf.chzm@gmail.com
            </h3>
            <h3 id="footer-tel" className="child">
              +6016 201 9424
            </h3>
          </div>
          <div className="right-side">
            <h3>©This page was built with React</h3>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
