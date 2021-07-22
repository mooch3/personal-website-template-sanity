import Banner from "../components/content/ImageContainers/Banner";
import Backsplash from "../assets/images/backsplash.jpg";
import TextBanner from "../components/content/TextContent/TextBanner";
import Card from "../components/ui/Card";
import TextContent from "../components/content/TextContent/TextContent";
import Image from "../components/content/ImageContainers/Image";
import AboutText from "../components/content/TextContent/AboutText";
import { useEffect, useState } from "react";
import { fetchData } from "../lib/fetchData";
import sanityClient from "../client/client";
import { fetchHeader } from "../lib/fetchHeader";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Home = () => {
  const [content, setContent] = useState(null);
  const [header, setHeader] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const param = "Home";

  useEffect(() => {
    setIsLoading(true);

    fetchHeader(sanityClient, param)
      .then((data) => {
        setHeader(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchData(sanityClient, param)
      .then((data) => {
        setContent(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });



    return () => {
      setHeader(null);
      setContent(null);
    };
  }, [param]);

  return (
    <>
      <Banner image={Backsplash} alt="river rocks" />
      {header && (
        <>
          <TextBanner title={header[0].title} content={header[0].header} />
          <AboutText title={header[0].subtitle} content={header[0].subheader} />
        </>
      )}
      {isLoading && <div className="centered"><LoadingSpinner /></div>}
      {content &&
        content.map((item, index) => (
          <Card
            key={item._id}
            style={index % 2 === 0 ? { flexDirection: "row-reverse" } : null}
          >
            <TextContent header={item.title} content={item.body} />
            {item.mainImage && (
              <Image key={item._id} image={item.mainImage.asset.url} />
            )}
          </Card>
        ))}
    </>
  );
};

export default Home;
