import TextBanner from "../components/content/TextContent/TextBanner";
import Banner from "../components/content/ImageContainers/Banner";
import TextContent from "../components/content/TextContent/TextContent";
import Image from "../components/content/ImageContainers/Image";
import Rainier from "../assets/images/rainier.jpg";
import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import sanityClient from "../client/client";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await sanityClient.fetch(
        `*[_type == "content" && page == "About"]{
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
      console.log(fetchedData);
      setData(fetchedData);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error.message);
    }

    return () => setData(null);
  }, []);

  return (
    <>
      <Banner image={Rainier} alt="picture of rainier mountain" />
      <TextBanner
        title="Kevin Smith"
        content="With a degree in chemistry and a passion for emergency preparedness, Kevin Smith has tested clothing that combines metals with science to protect the wearer from viruses, bacteria, and rough terrain. He tested the clothing in all climates, hiking and camping in six continents. Impressed with all their functionality, he has felt inspired to help others build an essential emergency preparedness wardrobe."
      />
      {data && (
        <>
          <Card>
            {data[0].mainImage && <Image image={data[0].mainImage.asset.url} />}
            <TextContent
              header={data[0].title}
              content={data[0].body}
              noBtn={true}
            />
          </Card>
          <Card>
            <TextContent
              header={data[1].title}
              content={data[1].body}
              noBtn={true}
            />
            <Image image={data[1].mainImage.asset.url} />
          </Card>
        </>
      )}
    </>
  );
};

export default About;
