import React, {useState, useEffect, useRef} from "react";
import AceEditor from "react-ace";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

// Style
import {border, Button, colors, Heading, pad, radius} from "../style/components/general";
import {flex} from "../style/components/mixins";
import {voice} from "../style/components/typography";

const Challenge = ({id, title, prompt, estimation, template, language}) => {
  const [showEstimate, setShowEstimate] = useState(false);
  const [defaultCode, setDefaultCode] = useState(null);
  const [code, setCode] = useState(null);

  const rendered = useRef(null);

  const handleOutput = code => {
    // store in local storage
    localStorage.setItem("code", code);
    setCode(code);
  };

  useEffect(() => {
    const saved = localStorage.getItem("code");
    setDefaultCode(saved ? saved : template);
  }, []);

  const renderCode = () => {
    const iframe = rendered.current;
    const document = iframe.contentDocument;
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel">
          ${code}
          ReactDOM.render(<Output />, document.querySelector('#root'));
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  return (
    defaultCode && (
      <>
        {estimation && (
          <Estimation type="button" onClick={() => setShowEstimate(!showEstimate)}>
            Estimation: <Estimate showEstimate={showEstimate}>{estimation} min</Estimate>
          </Estimation>
        )}
        <Heading>
          Challenge {id}: {title}
        </Heading>
        <Prompt>{prompt}</Prompt>
        <Wrapper>
          <Editor>
            <AceEditor
              name="problem-1-sign-in"
              mode={language}
              theme="monokai"
              tabSize={2}
              width="100%"
              onChange={handleOutput}
              editorProps={{$blockScrolling: true}}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
              }}
              defaultValue={defaultCode}
            />
          </Editor>
          <Output>
            <Content>
              <Button type="button" onClick={renderCode}>
                Render
              </Button>
              <iframe ref={rendered} />
            </Content>
          </Output>
        </Wrapper>
      </>
    )
  );
};

Challenge.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  prompt: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  estimation: PropTypes.number,
  template: PropTypes.string,
  language: PropTypes.string
};

Challenge.defaultProps = {
  estimation: null,
  template: null,
  language: "javascript"
};

// Style Overrides
const Wrapper = styled.section`
  width: 100%;
  margin-top: ${pad * 2}px;
  ${flex("row", "wrap", "center", "space-between")};
`;

const Prompt = styled.div`
  margin-bottom: ${pad}px;
`;

const Estimation = styled.button`
  width: auto;
  background: ${colors.green};
  border-radius: 20px;
  padding: 0 ${pad}px;
  color: ${colors.white};
  ${voice.quiet};
`;

const Estimate = styled.span`
  ${props =>
    props.showEstimate
      ? css`
          color: ${colors.white};
        `
      : css`
          color: transparent;
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
        `}
`;

const Editor = styled.div`
  width: 65%;
  border-radius: ${radius};
  overflow: hidden;
`;

const Output = styled.div`
  width: 35%;
  padding-left: ${pad}px;
`;

const Content = styled.div`
  height: 100%;
  padding: ${pad}px;
  border: ${border} solid ${colors.green};
  border-radius: ${radius};
`;

export default Challenge;
