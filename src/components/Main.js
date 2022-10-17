import classes from "./Main.module.css";
import video_img from "./images/video_player.png";
import ai_img from "./images/artificial-intelligence-svgrepo-com.png";
import upload_maintain_img from "./images/upload_maintain.png";
import information_img from "./images/information_img.png";
import receive_img from "./images/direct-customer-svgrepo-com.png";
import publish_img from "./images/publish_img.png";

const Main = () => {
  return (
    <main>
      <section>
        <h2>EXPLAINER VIDEO</h2>
        <img src={video_img} alt="video_img" />
      </section>
      <section className={classes.cards}>
        <div className={classes.card}>
          <img src={ai_img} alt="ai_image" />
          <h4>MakeAI-assisted Content Choices</h4>
          <p>
            Access and Order from an extensive catalogue in any language and on
            your budget’s terms. If unsure, our AI guides you to the best.u
          </p>
        </div>

        <div className={classes.card}>
          <img src={upload_maintain_img} alt="ai_image" />
          <h4>Upload and Maintain your Brand Identity</h4>
          <p>
            Add your preferences and brand assets to ensure the contents is
            consistent with your brand identity. No brand asset? We can make for
            you!
          </p>
        </div>

        <div className={classes.card}>
          <img src={information_img} alt="ai_image" />
          <h4>Be informed as we create</h4>
          <p>
            Your details are translated and sent to the AI, FP, or both (per
            your choice) as you relax and receive continuous updates.
          </p>
        </div>

        <div className={classes.card}>
          <img src={receive_img} alt="ai_image" />
          <h4>Receive and Review</h4>
          <p>
            The finished content is delivered and you can make corrections that
            we will effect to satisfy your requirements.
          </p>
        </div>

        <div className={classes.card}>
          <img src={publish_img} alt="ai_image" />
          <h4>Publish and Monitor your contents’ progress</h4>
          <p>
            The finished content is delivered and you can make corrections that
            we will effect to satisfy your requirements.
          </p>
        </div>
      </section>
      <h3>Transform your Creation Process</h3>
      <p>
        With a new approach toordering content, you can now stop juggling
        multiple documents and meetings and start publishing content faster and
        on demand
      </p>
      <h3>Activate your business growth with RetinkContent.</h3>
      <p>
        Save time and maintain your brand identity within your budget range or
        sign up for affordable plans and still access multiple content services
        like:
      </p>
    </main>
  );
};
export default Main;
