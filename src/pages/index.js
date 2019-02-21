import React, { useState } from "react";
import styled from "styled-components";

import type from "../shared/consts";
import { makePrimary, makeSecondary } from "../shared/helpers";

import {
  Layout,
  Icon,
  IconNormalButton,
  Label,
  IconLinkButton,
  LinkButtonOuter,
  LinkButtonInner,
  H1,
  P
} from "../components";
import { Panel, FlexCentered, NoBorder } from "../components/Mixins";

export default () => {
  const [settings, toggleSettings] = useState(false);
  const [theme, changeTheme] = useState(type.GREY);

  return (
    <Layout theme={theme}>
      <Section theme={makeSecondary(theme)}>
        <Content>
          <SettingsBar visible={settings}>
            <Separator theme={makePrimary(theme)} />
            <Square
              theme={makePrimary(type.BLACK)}
              onClick={() => changeTheme(type.BLACK)}
            />
            <Square
              theme={makePrimary(type.ORANGE)}
              onClick={() => changeTheme(type.ORANGE)}
            />
            <Square
              theme={makePrimary(type.GREY)}
              onClick={() => changeTheme(type.GREY)}
            />
          </SettingsBar>
          <IconNormalButton onClick={() => toggleSettings(!settings)}>
            <Label theme={theme}>Settings</Label>
            <Icon id={type.SETTINGS} theme={theme} />
          </IconNormalButton>
          <IconLinkButton
            href="https://www.linkedin.com/in/natalia-kulas"
            target="_blank"
            rel="noopener noreferrer"
            top={50}
          >
            <Label link theme={theme}>
              LinkedIn
            </Label>
            <Icon id={type.LINKEDIN} theme={theme} />
          </IconLinkButton>
          <IconLinkButton
            href="https://github.com/nataliakulas"
            target="_blank"
            rel="noopener noreferrer"
            top={100}
          >
            <Label link theme={theme}>
              Github
            </Label>
            <Icon id={type.GITHUB} theme={theme} />
          </IconLinkButton>
          <H1 theme={theme}>Hello!</H1>
          <P>
            If you are here, it means, that you are faster
            than&nbsp;I&nbsp;am!&nbsp;
            <Icon id={type.SMILE} theme={theme} />
          </P>
          <P theme={theme}>
            Right now, I'm <strong>upgrading</strong> this page and it can take
            a&nbsp;while.
          </P>
        </Content>
        <Content>
          <P theme={theme}>
            That is because I'm fully dedicated to <strong>developing</strong>
            &nbsp;real estate portal (with custom admin panel) and if I have
            some spare time, I'm <strong>mentoring</strong> junior front-end
            dev.
          </P>
          <Bin>
            <LinkButtonInner theme={theme} to="/project">
              Check out this cool project of yours
            </LinkButtonInner>
            <LinkButtonOuter
              theme={theme}
              href="https://stripefolio-deprecated.surge.sh/"
            >
              Show <i>currently-not-so-actual</i> portfolio
            </LinkButtonOuter>
          </Bin>
        </Content>
      </Section>
    </Layout>
  );
};

const Section = styled.div`
  ${Panel};
  box-shadow: 0 0 0 10px ${({ theme }) => theme};

  @media (min-width: 375px) {
    max-height: 500px;
    overflow-y: hidden;
  }

  @media (min-width: 568px) {
    overflow-y: scroll;
  }

  @media (min-width: 768px) {
    overflow-y: hidden;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 20px 20px 25px 20px;

  &:first-of-type {
    padding-right: 55px;
  }

  @media (min-width: 375px) {
    &:first-of-type {
      padding-right: 70px;
    }
  }

  @media (min-width: 414px) {
    &:first-of-type {
      padding-right: 80px;
    }
  }

  @media (min-width: 768px) {
    padding: 20px 50px 25px 50px;

    &:first-of-type {
      padding-right: 95px;
    }
  }
`;

const Bin = styled.div`
  ${FlexCentered};
  flex-direction: column;

  margin: 30px auto 10px auto;

  @media (min-width: 568px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    margin: 30px auto;
  }
`;

const SettingsBar = styled.div`
  ${NoBorder};

  width: 75px;
  height: 125px;

  position: absolute;
  top: 50px;
  right: 0;
  z-index: 100;
  transform: translateX(${({ visible }) => (visible ? 0 : 75)}px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  padding: 0 8px;

  transition: transform 0.3s ease;
`;

const Square = styled.div`
  min-width: 20px;
  min-height: 20px;

  background-color: ${({ theme }) => theme};
  margin: 7px;
  cursor: pointer;
`;

const Separator = styled.div`
  width: 35px;
  border-top: 2px solid ${({ theme }) => theme};
  margin-bottom: 10px;
`;
