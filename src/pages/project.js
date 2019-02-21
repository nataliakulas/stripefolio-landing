import React from "react";
import styled from "styled-components";
import color from "../shared/colors";
import type from "../shared/consts";
import { Layout, H1, P } from "../components";

export default () => {
  return (
    <Layout theme={type.GREY}>
      <Section>
        <P theme={type.GREY}>
          For the past 5 months I've been working on a <strong>SPA</strong>,
          dedicated for Rzeszow City <strong>real estate market</strong>.
        </P>
        <P theme={type.GREY}>
          It is my first freelance commercial project, and currently is in alpha
          stage. We are still developing some new features.
        </P>
        <P theme={type.GREY}>
          Below, you can see the <strong>live preview</strong>, but I bet, you
          would rather check it by yourself.
        </P>
        <Wrapper>
          <Preview src="https://www.cid.rzeszow.pl" />
          <a href="https://www.cid.rzeszow.pl">
            Centrum Inwestycji Deweloperskich
          </a>
        </Wrapper>
        <P theme={type.GREY}>
          Page is build in <strong>ReactJS</strong>, with some crucial
          libraries: <strong>Redux</strong> for state management,&#32;
          <strong>Styled-Components</strong> for styling, and&#32;
          <strong>React-Intl</strong> for multilanguage purposes and some other
          useful packages as well.
        </P>
        <P theme={type.GREY}>
          I've also <strong>designed it by myself</strong> (with a little bit of
          inspiration).
        </P>
        <P theme={type.GREY}>
          Additionally my client wanted to{" "}
          <strong>manually add investments</strong>, so I used basically the
          same stack (Redux-Saga instead of Thunk was better option in this
          case), <strong>Firebase</strong> as backend and created second app,
          which is custom made <strong>Admin Panel</strong>.
        </P>
        <P>
          <a href="mailto:nataliakulas@gmail.com">
            If you would like to test it, please contact me.
          </a>
        </P>
      </Section>
    </Layout>
  );
};

const Section = styled.div`
  width: 100%;
  height: 875px;

  background-color: ${color.white};
  margin: 20px auto;
  padding: 20px 20px 25px 20px;

  ${P} {
    margin-bottom: 15px;

    &:last-of-type {
      overflow: hidden;
    }
  }

  a {
    font-weight: 700;
    position: relative;
    text-decoration: none;
    color: ${color.turquoise};

    &:before,
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      background-color: ${color.turquoise};
    }

    &:before {
      display: none;
      top: -4px;
    }

    &:after {
      bottom: -2px;
    }

    &:hover :before {
      display: block;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
`;

const Preview = styled.iframe`
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: -350px;
  left: -690px;
  border: none;
  overflow: hidden;
  transform: scale(0.28);
  pointer-events: none;
`;
