import classes from "./AboutText.module.css";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../../client/client";

const AboutText = ({ title, content }) => {
  return (
    <div className={classes.container}>
      <div className={classes.about}>
        <h1>{title}</h1>
        <BlockContent
          blocks={content}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
};

export default AboutText;
