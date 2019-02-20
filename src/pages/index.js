import React, { useState } from "react";
import styled from "styled-components";

import color from "../shared/colors";
import type from "../shared/consts";
import { makePrimary } from "../shared/helpers";

import {
  Layout,
  Icon,
  Button,
  Label,
  LinkButton,
  LinkOuter,
  LinkInner,
  H1,
  P
} from "../components";

export default () => {
  const [settings, toggleSettings] = useState(false);
  const [theme, changeTheme] = useState(type.GREY);

  return (
    <Layout theme={theme}>
      <Wrapper>
        <Section>
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
            <Button onClick={() => toggleSettings(!settings)}>
              <Label theme={theme}>Settings</Label>
              <Icon id={type.SETTINGS} theme={theme} />
            </Button>
            <LinkButton
              href="https://www.linkedin.com/in/natalia-kulas"
              target="_blank"
              rel="noopener noreferrer"
              top={50}
            >
              <Label theme={theme}>LinkedIn</Label>
              <Icon id={type.LINKEDIN} theme={theme} />
            </LinkButton>
            <LinkButton
              href="https://github.com/nataliakulas"
              target="_blank"
              rel="noopener noreferrer"
              top={100}
            >
              <Label theme={theme}>Github</Label>
              <Icon id={type.GITHUB} theme={theme} />
            </LinkButton>
            <H1 theme={theme}>Hello!</H1>
            <P>
              If you are here, it means, that you are faster
              than&nbsp;I&nbsp;am!&nbsp;
              <Icon id={type.SMILE} theme={theme} />
            </P>
            <P theme={theme}>
              Right now, I'm <strong>upgrading</strong> this page and it can
              take a&nbsp;while.
            </P>
          </Content>
          <Content>
            <P theme={theme}>
              That is because I'm fully dedicated in <strong>developing</strong>
              &nbsp;real estate portal (with custom admin panel) and if I have
              some spare time, I'm <strong>mentoring</strong> junior front-end
              dev.
            </P>
            <Bin>
              <LinkInner theme={theme} to="/cid">
                Check out this cool project of yours
              </LinkInner>
              <LinkOuter theme={theme} href="https://stripefolio.surge.sh">
                Show <i>currently-not-so-actual</i> portfolio
              </LinkOuter>
            </Bin>
          </Content>
        </Section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 595px;
    margin: 0 auto;
  }
`;

const Section = styled.div`
  width: 100%;
  background-color: ${color.white};
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 20px auto;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto 10px auto;

  @media (min-width: 568px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    margin: 30px auto;
  }
`;

const SettingsBar = styled.div`
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

  background-color: ${color.white};

  padding: 0 8px;

  transition: transform 0.3s ease;
`;

const Square = styled.div`
  min-width: 20px;
  min-height: 20px;

  font-weight: 700;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme};
  margin: 7px;
  cursor: pointer;
`;

const Separator = styled.div`
  width: 35px;
  border-top: 2px solid ${({ theme }) => theme};
  margin-bottom: 10px;
`;
