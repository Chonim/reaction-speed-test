import React from 'react'
import styled from "@emotion/styled";

type Props = {
  title: string,
  sub: string,
}

const Description = ({ title, sub }: Props) => (
  <Container>
    <DescriptionTitle>{title}</DescriptionTitle>
    <DescriptionSub>{sub}</DescriptionSub>
  </Container>
);

const Container = styled.section`
  text-align: center;
`

const DescriptionTitle = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;
`;

const DescriptionSub = styled.p`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 4.75rem;
  line-height: 1.125rem;
  white-space: pre;
`;

export default Description
