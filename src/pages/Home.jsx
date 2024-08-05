import { FaBullseye, FaMapMarkedAlt, FaMagic, FaStar } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Travel from "./travel.png";
import Dest_1 from "./Dest-1.jpg";
import Dest_2 from "./Dest-2.jpg";
import Dest_3 from "./Dest-3.jpg";
import Dest_4 from "./Dest-4.jpg";
import Dest_5 from "./Dest-5.jpg";
import Dest_6 from "./Dest-6.jpg";
import logo from "./logo-1.png";
import { Link } from "react-router-dom";
function Home() {
  const excitements = [
    {
      icon: "🧗‍♀️",
      title: "Hiking",
      description: "Climbing the tallest mountain",
    },
    {
      icon: "🏄‍♀️",
      title: "Surfing",
      description: "Surfing is the next best thing to have",
    },
    {
      icon: "🪂",
      title: "Parachuting",
      description: "It feels more like flying than falling",
    },
  ];
  const popularVisits = [
    {
      img: Dest_1,
      title: "India Gate",
      wikipediaUrl:"https://en.wikipedia.org/wiki/India_Gate",
      description:
        "At the centre of New Delhi stands the 42 m high India Gate, an Arc-de-Triomphe like archway in the middle of a crossroad.The India Gate was part of the work of the Imperial War Graves Commission (IWGC), which came into existence in December 1917 under the British rule for building war graves and memorials to soldiers who were killed in the First World War.",
    },
    {
      img: Dest_2,
      title: "Taj Mahal",
      wikipediaUrl:"https://en.wikipedia.org/wiki/Taj_Mahal",
      description:
        "Entrusted to a board-of-architects by the Emperor Shah Jahan, the construction of the Taj Complex began about 1631 AD. The principal mausoleum was completed in 1648 AD by employing thousands of artisans and craftsmen, whereas, the outlying buildings and gardens were finished five years later in 1653 AD.",
    },
    {
      img: Dest_3,
      title: "Statue Of Unity",
      wikipediaUrl:"https://en.wikipedia.org/wiki/Statue_of_Unity",
      description:
        "The statue has been built as an ode to the Iron Man of India, Sardar Vallabhbhai Patel, the first home minister of independent India. He was responsible for uniting all 562 princely states of the country to build the Republic of India.",
    },
    {
      img: Dest_4,
      title: "Somnath Temple",
      wikipediaUrl:"https://en.wikipedia.org/wiki/Somnath_temple",
      description:
        "Dedicated to Lord Shiva, the Somnath Temple is one of the most important spiritual sites in the Hindu circuit. Believed to be the first of the 12 jyotirlingas",
    },
    {
      img: Dest_5,
      title: "Golden Temple",
      wikipediaUrl:"https://en.wikipedia.org/wiki/Golden_Temple",
      description:
        "The Golden Temple Amritsar India (Sri Darbar Sahib Amritsar) is not only a central religious place of the Sikhs, but also a symbol of human brotherhood and equality. Everybody, irrespective of cast, creed or race can seek spiritual solace and religious fulfilment without any hindrance. It also represents the distinct identity, glory and heritage of the Sikhs.",
    },
    {
      img: Dest_6,
      title: "Mysore Palace",
      wikipediaUrl:"https://en.wikipedia.org/wiki/Mysore_Palace",
      description:
        "The Palace of Mysore (also known as the Amba Vilas Palace) is a historical palace in the city of Mysore in Karnataka. Designed by the English Architect, Henry Irwin, the Mysore Palace dominates the skyline of Mysore.",
    },
  ];
  const testimonials = [
    {
      name: "Sarah K.",
      text: "TravelGenie made my trip planning so easy and enjoyable. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      name: "Michael B.",
      text: "Amazing app with great features. Helped me stay within budget and explore new places.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4,
    },
    {
      name: "Emily R.",
      text: "A fantastic tool for travelers. It curated the perfect itinerary for my vacation.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
    },
  ];

  return (
    <>
      <div className="first-sec">
        <div className="hero-content">
          <h1>Find your dream <br/> destinations 📷</h1>
          <p>
            Learn about tourism, and you will be amazed by all of the
            experiences you can find.
          </p>
          <div className="cta-buttons">
            <button className="plan-trip">
              <Link className=" plan-trip-content"to={"/planTrip"} style={{ color: "white" }}>
                Plan a Trip &gt;
              </Link>
            </button>
         
          </div>
        </div>
        <div className="hero-image">
          <img src={Travel} alt="Happy traveler" />
        </div>
        <div className="excitement-list">
          <div className="excitement-list-content">
            <h3>Why you are most excited ?</h3>
            <ul>
              {excitements.map((item, index) => (
                <li key={index}>
                  <span className="icon">{item.icon}</span>
                  <span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="second-sec">
        <center>
          <h1>Popular Destination</h1>
        </center>
        <div className="popular-dest">
          {popularVisits.map((place, idx) => (
            <a href={place.wikipediaUrl}   key={idx}>
            <div className="container-place-data" key={idx} >
             
              <img src={place.img} />
              <div className="place-data-style">
                <h2 className="place-data-title">{place.title}</h2>

                <p className="place-data-desc">{place.description}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
        <div id="third" className="third-sec">
          <section className="about-us">
            <h2>About Us</h2>
            <div className="cards">
              <div className="card">
                <FaBullseye className="icon" />
                <h3>Our Mission</h3>
                <p>
                  Our mission is to help you discover the maximum number of
                  exciting destinations and activities within your specified
                  budget.
                </p>
              </div>
              <div className="card">
                <FaMapMarkedAlt className="icon" />
                <h3>What We Offer</h3>
                <p>
                  Personalized Itineraries, Budget Optimization, Comprehensive
                  Destinations.
                </p>
              </div>
              <div className="card">
                <FaMagic className="icon" />
                <h3>Why Choose Us?</h3>
                <p>
                  AI-Powered Efficiency, User-Centric Design, Unmatched
                  Expertise.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="fourth-sec">
          <div className="testimonials">
            <center>
              <h2>Testimonials</h2>
            </center>
            <div className="testimonial-cards">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="avatar"
                  />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <p className="author">- {testimonial.name}</p>
                  <div className="rating">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fifth-sec">
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-logo">
                <img src={logo} alt="TravelGenie Logo" className="logo" />
                <p className="tagline">
                  Explore More, Spend Less with TravelGenie
                </p>
              </div>
              <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#services">Popular Places</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>123 Travel Street, Adventure City, TA 45678</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@travelgenie.com</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 TravelGenie. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
