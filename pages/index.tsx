import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { palette } from "@styles/theme";
import { useRouter } from "next/router";
import Description from "@components/common/Description"

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Head>
        <title>Reaction Speed Test</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Title>Reaction Speed Test</Title>

      <ImageWrapper>
        <Image
          src="/images/main-image.svg"
          alt="Main Image"
          layout="responsive"
          width={100}
          height={100}
        />
      </ImageWrapper>

      <Description
        title="Test your speed"
        sub={`Active touch ID so you don’t need to confirm\nyour PIN every time you want to send money`}
      />

      <StartButton onClick={() => router.push("/game")}>START</StartButton>

      {/* <footer>Apple, Inc</footer> */}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: #f6f6f6;
  height: 100vh;
  padding: 1rem 1.5rem;
  text-align: center;
`;

const Title = styled.h1`
  color: ${palette.green};
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
`;

const ImageWrapper = styled.div`
  padding: 3.75rem 2rem;
`;

const StartButton = styled.button`
  background-color: ${palette.green};
  width: 100%;
  padding: 1.25rem 0;
  border-radius: 36px;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${palette.white};
`;

export default Home;
