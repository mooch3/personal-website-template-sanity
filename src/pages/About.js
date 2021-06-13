import TextBanner from "../components/content/TextContent/TextBanner";
import Banner from "../components/content/ImageContainers/Banner";
import TextContent from "../components/content/TextContent/TextContent";
import Image from "../components/content/ImageContainers/Image";
import Rainier from "../assets/images/rainier.jpg";
import Preparation from "../assets/images/preparation.jpg";
import Card from "../components/ui/Card";

const About = () => {
  const aboutText = (
    <>
      <p>
        He is no stranger to helping others. As a member of the California Bar,
        he has represented homeless people, along with the Salvation Army, to
        help them get back on their feet and prosper and does missionary work
        all over the globe.
      </p>
      <p>
        While he enjoys helping people from all walks of life, he is most proud
        of the work he has done in his own home: raising two sons who are well
        prepared to take care of their families in any emergency. He has the
        heart of a father and believes his role is to provide, protect, bless,
        and establish his children’s identity. This desire to protect his
        children and you (by writing this book) flows from his heart. Although
        physical protection is important, this disaster protection needs to be
        achieved holistically, giving equal weight to the mental, emotional and
        spiritual components of disaster preparedness.
      </p>
    </>
  );

  const riskRewardText = (
    <>
      <p>What is your risk reward ratio? </p>
      <p>
        For this to occur one needs to decide their risk reward ratio for being
        vulnerable and truthful with themselves, their ministry, business and
        their significant relationships. This vulnerability and honesty will
        allow the Holy Spirit to transform you into a new creation enabling you
        to sense and follow the revelation that God has for you and your life
        via the Holy Spirit.
      </p>
      <p>
        As the world spins and wobbles out of control with raging pandemics,
        plagues, civil unrest, wars, alien disclosure (yes I said it), political
        insanity, famine, hyper-inflation, crypto currencies, silver, gold, war,
        earthquakes, volcanos and who knows what (fill in the blank): Are you
        and your business/ministry spiritually, mentally and emotionally
        prepared for what has come and is coming?
      </p>
      <p>
        We are here to help you prepare to survive, thrive and navigate the ‘new
        normal’ we find ourselves in. We believe that individuals and
        businesses/organizations need to be connected to the Holy Spirit to
        navigate these perilous times. Everything one does needs to be
        supernaturally Holy Spirit led and breathed.
      </p>
    </>
  );
  return (
    <>
      <Banner image={Rainier} alt="picture of rainier mountain" />
      <TextBanner
        title="Kevin Smith"
        content="With a degree in chemistry and a passion for emergency preparedness, Kevin Smith has tested clothing that combines metals with science to protect the wearer from viruses, bacteria, and rough terrain. He tested the clothing in all climates, hiking and camping in six continents. Impressed with all their functionality, he has felt inspired to help others build an essential emergency preparedness wardrobe."
      />
      <Card>
        <TextContent
          header="Prepare and Protect"
          content={aboutText}
          noBtn={true}
        />
        <Image image={Preparation} />
      </Card>
      <Card>
        <TextContent
          header="Risk and Reward"
          content={riskRewardText}
          noBtn={true}
        />
      </Card>
    </>
  );
};

export default About;
