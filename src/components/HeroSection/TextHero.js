import React from "react";
import styled from "styled-components/macro";
import TextScramble from '@twistezo/react-text-scramble'

const scrambleTexts = [
  'Frontend Dev 💻'
]

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 768px) {
    height:110px;
    flex-direction: column;
    margin: 0;
  }
`;

const TextHedaer= styled.div`
  position: relative;
  width: 100%;
  height: 110px;
  line-height: 110px;
  color: whitesmoke;
  font-size: 5em;
  font-weight: 600;
  will-change: transform, opacity;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
  @media screen and (min-width: 768px) {
    font-size: 4em;
  }
`;
function App() {
  return (
      <Content>
        <TextHedaer>
          <TextScramble
            texts={scrambleTexts}
            letterSpeed={5}
            nextLetterSpeed={100}
            pauseTime={1500}
          /></TextHedaer>
    </Content>    
  );
}

export default App;
