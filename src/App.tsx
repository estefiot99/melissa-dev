import './styles/global.less';
import Hero from './sections/Hero/Hero';
import TechStack from './sections/TechStack/TechStack';
import Products from './sections/Products/Products';
import AboutMe from './sections/AboutMe/AboutMe';
import WorkExperience from './sections/WorkExperience/WorkExperience';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <main>
      <Hero></Hero>
      <TechStack></TechStack>
      <div className="section-line"></div>
      <Products></Products>
      <div className="section-line"></div>
      <AboutMe></AboutMe>
      <WorkExperience></WorkExperience>
      <Footer></Footer>
    </main>
  );
}

export default App;
