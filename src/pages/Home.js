import React from "react";
import dedent from "dedent";

// Components
import Challenge from "../components/Challenge.js";

// Style
import {ListItem, NumberedList, pad, Page, radius} from "../style/components/general.js";
import styled from "styled-components";

const Home = () => {
  const challenges = [
    {
      name: "Get Users",
      render: index => (
        <Challenge
          id={index}
          key={index}
          title="React Component - Get Users"
          prompt={
            <NumberedList>
              <ListItem>
                Please implement a Functional Component in React that gets all users from specified
                endpoint and displays:<br></br>
                <Highlight>Name, Email, and Phone</Highlight>
              </ListItem>
              <ListItem>
                Please use <Highlight>https://jsonplaceholder.typicode.com/users</Highlight> for
                your requests.
              </ListItem>
            </NumberedList>
          }
          template={dedent`
            /**
             * esversion 9
             * Hint: you will need the Fetch API and React.*
             */
            const Output = () => {
              return (
                <div>Your code here...</div>
              );
            }
          `}
          estimation={30}
        />
      )
    },
    {
      name: "Get Users",
      render: index => (
        <Challenge
          id={index}
          key={index}
          title="React Component - Generate Password Helper"
          prompt={
            <NumberedList>
              <ListItem>Generate and output a random password.</ListItem>
              <ListItem>Should be a minimum of 10 characters</ListItem>
              <ListItem>
                Bonus: custom length, optional characters and/or copy to clipboard
              </ListItem>
            </NumberedList>
          }
          template={dedent`
            /**
             * Password Generator
             */
            
             const MIN_RECOMMENDED_LENGTH = 10;
             const MAX_LEN = 50;
             
             const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
             
             const LOCASE_LETTERS = [
                 "a", "b", "c", "d", "e",
                 "f", "g", "h", "i", "j",
                 "k", "m", "n", "o", "p",
                 "q", "r", "s", "t", "u",
                 "v", "w", "x", "y", "z"
             ];
             
             const UPCASE_LETTERS = [
                 "A", "B", "C", "D", "E",
                 "F", "G", "H", "I", "J",
                 "K", "M", "N", "O", "P",
                 "Q", "R", "S", "T", "U",
                 "V", "W", "X", "Y", "Z"
             ];
             
             const SYMBOLS = [
                 "@", "#", "$", "%",
                 "=", ":", "?", ".",
                 "/", "|", "~", ">",
                 "*", "(", ")", "\'"
             ];

            const Output = () => {
              const [password, setPassword] = React.useState("");
              
              const generate = e => {
                e.preventDefault();
                // password logic here or define function
                setPassword("generated");
              };

              return (
                <form onSubmit={generate}>
                  <label htmlFor="password">Password Generator</label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px"
                  }}>
                    <input
                      type="text"
                      name="password"
                      placeholder="Password..."
                      value={password}
                      disabled
                      style={{
                        maxWidth: "150px",
                        marginRight: "5px"
                      }}
                    />
                    <button type="submit" onClick={generate}>Generate</button>
                  </div>
                </form>
              )
            };
          `}
          language="python"
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

// Style Overrides
const Highlight = styled.span`
  background: #f4f4f4;
  border-radius: ${radius};
  padding: 0 ${pad / 2}px;
`;

export default Home;
