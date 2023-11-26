import { FaqSimple } from "../../components/FAQs/Faqs";
import Features from "../../components/Features/Features";
import { HeaderMenu } from "../../components/Header/Header";
import Herobox from "../../components/Herobox/Herobox";
import Industries from "../../components/Industries/Industries";

const Home = () => {
  return (
    <>
      <div className="exp" >
        <HeaderMenu />
        <Herobox />
        <Features />
      </div>
      <Industries />
      <FaqSimple />
      Home
    </>
  );
};

export default Home;
