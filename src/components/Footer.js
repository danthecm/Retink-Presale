import classes from "./Footer.module.css"
import logo from "./images/Logo.png"
import facebook from "./images/social icons/facebook.png"
import instagram from "./images/social icons/instagram.png"
import linkedin from "./images/social icons/linkedin.png"
import pinterest from "./images/social icons/pinterest.png"
import twitter from "./images/social icons/twitter.png"
import youtube from "./images/social icons/youtube.png"

const Footer = () => {
    return (
        <footer>
            <section className={classes.primary_footer}>
                <div>
                    <img src={logo} alt="Retink Logo" />
                    <p>Product by Retink Media UG</p>
                    <p>Bonn, Germany</p>
                </div>
                <div>
                    <p>Get Early Acess</p>
                    <p>Provide Feedback</p>
                </div>
                <div className={classes.socials}>
                    <p>Connect with Us</p>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={youtube} alt="youtube" />
                    <img src={pinterest} alt="pinterest" />
                </div>
            </section>
            <section className={classes.secondary_footer}>
                <p>Copyright © 2021 Retink</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </section>
        </footer>
    )
}
export default Footer