import classes from "./Header.module.css";
import retink_avater from "./images/Retink-avatar.png";
import logo from "./images/Logo.png";

const Header = () => {
  return (
    <header data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
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
          data-aos-duration="700">Get Advanced AI </h1>
        <h1
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="1700"
          data-aos-duration="700">
          + Expert Created <span className={classes.text_logo}>Logos</span>
        </h1>
        <p className={classes.intro_p}>
          Boost your sales{" "}
          <span className={classes.highlighted}>10x faster</span> with content
          customized by our unique partnership of{" "}
          <span className={classes.highlighted}>
            human creativity and AI optimization
          </span>
        </p>
        <h2>Sign Up For The BETA!</h2>
        <p className={classes.example_text}>
          <span>Business Name</span> would like a beta invite sent to{" "}
          <span>@email address</span> when it’s ready!
        </p>
        <div className={classes.cta_btns}>
          <button>Notify me</button>
          <button>Sign up as a freelance partner</button>
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
