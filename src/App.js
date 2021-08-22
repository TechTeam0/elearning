//importing of all component here..
import NavigationBar from './components/Navbar/NavigationBar';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import heroImgSection from './components/HeroImgSection/HeroImgSection';

// import css
import './App.css';

function App() {
  return (
    <>
      <NavigationBar />
      Hello World !!! I am App.js body
      <heroImgSection />
      <Courses />
      <Footer />
    </>
  );
}

export default App;
