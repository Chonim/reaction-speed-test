import React, { useState } from 'react'
import styled from "@emotion/styled";
import BaseLayout from "@components/common/BaseLayout";
import Description from "@components/common/Description";
import { useRouter } from "next/router";
import { useInterval } from "@hooks/useInterval";

const Counting = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  const interval = 100
  useInterval(() => {
    if (progress === 100) {
      router.push('/result')
      return;
    }
    setProgress(progress + 1);
  }, interval);
  return (
    <BaseLayout pageTitle="Counting">
      <Container>
        <DescriptionWrapper>
          <Description
            title={`${progress}%`}
            sub={`The results are being compiled.\nplease wait.`}
          />
        </DescriptionWrapper>
      </Container>
    </BaseLayout>
  );
}

const Container = styled.div`
  padding: 0 1rem;
`

const DescriptionWrapper = styled.div`
  margin-top: 2rem;
`

export default Counting
