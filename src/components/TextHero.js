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
`;

const TextHedaer= styled.div`
  position: relative;
  width: 100%;
  height: 110px;
  line-height: 110px;
  color: whitesmoke;
  font-size: 5em;
  font-weight: 600;
  /* letter-spacing: -9px; */
  will-change: transform, opacity;
  overflow: hidden;
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
