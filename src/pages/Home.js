import Banner from "../components/content/ImageContainers/Banner";
import Backsplash from "../assets/images/backsplash.jpg";
import TextBanner from "../components/content/TextContent/TextBanner";
import Card from "../components/ui/Card";
import TextContent from "../components/content/TextContent/TextContent";
import Image from "../components/content/ImageContainers/Image";
import AboutText from "../components/content/TextContent/AboutText";
import { useEffect, useState } from "react";
import sanityClient from "../client/client";

const Home = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityClient.fetch(
        `*[_type == "content" && page == "Home"]{
          body,
          title,
          _id,
          mainImage {
            asset -> {
              _id,
              url
            }
          }
      }`
      );
      setContent(data);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
    return () => setContent(null);
  }, []);

  return (
    <>
      <Banner image={Backsplash} alt="river rocks img" />
      <TextBanner
        title="Kevin Carter Smith, J.D."
        content="An experienced entrepreneur, author, lawyer and healer with a successful career in software management, a healing and deliverance ministry leader with a history of using the prophetic and Spirit led wisdom to solve and prepare for modern challenges."
      />
      <AboutText />
      {content && (
        <>
          <Card key={content[0]._id}>
            <TextContent header={content[0].title} content={content[0].body} />
            <Image
              key={content[0]._id}
              image={content[0].mainImage.asset.url}
            />
          </Card>
          <Card key={content[1]._id}>
            <Image
              key={content[1]._id}
              image={content[1].mainImage.asset.url}
            />
            <TextContent header={content[1].title} content={content[1].body} />
          </Card>
        </>
      )}
    </>
  );
};

export default Home;
