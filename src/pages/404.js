import React from "react";
import styled from "styled-components";

import type from "../shared/consts";
import { Layout, H1 } from "../components";
import { Panel, FlexCentered } from "../components/Mixins";

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
  ${Panel};
  ${FlexCentered};

  overflow-y: hidden;
  height: 400px;
`;
