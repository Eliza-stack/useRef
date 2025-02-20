import { useRef, useState } from "react";
import { Input, Button, Typography } from "antd";

const { Text } = Typography;


function CustomInput() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const handleButtonClick = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setValue("");
    }
  };

  return (
    <div style={{ 
      display: "flex",
      width: "100%",
      height: "100vh"
       }}>
      <div style={{  
        background:"#FEF9E1",
        gap: "20px",
        width: "50%",
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

       }}>
        <Input
          ref={inputRef}
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Введите текст"
          style={{ 
          width: "400px",
          border: "1px solid #ccc",
           }}
        />
        <Button type="primary" onClick={handleButtonClick}>
          Фокус
        </Button>
      </div>
      <div style={{ 
         backgroundColor: "#E5D0AC",
         padding: "20px",
         width: "50%"
         }}>
        <h1 style={{alignSelf: "flex-start"}}>Введенный текст:</h1>
  
        <Text style={{ fontSize: "18px" }}>
         {value}</Text>
      </div>
    </div>
  );
};


export default CustomInput;
