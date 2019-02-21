import React from "react";
import styled from "styled-components";
import color from "../shared/colors";
import type from "../shared/consts";
import { Layout, H1 } from "../components";
import { FlexCentered } from "../components/Common";

export default () => {
  return (
    <Layout theme={type.GREY}>
      <Section>
        <H1 theme={type.GREY}>No such page!</H1>
      </Section>
    </Layout>
  );
};

const Section = styled.div`
  width: 100%;
  height: 400px;

  ${FlexCentered};

  background-color: ${color.white};
  margin: 20px auto;
`;
