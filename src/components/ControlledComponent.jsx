import { useState } from "react";

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  };

  const print = () =>{
    alert(inputValue);
  }

  const clear = () =>{
    setInputValue("");
  }

  const validate = () =>{
    if(inputValue.length > 10){
      setError("El valor debe tener menos de 10 caracteres");
    }else{
      alert("El valor es correto"+ inputValue);
      setError("");
    }
  }

  return(
    <div className="space-x-4 space-y-4 bg-blue-200 flex-1 w-full ">
      <input className="border border-gray-300 rounded-md py-2 px-4" type="text" value={inputValue} onChange={handleInputChange}/>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded active:bg-gray-500" onClick={print}>Imprimir</button>
      <button className="bg-red-600  text-white font-bold py-2 px-4 rounded active:bg-gray-500" onClick={clear}>Eliminar</button>
      <button className="bg-green-700  text-white font-bold py-2 px-4 rounded active:bg-gray-500" onClick={validate}>validar</button>
      <div>
        {!!error && <span className="text-red-400 text-sm">{error}</span>}
         el valor del input es {inputValue}</div>
    </div>
  )
};

export default ControlledComponent;
