import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import newGif from "./assets/new.gif";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import header from "./assets/header.jpg";
import whatsappimage from "./assets/whatsappimage.jpg";
import campus1 from "./assets/campus1.jpg";
import campus2 from "./assets/campus2.jpg";
import campus3 from "./assets/campus3.jpg";
import campus4 from "./assets/campus4.jpg";
import ss3 from "./assets/ss3.jpg";
import ss4 from "./assets/ss4.jpg";
import ss5 from "./assets/ss5.jpg";
import { FaCircle } from "react-icons/fa6";

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./App.css";
// FAQ Categories
const faqCategories = [
  "General Queries",
  "Admission Related Queries",
  "VITEEE Related Queries",
  "VITEEE Eligibility Related Queries",
  "VITEEE Ranking Related Queries",
  "Payment Transaction related Queries",
];

const faqCategories2 = [
  "Slot Booking Related Queries",
  "Scholarship Related Queries",
  "Hostel Related Queries",
  "Academics Related Queries",
  "NRI/Foreign Students Admission Related Queries",
];

// FAQ Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: 50,
};

const faqListStyle = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
  width: 500,
  margin: 16,
  padding: 20,
};

const faqCategoryStyle = {
  padding: "15px 22px",
  fontSize:18,
  color: "#313840",
  borderBottom: "1px solid #eee",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const lastFaqCategoryStyle = {
  ...faqCategoryStyle,
  borderBottom: "none",
};

const pageTitleStyle = {
  fontSize: 48,
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 30,
  marginBottom: 30,
};

// FAQ Component
function FAQ() {
  return (
    <section id="faqs">
      <div style={pageTitleStyle}>Frequently Asked Questions</div>
      <div style={containerStyle}>
        <div style={faqListStyle}>
          {faqCategories.map((cat, i) => (
            <div
              style={i === faqCategories.length - 1 ? lastFaqCategoryStyle : faqCategoryStyle}
              key={cat}
            >
              {cat} <span style={{ fontSize: 24, color: "#888" }}>&#9662;</span>
            </div>
          ))}
        </div>
        <div style={faqListStyle}>
          {faqCategories2.map((cat, i) => (
            <div
              style={i === faqCategories2.length - 1 ? lastFaqCategoryStyle : faqCategoryStyle}
              key={cat}
            >
              {cat} <span style={{ fontSize: 24, color: "#888" }}>&#9662;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// Programmes Data
const programmes = {
  "VIT-Vellore": [

    "B.Tech. Computer Science and Engineering",
"B.Tech. Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
"B.Tech. Computer Science and Engineering (Blockchain)",
"B.Tech. Computer Science and Engineering (Cyber Security)",
"B.Tech. Computer Science and Engineering (Data Analytics)",
"B.Tech. Computer Science and Engineering (Software Engineering)",
"B.Tech. Computer Science and Business Systems",
"B.Tech. Electronics and Communication Engineering",
"B.Tech. Electronics and Communication Engineering (Embedded Systems)",
"B.Tech. Electronics and Communication Engineering (VLSI)",
"B.Tech. Mechanical Engineering",
"B.Tech. Mechanical Engineering (Automotive Design)",
"B.Tech. Mechanical Engineering (Robotics)"
],
  "VIT-Chennai": [
    "B.Tech. Computer Science and Engineering",
"B.Tech. Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
"B.Tech. Computer Science and Engineering (Blockchain)",
"B.Tech. Computer Science and Engineering (Cyber Security)",
"B.Tech. Computer Science and Engineering (Data Analytics)",
"B.Tech. Computer Science and Engineering (Software Engineering)",
"B.Tech. Computer Science and Business Systems",
"B.Tech. Electronics and Communication Engineering",
"B.Tech. Electronics and Communication Engineering (Embedded Systems)",
"B.Tech. Electronics and Communication Engineering (VLSI)",
"B.Tech. Mechanical Engineering",
"B.Tech. Mechanical Engineering (Automotive Design)",
"B.Tech. Mechanical Engineering (Robotics)"
  ],
  "VIT-AP": [
  "B.Tech. Computer Science and Engineering",
"B.Tech. Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
"B.Tech. Computer Science and Engineering (Blockchain)",
"B.Tech. Computer Science and Engineering (Cyber Security)",
"B.Tech. Computer Science and Engineering (Data Analytics)",
"B.Tech. Computer Science and Engineering (Software Engineering)",
"B.Tech. Computer Science and Business Systems",
"B.Tech. Electronics and Communication Engineering",
"B.Tech. Electronics and Communication Engineering (Embedded Systems)",
"B.Tech. Electronics and Communication Engineering (VLSI)",
"B.Tech. Mechanical Engineering",
"B.Tech. Mechanical Engineering (Automotive Design)",
"B.Tech. Mechanical Engineering (Robotics)"
  ],
  "VIT-Bhopal": [
    "B.Tech. Computer Science and Engineering",
"B.Tech. Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
"B.Tech. Computer Science and Engineering (Blockchain)",
"B.Tech. Computer Science and Engineering (Cyber Security)",
"B.Tech. Computer Science and Engineering (Data Analytics)",
"B.Tech. Computer Science and Engineering (Software Engineering)",
"B.Tech. Computer Science and Business Systems",
"B.Tech. Electronics and Communication Engineering",
"B.Tech. Electronics and Communication Engineering (Embedded Systems)",
"B.Tech. Electronics and Communication Engineering (VLSI)",
"B.Tech. Mechanical Engineering",
"B.Tech. Mechanical Engineering (Automotive Design)",
"B.Tech. Mechanical Engineering (Robotics)"
  ]
};

const tabOrder = ["VIT-Vellore", "VIT-Chennai", "VIT-AP", "VIT-Bhopal"];

function splitList(list) {
  const half = Math.ceil(list.length / 2);
  return [list.slice(0, half), list.slice(half)];
}

const App = () => {
  const images = [slide1, slide2, slide3, slide4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Programmes Offered tab state
  const [active, setActive] = useState(tabOrder[0]);
  const [left, right] = splitList(programmes[active]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Toggle navbar for mobile
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Scroll Animation for Text Content
  useEffect(() => {
    const handleScroll = () => {
      const textContent = document.querySelector(".text-content");
      if (textContent) {
        const position = textContent.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          textContent.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CAPTCHA Logic
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let newCaptcha = "";
    for (let i = 0; i < 5; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(newCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.toUpperCase() === captcha) {
      alert("Form submitted successfully!");
    } else {
      alert("Incorrect CAPTCHA! Please try again.");
      generateCaptcha();
      setUserInput("");
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="College Logo" className="logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleNavbar}>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
          <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
        </div>

        <nav className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <a href="#top">Home</a>
          <div className="dropdown">
            <a href="#about" className="dropbtn">About▼</a>
            <div className="dropdown-content">
              <a href="#VITEE">VITEEE</a>
              <a href="#application-process">ApplicationProcess</a>
            </div>
          </div>
          <a href="#programmes-offered">Programmes Offered</a>
          <a href="#admission-guidelines">Admission Guidelines</a>
          <a href="#campus-sec">Campuses</a>
          <a href="#important-date">Important Dates</a>
          <a href="#faqs">FAQ's</a>
          <a href="#contact">Contact</a>
          <a href="VIT/VITEEE_Prospectus.pdf" download>
            <button className="prospectus-btn">Prospectus</button>
          </a>
        </nav>
      </header>

      {/* Alert */}
      <div className="alert">
        <img src={newGif} alt="New Alert" className="alert-img" />
        <h2> VITEEE-2025 Results Live - Click Here</h2>
        <img src={newGif} alt="New Alert" className="alert-img" />
      </div>

      {/* Header Section */}
      <section className="header-section">
        <div className="header-overlay"></div>
        <img src={header} alt="Header Banner" className="header-img zoom-animation" />
        <div className="registration-container">
          <div className="overlay"></div>
          <div className="left-text">
            <h1>VIT ENGINEERING <br /> ENTRANCE <br /> EXAMINATION</h1>
            <h2>B.Tech Admission - 2025 </h2>
          </div>

          {/* Registration Form */}
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-buttons">
              <h1 className="login">REGISTRATION / <br />LOGIN </h1>
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign Up</button>
            </div>
            <input type="text" placeholder="Applicant's Full Name" required />
            <input type="date" required />
            <div className="form-row">
              <select required>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select required>
                <option>Select Residential Status</option>
                <option>Indian</option>
                <option>NRI</option>
                <option>Foreign</option>
              </select>
            </div>
            <div className="form-row">
              <input type="text" placeholder="Enter Mobile No." required />
              <input type="email" placeholder="Email ID" required />
            </div>
            {/* CAPTCHA */}
            <div className="form-row captcha-container">
              <div className="captcha-box">{captcha}</div>
              <button type="button" className="refresh-btn" onClick={generateCaptcha}>🔄</button>
              <input
                type="text"
                placeholder="Enter Verification Code"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                required
              />
            </div>
            <label className="checkbox">
              <input type="checkbox" required /> I authorize VIT to use my mobile no / e-mail id / connected social media platform <br />overiding DNS status.
            </label>
            <button type="submit" className="register-btn">Register</button>
          </form>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="slider">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
        </div>
       <div className="dots">
    {images.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? "active" : ""}`}
        onClick={() => setCurrentIndex(index)}
      ></span>
    ))}
  </div>
        <div id="VITEE" className="text-content">
          <h1>VIT Entrance <br /> Examination</h1>
          <p>Vellore Institute of Technology Engineering Entrance Examination (VITEEE) is conducted for admission to undergraduate engineering programmes in VIT group of Institutions. VITEEE will be conducted between 20 and 27 April 2025 (tentatively) at designated centres across India and abroad (No. of days will vary for test cities). The duration of the examination will be 2 hours and 30 minutes. Candidates can appear only once for VITEEE-2025. All the questions will be Multiple Choice Questions and one mark for the right answer and zero for the wrong answer. There is no negative marking for wrong answers. Those who score '0' in total will be declared as 'Not qualified' and will not be eligible to participate in the counselling process. There will be a total of 125 questions divided into the section Maths/Biology (40 questions), Physics (35 questions), Chemistry (35 questions), Aptitude (10 questions), and English (5 questions). The question paper will be in English only. The fee towards application and subsequent counselling is non-refundable. The method of Equi-percentile is adopted for the rank list preparation of VITEEE-Computer Based Examination.</p>
        </div>
      </section>

      {/* Programmes Offered Section */}
      <section id="programmes-offered">
        <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "sans-serif" }}>
          <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Programmes Offered</h1>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 66 }}>
            {tabOrder.map(tab => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                style={{
                  backgroundColor: active === tab ? "#13c0c8" : "#fff",
                  color: active === tab ? "#fff" : " #13c0c8",
                  border: "1.5px solid #13c0c8",
                   
                  borderRadius: 25,
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  padding: "12px 28px",
                  cursor: "pointer"
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 50 }}>
            <ul style={{ flex: 1, listStyle: "disc inside", fontSize: "1.1em", minHeight: 200 }}>
              {left.length === 0 && right.length === 0 && <li><em>(Not listed)</em></li>}
              {left.map((prog, idx) => <li key={idx}>{prog}</li>)}
            </ul>
            <ul style={{ flex: 1, listStyle: "disc inside", fontSize: "1.1em", minHeight: 200 }}>
              {right.map((prog, idx) => <li key={idx}>{prog}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section id="campus-sec" className="campus-section">
        <h1 className="campus-title">OUR CAMPUSES</h1>
        <div className="campus-container">
          <div className="campus-item">
            <div className="campus-image">
              <img src={campus1} alt="Campus 1" />
              <div className="overlay"></div>
            </div>
            <p className="campus-caption">VIT Chennai</p>
          </div>
          <div className="campus-item">
            <div className="campus-image">
              <img src={campus2} alt="Campus 2" />
              <div className="overlay"></div>
            </div>
            <p className="campus-caption">VIT Vellore</p>
          </div>
          <div className="campus-item">
            <div className="campus-image">
              <img src={campus3} alt="Campus 3" />
              <div className="overlay"></div>
            </div>
            <p className="campus-caption">VIT Bhopal</p>
          </div>
          <div className="campus-item">
            <div className="campus-image">
              <img src={campus4} alt="Campus 4" />
              <div className="overlay"></div>
            </div>
            <p className="campus-caption">VIT AP</p>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <div id="important-date" className="important-dates">
        <h2>Important Dates</h2>
        <div className="dates-container">
          <div className="date-box">
            <h3>
              April 7<sup>th</sup>, 2025
            </h3>
            <p>Last Date for Online Application</p>
            <span className="calendar-icon">📅</span>
          </div>
          <div className="date-box">
            <h3>
              April 20<sup>th</sup>-27<sup>th</sup>, 2025
            </h3>
            <p>Date of Examination (VITEEE- 2025)</p>
            <span className="calendar-icon">📅</span>
          </div>
          <div className="date-box">
            <h3>
              May 3<sup>rd</sup>, 2025
            </h3>
            <p>Result Declaration</p>
            <span className="calendar-icon">📅</span>
          </div>
          <div className="date-box">
            <h3>
              May 7<sup>th</sup>, 2025
            </h3>
            <p>Online Counselling</p>
            <span className="calendar-icon">📅</span>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <section className="credentials-section">
        <h2 className="credentials-title">Credentials</h2>
        <div className="credentials-container">
          <img src={ss3} alt="Credential 1" className="credential-img" />
          <img src={ss4} alt="Credential 2" className="credential-img" />
          <img src={ss5} alt="Credential 3" className="credential-img" />
        </div>
      </section>
<FAQ />
      {/* Contact Section */}
      <div id="contact" className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-item">
          <div className="icon email-icon"></div>
          <div className="contact-details">
            <h3>Email</h3>
            <p>btechapplication@vit.ac.in</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon phone-icon"></div>
          <div className="contact-details">
            <h3>Help Line Number</h3>
            <p>044-46277555</p>
            <p>Monday to Saturday (9.00 am to 5.00 pm)</p>
            <p>(Excluding public holidays)</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            <h2 className="footer-title">VITEEE 2025</h2>
            <div className="footer-social">
              <FaTwitter className="footer-icon" />
              <FaFacebook className="footer-icon" />
              <FaInstagram className="footer-icon" />
              <FaLinkedin className="footer-icon" />
              <FaCircle className="footer-icon" />
            </div>
            <div className="footer-alert">
              <span className="footer-alert-icon">⚠️</span>
              <strong> BEWARE OF VIT FAKE WEBSITES</strong>
            </div>
            <p className="footer-warning">
              We came to know that some fake websites are misusing the VIT name.
              Kindly be aware of illegal websites. Please visit only{" "}
              <a href="https://www.vit.ac.in">www.vit.ac.in</a> or{" "}
              <a href="https://viteee.vit.ac.in">https://viteee.vit.ac.in</a>{" "}
              for admissions.
            </p>
          </div>

          {/* Right Section - WhatsApp Image */}
          <div className="footer-right">
            <img
              src={whatsappimage}
              alt="WhatsApp Updates"
              className="footer-image"
            />
          </div>
        </div>

        <hr />
        <br />

        <div className="footer-copyright">
          <p>© Copyright VIT. All Rights Reserved</p>
          <p>
            Developed by <strong>Software Development Cell (SDC)</strong> |
            Designed by{" "}
            <strong>Centre for Technical Support (CTS)</strong>, VIT.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;