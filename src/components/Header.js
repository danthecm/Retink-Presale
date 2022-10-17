import classes from "./Header.module.css"
import retink_avater from "./images/Retink-avatar.png"

const Header = () => {
    return (
        <header className={classes.header}>
            <section>

            </section>
            <img className={classes.avater_img} src={retink_avater} alt="retink-bot" />
        </header>
    )
}

export default Header