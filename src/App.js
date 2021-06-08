import "./App.css";
import { FaLinkedin, FaFacebook, FaTwitter, FcCellPhone } from "react-icons/fa";

function App() {
  return (
    <>
      <main id="main">
        <header id="header">
          <div>
            <h1 id="title">Ashraf Azemi</h1>
          </div>
          <div class="nav">
            <h1 class="nav-child">Profile</h1>
            <h1 class="nav-child">Project</h1>
            <h1 class="nav-child">Contact</h1>
          </div>
        </header>
        <section id="welcome-section">
          <h1 id="profile-title">Hey there! I am Ashraf</h1>
          <h3>a self-taught web developer</h3>
          <img
            id="profile-pic"
            src="https://scontent.fkul8-1.fna.fbcdn.net/v/t31.18172-8/13161912_10153859317843110_6677943647445087117_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeH3JXvZCM9BwYa7yXHXjgIX0iJxIxx6A8rSInEjHHoDypYtvD7HeFTZ5cobaWfC410&_nc_ohc=_iom4H810RMAX_b2aZN&_nc_ht=scontent.fkul8-1.fna&oh=4e02593c8b63b686a85be591e0e685fd&oe=60E1A62D"
            alt="ashraf"
          />
        </section>
        <section id="projects">
          <h1 id="portfolio-title">Portfolio</h1>
          <div id="portfolio">
            <section class="img-container">
              <figure>
                <img
                  class="img-port"
                  src={process.env.PUBLIC_URL + "/image/img1.png"}
                  alt=""
                />
                <figcaption>Form</figcaption>
              </figure>
            </section>
            <section class="img-container">
              <figure>
                <img
                  class="img-port"
                  src={process.env.PUBLIC_URL + "/image/img2.png"}
                  alt=""
                />
                <figcaption>Tribute Page</figcaption>
              </figure>
            </section>
            <section class="img-container">
              <figure>
                <img
                  class="img-port"
                  src={process.env.PUBLIC_URL + "/image/img3.png"}
                  alt=""
                />
                <figcaption>Landing Page</figcaption>
              </figure>
            </section>
            <section class="img-container">
              <figure>
                <img
                  class="img-port"
                  src={process.env.PUBLIC_URL + "/image/img4.png"}
                  alt=""
                />
                <figcaption>Documentation</figcaption>
              </figure>
            </section>
          </div>
        </section>
        <section id="contact">
          <h1>Lets build together!</h1>
          <h6>"Alone we can do so little; together we can do so much."</h6>
          <div className="icon">
            <section class="social-media">
              <FaLinkedin class="icon " />
              <h3>LinkedIn</h3>
            </section>
            <section class="social-media">
              <FaFacebook class="icon " />
              <h3>Twitter</h3>
            </section>
          </div>
        </section>
        <footer id="footer">
          <h1>footer</h1>
        </footer>
      </main>
    </>
  );
}

export default App;
