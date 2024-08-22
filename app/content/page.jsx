import Header from "../components/header";
import Footer from "../components/footer";
import Styles from "./page.module.css";

function Content() {
    return(
        <>
            <Header />
            <h1 className={Styles.h1}>This is Content Page</h1>
            <Footer />
        </>
    )
}
export default Content;