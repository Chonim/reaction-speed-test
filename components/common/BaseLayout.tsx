import React from 'react'
import styled from "@emotion/styled";
import { palette } from "@styles/theme";

type BaseLayoutProps = {
  pageTitle: string,
  handleBackgroundClick?: () => void
  children: React.ReactNode | React.ReactNodeArray
}

const BaseLayout = ({
  pageTitle,
  handleBackgroundClick,
  children,
}: BaseLayoutProps) => (
  <Container onClick={handleBackgroundClick}>
    <PageTitle>{pageTitle}</PageTitle>
    {children}
    <AdArea />
  </Container>
);

const Container = styled.div`
  height: 100vh;
`;

const PageTitle = styled.h1`
  padding-top: 1rem;
  color: ${palette.green};
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
`;

const AdArea = styled.div`
  width: 100vw;
  height: 4rem;
  background-color: #700965;
  position: fixed;
  bottom: 0;
`;

export default BaseLayout
