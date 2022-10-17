import classes from "./Header.module.css"
import retink_avater from "./images/Retink-avatar.png"
import logo from "./images/Logo.png"

const Header = () => {
    return (
        <header className={classes.header}>
            <section>
                <img src={logo} alt="retink_logo" />
            </section>
            <img className={classes.avater_img} src={retink_avater} alt="retink-bot" />
        </header>
    )
}

export default Header