import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="center">
      <h2>No page found</h2>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
};
export default Error;
