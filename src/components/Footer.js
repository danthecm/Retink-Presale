import classes from "./Footer.module.css"
import logo from "./images/Logo.png"

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
                <div>
                    <p>Connect with Us</p>
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