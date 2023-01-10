import "./styles.css";

export const App = () => {
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  const onClickButton = () => {
    alert();
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <p style={contentStyle}>잘 지내시죠?</p>
      <button onClick={onClickButton}>버튼</button>
    </div>
  );
};
