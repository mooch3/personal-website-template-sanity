import { NavLink } from "react-router-dom";
import classes from "./TextContent.module.css";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../../client/client";

const TextContent = (props) => {
  return (
    <div className={classes["text-content"]}>
      <h1>{props.header}</h1>
      <div>
        <BlockContent
          blocks={props.content}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
      {!props.noBtn && (
        <NavLink
          to={`/${
            props.header === "Inner Healing"
              ? "inner-healing"
              : props.header.toLowerCase()
          }`}
          className={classes.btn}
        >
          {props.header}
        </NavLink>
      )}
    </div>
  );
};

export default TextContent;
