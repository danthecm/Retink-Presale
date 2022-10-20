import classes from "./Header.module.css";
import retink_avater from "./images/Retink-avatar.png";
import logo from "./images/Logo.png";

const Header = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
    >
      <section>
        <img
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos-duration="1000"
          className={classes.logo}
          src={logo}
          alt="retink_logo"
        />
        <h1
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          Get Advanced AI{" "}
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          + Expert Created <span className={classes.text_logo}>Logos</span>
        </h1>
        <p
          data-aos="flip-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="1200"
          data-aos-duration="1200"
          className={classes.intro_p}
        >
          Boost your sales{" "}
          <span className={classes.highlighted}>10x faster</span> with content
          customized by our unique partnership of{" "}
          <span className={classes.highlighted}>
            human creativity and AI optimization
          </span>
        </p>
        <h2
          id="sign_up"
          data-aos="zoom-out"
          data-aos-easing="ease-in-out"
          data-aos-delay="1500"
          data-aos-duration="1200"
        >
          Sign Up For The BETA!
        </h2>
        <p
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="1700"
          data-aos-duration="1500"
          className={classes.example_text}
        >
          <span>Business Name</span> would like a beta invite sent to{" "}
          <span>@email address</span> when it’s ready!
        </p>
        <div className={classes.cta_btns}>
          <button
            data-aos="flip-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="2300"
            data-aos-duration="2000"
          >
            Notify me
          </button>
          <button
            data-aos="flip-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="2500"
            data-aos-duration="2200"
          >
            Sign up as a freelance partner
          </button>
        </div>
      </section>
      <img
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
        className={classes.avater_img}
        src={retink_avater}
        alt="retink-bot"
      />
    </header>
  );
};

export default Header;
