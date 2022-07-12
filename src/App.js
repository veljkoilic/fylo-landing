import './app.scss'
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { Badges } from './components/badges/Badges';
import { StayProductive } from './components/stay-productive/StayProductive';
import { Testimonials } from './components/testimonials/Testimonials';
import { EarlyAccess } from './components/early-access/EarlyAccess';
import { Footer } from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Badges/>
      <StayProductive/>
      <Testimonials/>
      <EarlyAccess/>
      <Footer/>
    </div>
  );
}

export default App;
