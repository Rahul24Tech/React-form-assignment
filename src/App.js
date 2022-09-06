import React, { useState } from "react";
import Select from "react-select";

function App() {
  // const [data,setData]=useState(' ')
  //   const textInput = React.createRef();  // React use ref to get input value

  //   const onOnclickHandler = (e) => {
  //     setData(textInput.current.value);
  //   };

  //   return (
  //     <div className="App">
  // <h1>{data}</h1>
  //       <input ref={textInput} type="text" />
  //       <button onClick={onOnclickHandler}>Click Here</button>
  //     </div>
  //   );
  // }
  // const [data,setData]=useState(' ')
  // const handleChange = (e) => {
  //   setData(e.target.value)
  // }
  // return (
  //   <div className="App">
  //   <h1>{data}</h1>
  //   <input type="text" placeholder="Enter text" onChange={handleChange}/>
  //   </div>
  // )

  // const [data,setData]=useState(' ')
  //   const textInput = React.createRef();  // React use ref to get input value

  //   const onClickHandler = (e) => {
  //     setData(textInput.current.value);
  //   };

  //   return (
  //     <div className="App">
  //       <div className="Text">
  // <h1>{data}</h1>
  // </div>
  //       <label>Enter the text: <input ref={textInput} type="text" /></label>
  //       <button onClick={onClickHandler}>Click Here</button>
  //     </div>
  //   );
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];
  return (
    <div className="App">
      <label>
        Enter the text: <input type="text" />
      </label>
      <input type="file" />
      <h1>Current date is {date}</h1>
      <Select options={options} />
      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
    </div>
  );
}
export default App;
