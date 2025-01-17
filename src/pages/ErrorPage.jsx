import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError(); // Get error info from React Router

  return (
    <div className="error-container">
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-message">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="error-details">{error.data}</p>
      <NavLink to="/">
        <button>Go Back to Home</button>
      </NavLink>
    </div>
  );
};
