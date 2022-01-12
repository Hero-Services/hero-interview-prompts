import React, {useState, useEffect, useRef} from "react";
import AceEditor from "react-ace";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";

import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

// Style
import {border, Button, colors, Heading, pad, radius} from "../style/components/general";
import {flex} from "../style/components/mixins";
import {voice} from "../style/components/typography";

const Challenge = ({id, title, prompt, estimation, template, language}) => {
  const [showEstimate, setShowEstimate] = useState(false);
  const [code, setCode] = useState(null);

  const rendered = useRef(null);

  const handleOutput = code => {
    // store in local storage
    if (!code) setCode(template);
    else setCode(code);
    localStorage.setItem(`challenge-${id}`, code);
  };

  useEffect(() => {
    const saved = localStorage.getItem(`challenge-${id}`);
    setCode(saved ? saved : template);
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
    code && (
      <Section>
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
              defaultValue={code}
            />
          </Editor>
          <Output>
            <Content>
              <Render type="button" onClick={renderCode}>
                Render
              </Render>
              <iframe ref={rendered} style={{width: "100%", height: "100%"}} />
            </Content>
          </Output>
        </Wrapper>
      </Section>
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
const Section = styled.section`
  margin: ${pad * 3}px ${pad}px;z
`;

const Wrapper = styled.div`
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
  position: relative;
  height: 100%;
  padding: ${pad * 3}px ${pad}px 0;
  border: ${border} solid ${colors.green};
  border-radius: ${radius};
`;

const Render = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${pad}px;
  ${voice.quiet};

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export default Challenge;
