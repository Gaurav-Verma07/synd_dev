import { FaqSimple } from '../../components/FAQs/Faqs';
import Features from '../../components/Features/Features';
import { HeaderMenu } from '../../components/Header/Header';
import Herobox from '../../components/Herobox/Herobox';
import Industries from '../../components/Industries/Industries';

const Home = () => {
  return (
    <>
      <HeaderMenu />
      <Herobox />
      <Features />
      <Industries />
      <FaqSimple />
      Home
    </>
  );
};

export default Home;
