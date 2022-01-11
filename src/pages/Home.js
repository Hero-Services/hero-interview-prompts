import React from "react";
import dedent from "dedent";

// Components
import Challenge from "../components/Challenge.js";

// Style
import {Page} from "../style/components/general.js";

const Home = () => {
  const challenges = [
    {
      name: "Sign-in Implementation",
      render: index => (
        <Challenge
          id={index}
          key={index}
          title="Sign-in Implementation"
          prompt={<p>Please implement a sign in form using a Functional Component in React.</p>}
          template={dedent`
            /**
             * 
             * Constants:
             *  - Endpoint: "https://stage-api.hero-services.com:5000/api/v1"
             */
            const Output = () => {
              return (
                <form>Your code here...</form>
              );
            }
          `}
          estimation={30}
        />
      )
    }
  ];

  return (
    <Page className="home">
      {challenges.map((challenge, index) => challenge.render(index + 1))}
    </Page>
  );
};

export default Home;
