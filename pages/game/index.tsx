import React, { useState } from "react";
import styled from "@emotion/styled";
import { palette } from "@styles/theme";
import Description from "@components/common/Description";
import BaseLayout from '@components/common/BaseLayout'
import Circle from '@components/game/shapes/circle'
import { useRouter } from "next/router";

const circleSizes = [0, 150, 100, 50];
const LAST_STAGE_INDEX = 3

const Game = () => {
  const router = useRouter();
  const [currentStage, setCurrentStage] = useState(0);
  // const [currentStage, setCurrentStage] = useState(1);
  const [isCircleVisible, setIsCircleVisible] = useState(false);
  // const [isCircleVisible, setIsCircleVisible] = useState(true);
  const [isCircleClicked, setIsCircleClicked] = useState(false);
  const [isBackgroundClicked, setIsBackgroundClicked] = useState(false);
  const [isTimeTakenVisible, setIsTimeTakenVisible] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [totalTimeTaken, setTotalTimeTaken] = useState(0)

  const showCircle = () => {
    setIsBackgroundClicked(false);
    // const appearanceTime = Math.random() * 5000
    // FIXME: remove temp logic
    const appearanceTime = 0;
    setTimeout(() => {
      setIsCircleVisible(true);
    }, appearanceTime);
    // TODO: start counting
    setStartTime(new Date());
  };

  const handleBackgroundClick = () => {
    if (currentStage === 0) {
      setCurrentStage(1);
      showCircle();
      return;
    }
    // wrong area clicked
    setIsBackgroundClicked(true);
    // TODO: add reset logic
    setTimeout(() => {
      setIsBackgroundClicked(false);
    }, 50)
  };

  const handleCircleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const timeDiff = new Date().getTime() - startTime.getTime();
    setTimeTaken(timeDiff);
    setTotalTimeTaken(timeTaken + timeDiff);
    console.log(timeDiff);
    setEndTime(new Date());
    setIsCircleClicked(true);
    setTimeout(() => {
      setIsCircleVisible(false);
      setIsTimeTakenVisible(true);
    }, 100);
    setTimeout(() => {
      if (currentStage === LAST_STAGE_INDEX) {
        // stop the game
        // TODO: save total time in store
        console.log(totalTimeTaken);
        // open counting page
        router.push('/counting')
        return
      }
      // open next stage after 3 seconds
      setCurrentStage(currentStage + 1)
      setIsTimeTakenVisible(false)
      showCircle()
    }, 3000)
  };

  return (
    <BaseLayout
      pageTitle={currentStage === 0 ? "Ready" : `Round ${currentStage}`}
      handleBackgroundClick={handleBackgroundClick}
    >
        {currentStage === 0 && (
          <DescriptionWrapper>
            <Description
              title="Click the circle"
              sub={`A circle appears in a random position.\nThe test runs for a total of 3 rounds.\nShow your speed!`}
            />
          </DescriptionWrapper>
        )}
        {currentStage > 0 && isCircleVisible ? (
          <Circle
            isCircleClicked={isCircleClicked}
            size={circleSizes[currentStage]}
            onClick={(event) => handleCircleClick(event)}
          />
        ) : (
          isTimeTakenVisible && <TimeTaken>{timeTaken}ms</TimeTaken>
        )}
        {isBackgroundClicked && <OverLay />}
    </BaseLayout>
  );
};


const DescriptionWrapper = styled.div`
  margin-top: 10rem;
`;

const OverLay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${palette.orange};
  opacity: 0.7;
  top: 0;
`;

const TimeTaken = styled.p`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  color: ${palette.green};
  font-weight: 600;
  font-size: 1.25rem;
`

export default Game;
