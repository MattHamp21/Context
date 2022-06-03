import { useState } from "react";

const ToggleCard = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ border: "1px solid", margin: "15px" }}>
      {/* <h1>{props.title}</h1> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      <div classname={show ? "showcard" : "hidecard"}>
        <p>children here</p>
        {props.children}
      </div>
    </div>
  );
};
export default ToggleCard;
