import Team from './components/team';
import Hero from './components/hero';
import Community from './components/community';
import Partners from './components/partner';
import Faq from './components/faq';
import PopupWidget from './components/popupWidget';

export const metadata = {
  title: 'Home | 4MoBeers',
};

const Home = () => {
  return (
    <>
      <Hero />
      <Community />
      <Partners />
      <Faq />
      <Team />
      <PopupWidget />
    </>
  );
}

export default Home;
