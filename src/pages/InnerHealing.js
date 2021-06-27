import { useEffect, useState } from "react";
import Calendar from "../components/calendar/Calendar";
import TextBanner from "../components/content/TextContent/TextBanner";
import classes from "./InnerHealing.module.css";
import { useLocation } from "react-router-dom";
import { fetchHeader } from "../lib/fetchHeader";
import sanityClient from "../client/client";
import LoadingSpinner from '../components/ui/LoadingSpinner';

const InnerHealing = () => {
  const [header, setHeader] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const router = useLocation();

  const location = router.pathname.replace(/[^\w\s]/gi, "");

  const param = location.charAt(0).toUpperCase() + location.slice(1);

  useEffect(() => {
    setIsLoading(true);
    fetchHeader(sanityClient, param)
      .then((data) => {
        setHeader(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [param]);

  return (
    <>

      {header && (
        <TextBanner title={header[0].title} content={header[0].header} />
      )}
      <h2 className={classes.appointment}>
        Schedule an Appointment through Calendly
      </h2>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <Calendar />
    </>
  );
};

export default InnerHealing;
