import { Helmet } from "react-helmet";
import icon from "../assets/icons/shrimp-solid.svg";
function Header() {
  const DCONTENT =
    "This Website is for testing skills for backend and frontend"; //description context
  const KCONTENT = "CRUD,Fullstack";
  return (
    <Helmet>
      <link rel="icon" href={icon} />
      <title>CRUD</title>
      <meta name="description" content={DCONTENT} />
      <meta name="keywords" content={KCONTENT} /> {/* for searching */}
    </Helmet>
  );
}

export default Header;
