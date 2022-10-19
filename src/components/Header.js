import classes from "./Header.module.css";
import retink_avater from "./images/Retink-avatar.png";
import logo from "./images/Logo.png";

const Header = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <section>
        <img
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="1000"
          data-aos-duration="500"
          className={classes.logo}
          src={logo}
          alt="retink_logo"
        />
        <h1
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="1500"
          data-aos-duration="700"
        >
          Get Advanced AI{" "}
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="1700"
          data-aos-duration="700"
        >
          + Expert Created <span className={classes.text_logo}>Logos</span>
        </h1>
        <p
          data-aos="flip-up"
          data-aos-delay="2000"
          data-aos-duration="2000"
          className={classes.intro_p}
        >
          Boost your sales{" "}
          <span className={classes.highlighted}>10x faster</span> with content
          customized by our unique partnership of{" "}
          <span className={classes.highlighted}>
            human creativity and AI optimization
          </span>
        </p>
        <h2 data-aos="zoom-out" data-aos-delay="2800" data-aos-duration="1500">
          Sign Up For The BETA!
        </h2>
        <p
          data-aos="zoom-in-up"
          data-aos-delay="3000"
          data-aos-duration="1500"
          className={classes.example_text}
        >
          <span>Business Name</span> would like a beta invite sent to{" "}
          <span>@email address</span> when it’s ready!
        </p>
        <div className={classes.cta_btns}>
          <button
            data-aos="flip-up"
            data-aos-delay="3000"
            data-aos-duration="2000"
          >
            Notify me
          </button>
          <button
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-delay="3000"
            data-aos-duration="2000"
          >
            Sign up as a freelance partner
          </button>
        </div>
      </section>
      <img
        className={classes.avater_img}
        src={retink_avater}
        alt="retink-bot"
      />
    </header>
  );
};

export default Header;
