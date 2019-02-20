import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

import color from "../shared/colors";
import { makePrimary } from "../shared/helpers";

import Global from "./Global";

import favicon from "../images/favicon.ico";

const Layout = ({ children, theme }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          link={[
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=Comfortaa"
            },
            { rel: "icon", href: `${favicon}` }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Global />
        <Background background={makePrimary(theme)}>
          <Container>
            <Row>
              <Col xs={12} md={10} lg={8} offset={{ md: 1, lg: 2 }}>
                {children}
              </Col>
            </Row>
          </Container>
        </Background>
      </>
    )}
  />
);

export default Layout;

const Background = styled.div`
  height: 100vh;
  background-image: ${({ background }) =>
    `repeating-linear-gradient(${background} 0, ${background} 50px, ${
      color.white
    } 0, ${color.white} 100px)`};
`;
