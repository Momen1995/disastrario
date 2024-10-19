import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>Oops! page not found</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default ErrorPage;
