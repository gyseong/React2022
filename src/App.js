import "./styles.css";
import { useState, useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
      <ColoredMessage color="pink">잘 지내죠ㅋㅋ</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
    </>
  );
};
