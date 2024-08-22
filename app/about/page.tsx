import Footer from "../components/footer";
import Header from "../components/header";
import Styles from "./page.module.css";

function About() {
    return (
        <>
            <Header/>
            <h1 className={Styles.h1}>This is about page</h1>
            <Footer/>
        </>
    );
}

export default About;