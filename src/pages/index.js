import React from "react";
import styled from "styled-components";

import color from "../shared/colors";
import type from "../shared/consts";

import {
  Layout,
  Icon,
  Label,
  LinkButton,
  LinkOuter,
  LinkInner,
  H1,
  P
} from "../components";

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Section>
        <Content top>
          <LinkedinButton
            href="https://www.linkedin.com/in/natalia-kulas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Label color={color.turquoise}>LinkedIn</Label>
            <Icon id={type.LINKEDIN} fill={color.turquoise} />
          </LinkedinButton>
          <GithubButton
            href="https://github.com/nataliakulas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Label color={color.turquoise}>Github</Label>
            <Icon id={type.GITHUB} fill={color.turquoise} />
          </GithubButton>
          <H1>Hello!</H1>
          <Bin inline>
            <P>If you are here, it means, that you are faster than I am! </P>
            <Icon id={type.SMILE} fill={color.turquoise} />
          </Bin>
          <P>
            Right now, I'm <span>upgrading</span> this page and it can take a
            while.
          </P>
        </Content>
        <Content>
          <P>
            That is because I'm fully dedicated in developing real estate portal
            (with custom admin panel) and if I have some spare time, I'm&nbsp;
            <span>mentoring</span> junior frontend dev.
          </P>
          <Bin>
            <Subpage to="/cid">Check out this cool CID project</Subpage>
            <StripeFolio href="https://stripefolio.surge.sh">
              Show currently-not-so-actual portfolio
            </StripeFolio>
          </Bin>
        </Content>
      </Section>
    </Wrapper>
  </Layout>
);

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
    max-height: 410px;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 15px 30px;
  padding-right: ${({ top }) => top && 95}px;
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
  justify-content: ${({ inline }) => (inline ? "flex-start" : "space-around")};
  align-items: center;
  margin: ${({ inline }) => (inline ? 5 : 30)}px auto;
`;

const StripeFolio = styled(LinkOuter)`
  height: 70px;
`;

const Subpage = styled(LinkInner)`
  height: 70px;
`;
