import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! Something went Wrong</h1>
      if(error && <p>{error.data}</p>)
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>
    </div>
  );
};
