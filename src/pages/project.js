import React from "react";
import styled from "styled-components";

import color from "../shared/colors";
import type from "../shared/consts";

import { Layout, P } from "../components";
import { Bar, BoldNoDeco, Panel } from "../components/Mixins";

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
          Below, you can see the <strong>preview</strong>, but I&nbsp;bet, you
          would rather check it by yourself.
        </P>
        <Wrapper>
          <Preview src="https://www.cid.rzeszow.pl" />
          <a
            href="https://www.cid.rzeszow.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centrum Inwestycji Deweloperskich
          </a>
        </Wrapper>
        <P theme={type.GREY}>
          Page is build in <strong>ReactJS</strong>, with some crucial
          libraries: <strong>Redux</strong> for state management,&nbsp;
          <strong>Styled-Components</strong> for styling, and&nbsp;
          <strong>React-Intl</strong> for multilanguage purposes and some other
          useful packages as well.
        </P>
        <P theme={type.GREY}>
          I've also <strong>designed it by myself</strong> (with a&nbsp;little
          bit of inspiration).
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
            If you would like to test it, please contact&nbsp;me.
          </a>
        </P>
      </Section>
    </Layout>
  );
};

const Section = styled.div`
  ${Panel};

  padding: 20px 20px 25px 20px;

  ${P} {
    margin-bottom: 15px;

    &:last-of-type {
      overflow: hidden;
    }
  }

  a {
    ${BoldNoDeco};
    color: ${color.turquoise};

    &:before,
    &:after {
      ${Bar};
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
  height: 220px;
  position: relative;

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &:before,
    &:after {
      width: 250px;
    }

    &:before {
      top: -2px;
    }

    &:after {
      top: 47px;
      bottom: unset;
    }

    @media (min-width: 375px) {
      &:before,
      &:after {
        width: 275px;
      }

      &:after {
        top: 23px;
      }
    }
  }

  @media (min-width: 375px) {
    height: 240px;
  }

  @media (min-width: 768px) {
    height: 360px;
  }
`;

const Preview = styled.iframe`
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: -410px;
  left: -835px;
  transform: scale(0.13);

  background-color: ${color.grey};
  border: none;
  overflow: hidden;
  pointer-events: none;

  @media (min-width: 375px) {
    left: -815px;
    transform: scale(0.15);
  }

  @media (min-width: 414px) {
    left: -795px;
    transform: scale(0.17);
  }

  @media (min-width: 768px) {
    top: -350px;
    left: -690px;
    transform: scale(0.28);
  }
`;
