import TextBanner from "../components/content/TextContent/TextBanner";
import Banner from "../components/content/ImageContainers/Banner";
import TextContent from "../components/content/TextContent/TextContent";
import Image from "../components/content/ImageContainers/Image";
import Aurora from "../assets/images/aurora.jpg";
import Card from "../components/ui/Card";
import sanityClient from '../client/client';
import { useState, useEffect } from "react";

const Publications = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await sanityClient.fetch(
      `*[_type == "content" && page == "Publications"]{
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
    )
    console.log(fetchedData);
    setData(fetchedData);
  }
  try {
    fetchData();
  } catch (error) {
    console.log(error.message)
  }

  return () => setData(null);
  }, []);

  return (
    <>
      <Banner image={Aurora} alt="the aurora borealis" />
      <TextBanner
        title="Publications"
        content="It’s easy to live in denial, to think disasters won’t happen to you, to drink the normalcy bias Kool-Aid. But with those thoughts, you won’t prepare yourself, and then when—not if, but when—disaster strikes, you will be swimming in that denial river upstream without a paddle. Time is of the essence as the four horsemen of the apocalypse are running, and our time to prepare is almost over. Do something today."
      />
      {data && <Card>
        <Image image={data[0].mainImage.asset.url} alt="A book" />
        <TextContent
          header={data[0].title}
          content={data[0].body}
          noBtn={true}
        />
      </Card>}
    </>
  );
};

export default Publications;
