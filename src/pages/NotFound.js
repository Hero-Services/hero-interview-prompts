import React from "react";
import { Link } from "react-router-dom";

// Style
import { Page, Title } from "../style/components/general.js";

const NotFound = () => {
  return (
    <Page className="not-found">
      <Title>404 Not Found</Title>
      <Link to="/">Go to homepage</Link>
    </Page>
  );
};

export default NotFound;