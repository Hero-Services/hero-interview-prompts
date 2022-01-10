import styled, { keyframes } from "styled-components";
import { voice } from "./typography.js";
import { breakpoint } from "./breakpoints.js";
import { flex, z } from "./mixins.js";
import { cross, triangle } from "./shapes.js";

// Layout
export const pad = 10;
export const radius = "5px";

// Colors
export const colors = {
  black: "#000",
  white: "#fff",
  gray: "#f4f4f4",
  green: "green"
};

// Components
export const Page = styled.section`
  padding: ${pad*2}px ${pad}px 0;
`;

export const Title = styled.h1`
  margin-bottom: ${pad*2}px;
  ${voice.loud}
`;

export const Heading = styled.h2`
  margin-bottom: ${pad}px;
  ${voice.strong}
`;

export const Text = styled.p`${voice.normal}`;

export const CenterText = styled(Text)`
  text-align: center;
`;

export const Small = styled.span`${voice.quiet}`;

export const List = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
`;

export const ListItem = styled.li`
  text-decoration: none;
  padding: 0 ${pad}px;
  font-size: ${voice.normal};
`;

export const Button = styled.button`
  padding: 0 ${pad}px;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  font-size: ${voice.normal};
  max-width: max-content;
`;

export const Form = styled.form`
  max-width: ${breakpoint.width[2]};
  margin: 0 auto;
  padding: ${pad};
  ${flex("row", "wrap", "center", "start")}
`;

export const SubForm = styled.form`
  margin: 0 auto;
  width: 100%;
  ${flex("row", "wrap", "center", "start")}
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: ${pad}px;
  ${flex("column", "wrap", "center", "start")}
`;

export const Label = styled.label`
  ${voice.normal};
  margin-top: ${pad}px;
  line-height: 1.5;
`;

export const Input = styled.input`
  margin: ${pad}px 0;
  padding: ${pad/2}px ${pad}px;
  border: 1px solid ${colors.black};
  border-radius: ${radius};

  &[type="text"],
  &[type="number"],
  &[type="date"] {
    min-width: 200px;
  }
`;

export const Block = styled.textarea`
  margin: ${pad}px 0;
`;

export const ArrowDown = styled.button`
  width: fit-content;
  margin-left: ${pad/2}px;
  display: flex;
  align-items: center;
  ${triangle(pad/2, colors.black, "down")}
`;

export const TableWrapper = styled.section`
  width: 100%;
  overflow-x: scroll;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TitleRow = styled.tr`
  padding: ${pad}px;
  background: ${colors.gray};
`;

export const Row = styled.tr`
  padding: ${pad*2}px;
`;

export const TitleCell = styled.th`
  padding: ${pad}px;
  text-align: left;
`;

export const Cell = styled.td`
  padding: ${pad}px;
  text-align: left;
  position: relative;
`;

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);

  &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: 0 auto;
      width: 25px;
      height: 25px;
      border-top: ${radius} solid rgba(255, 255, 255, 0.5);
      border-right: ${radius} solid rgba(255, 255, 255, 0.5);
      border-bottom: ${radius} solid rgba(255, 255, 255, 0.5);
      border-left: ${radius} solid #ffffff;
      border-radius: 50%;
      animation: ${rotate} 1s infinite linear;
  }
`;

export const ModalContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  ${flex("row", "nowrap", "center", "center")}
  z-index: ${z("peak")};
`;

export const ModalContent = styled.div`
  max-width: ${breakpoint.width[3]};
  background: ${colors.white};
  padding: ${pad}px;
`;

export const CloseButton = styled.button`
  position: relative;
  padding: ${pad}px;
  width: fit-content;
  ${cross};
`;

export const CheckWrapper = styled.label`
  display: inline-flex;
  align-items: start;
  margin-top: ${pad}px;
`;

export const CheckInput = styled(Input)`
  margin: ${pad/2}px ${pad}px ${pad/2}px 0;
`;

export const Success = styled.p`
  ${voice.strong};
  color: ${colors.green};
`;

export const Error = styled.p`
  ${voice.strong};
  color: ${colors.red};
`;