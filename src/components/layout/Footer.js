import classes from "./Footer.module.css";
import Logo from "../layout/logo/Logo";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>Copyright © 2021 • Kevin Carter Smith</p>
      <Logo />
      <h3>
        Connect with me on{" "}
        <a href="https://www.facebook.com/profile.php?id=100034470851896">
          Facebook
        </a>{" "}
        and{" "}
        <a href="https://www.linkedin.com/in/kevin-smith-5990757/">LinkedIn</a>
      </h3>
      
    </div>
  );
};

export default Footer;
