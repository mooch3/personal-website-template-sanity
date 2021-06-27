import classes from "./TextBanner.module.css";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../../client/client";

const TextBanner = ({ title, content }) => {
  return (
    <div className={classes["text-banner"]}>
      <h1>{title}</h1>
      <BlockContent
        blocks={content}
        projectId={sanityClient.clientConfig.projectId}
        dataset={sanityClient.clientConfig.dataset}
      />
    </div>
  );
};

export default TextBanner;
