import TextBanner from "../components/content/TextContent/TextBanner";
import Banner from "../components/content/ImageContainers/Banner";
import TextContent from "../components/content/TextContent/TextContent";
import Image from "../components/content/ImageContainers/Image";
import Rainier from "../assets/images/rainier.jpg";
import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import sanityClient from "../client/client";
import { fetchData } from "../lib/fetchData";
import { useLocation } from "react-router-dom";
import { fetchHeader } from "../lib/fetchHeader";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const About = () => {
  const [content, setContent] = useState(null);
  const [about, setAbout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useLocation();
  const location = router.pathname.replace(/[^\w\s]/gi, "");
  const param = location.charAt(0).toUpperCase() + location.slice(1);

  // useEffect(() => {

  // }, [param]);

  useEffect(() => {
    setIsLoading(true);

    fetchHeader(sanityClient, param)
      .then((data) => {
        setAbout(data);
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
      setAbout(null);
      setContent(null);
    };
  }, [param]);

  return (
    <>
      <Banner image={Rainier} alt="picture of rainier mountain" />
      {about && <TextBanner title={about[0].title} content={about[0].header} />}
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
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

export default About;
