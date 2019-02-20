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

const IndexPage = () => {
  const [settings, toggleSettings] = useState(false);
  const [theme, changeTheme] = useState(type.GREY);

  return (
    <Layout theme={theme}>
      <Wrapper>
        <Section>
          <Content top>
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
            <SettingsButton onClick={() => toggleSettings(!settings)}>
              <Label theme={theme}>Settings</Label>
              <Icon id={type.SETTINGS} theme={theme} />
            </SettingsButton>
            <LinkedinButton
              href="https://www.linkedin.com/in/natalia-kulas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Label theme={theme}>LinkedIn</Label>
              <Icon id={type.LINKEDIN} theme={theme} />
            </LinkedinButton>
            <GithubButton
              href="https://github.com/nataliakulas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Label theme={theme}>Github</Label>
              <Icon id={type.GITHUB} theme={theme} />
            </GithubButton>
            <H1 theme={theme}>Hello!</H1>
            <Bin inline>
              <P>If you are here, it means, that you are faster than I am! </P>
              <Icon id={type.SMILE} theme={theme} />
            </Bin>
            <P theme={theme}>
              Right now, I'm <strong>upgrading</strong> this page and it can
              take a&nbsp;while.
            </P>
          </Content>
          <Content>
            <P theme={theme}>
              That is because I'm fully dedicated in developing real estate
              portal (with custom admin panel) and if I have some spare time,
              I'm <strong>mentoring</strong> junior frontend dev.
            </P>
            <Bin>
              <Subpage theme={theme} to="/cid">
                Check out this cool CID project
              </Subpage>
              <StripeFolio theme={theme} href="https://stripefolio.surge.sh">
                Show <i>currently-not-so-actual</i> portfolio
              </StripeFolio>
            </Bin>
          </Content>
        </Section>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

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
  max-height: 470px;
  background-color: ${color.white};
  overflow: hidden;
  flex: 1;

  @media (min-width: 375px) and (max-width: 413px) {
    max-height: 390px;
  }

  @media (min-width: 414px) and (max-width: 567px) {
    max-height: 365px;
  }

  @media (min-width: 568px) and (max-width: 666px) {
    max-height: 240px;
  }

  @media (min-width: 667px) and (max-width: 735px) {
    max-height: 295px;
  }

  @media (min-width: 736px) and (max-width: 767px) {
    max-height: 290px;
  }

  @media (min-width: 768px) {
    max-height: 400px;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 20px ${({ top }) => (top ? 95 : 50)}px 25px 50px;
`;

const LinkedinButton = styled(LinkButton)`
  color: ${color.turquoise};
  top: 50px;
`;

const GithubButton = styled(LinkButton)`
  color: ${color.turquoise};
  top: 100px;
`;

const Bin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ inline }) => (inline ? "flex-start" : "space-between")};
  align-items: center;
  margin: ${({ inline }) => (inline ? 5 : 30)}px auto;
`;

const StripeFolio = styled(LinkOuter)`
  height: 70px;
`;

const Subpage = styled(LinkInner)`
  height: 70px;
`;

const SettingsButton = styled(Button)`
  color: ${color.turquoise};
`;

const SettingsBar = styled.div`
  width: 75px;
  height: 185px;

  position: absolute;
  top: 50px;
  right: 0;
  z-index: 100;
  transform: translateX(${({ visible }) => (visible ? 0 : 100)}px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  padding: 0 8px;

  background-color: ${color.white};
  transition: transform 0.3s ease;

  @media (min-width: 568px) and (max-width: 666px) {
    height: 145px;
  }

  @media (min-width: 768px) {
    height: 100%;
  }
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
