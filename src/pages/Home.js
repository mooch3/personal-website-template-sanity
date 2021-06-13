import Banner from "../components/content/ImageContainers/Banner";
import Backsplash from "../assets/images/backsplash.jpg";
import TextBanner from "../components/content/TextContent/TextBanner";
import Card from "../components/ui/Card";
import TextContent from "../components/content/TextContent/TextContent";
import { Texts } from "../assets/text/text";
import Image from "../components/content/ImageContainers/Image";
import AboutText from "../components/content/TextContent/AboutText";

const Home = () => {
  const bookText = (
    <>
      <h2>
        <em>The Coming Apocalypse: How to Dress for Success</em>
      </h2>
      <p>
        In <em>How to Dress for Success</em>, Kevin Smith shows you step-by-step
        how to build a wardrobe over time by:{" "}
      </p>
      <ul>
        <li>Getting the silver bullet for your wardrobe</li>
        <li>Prepacking your wardrobe </li>
        <li>Preparing for the layered approach</li>
        <li>Having good summer wear, winter wear, shoes, and headwear</li>
        <li>Putting together a minimalist hygiene kit</li>
      </ul>
    </>
  );

  const innerHealingText = (
    <>
      <p>Are you stuck? Are you at the end of your rope?</p>
      <p>
        We all have hidden wounds, addictions, lies we partner with, vows we
        have made and spiritual oppression that prevent us from experiencing
        freedom and relief. Schedule a healing and deliverance session to break
        any chains that are preventing you from hearing and being healed and
        delivered by the Holy Spirit. A healing session is a private 1:1 prayer
        appointment for divine heart-healing and deliverance with a trained
        prayer minister. It is a transformative time for incredible healing and
        deliverance with Jesus who most often leads to a powerful breakthrough.
        You are not only prayed for, but prayed with. This bible-based
        Spirit-led session will guide you into an encounter with the Lord who
        will heal you and set you free and replace your wounds,
        lies/vows/ungodly beliefs with the His truth, inspired revelation and
        deliverance.
      </p>
    </>
  );

  return (
    <>
      <Banner image={Backsplash} alt="river rocks img" />
      <TextBanner
        title="Kevin Carter Smith, J.D."
        content="An experienced entrepreneur, author, lawyer and healer with a successful career in software management, a healing and deliverance ministry leader with a history of using the prophetic and Spirit led wisdom to solve and prepare for modern challenges."
      />
      <AboutText />
      {Texts.map((text) =>
        text.alt ? (
          <Card key={text.id}>
            <TextContent
              key={text.id}
              header={text.header}
              content={innerHealingText}
            />
            <Image key={text.id + "img"} image={text.img} />
          </Card>
        ) : (
          <Card key={text.id}>
            <Image key={text.id + "img"} image={text.img} />
            <TextContent
              key={text.id}
              header={text.header}
              content={bookText}
            />
          </Card>
        )
      )}
    </>
  );
};

export default Home;
