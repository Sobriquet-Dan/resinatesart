import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './Home.css'
const Home = () => {
  return(
      <>
        <Header/>
        <section className={'body-content'}>
            <h1>There's no room for doubt in art.<br/> -N.G.</h1>
        </section>
        <Footer/>
      </>
  )
}
export default Home;