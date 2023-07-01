import { useRef } from "react";
const RefComponent = () => {
  const inpuRef = useRef();

  const focus = () => {
    inpuRef.current.focus();
  };

  const clear = () => {
    inpuRef.current.value = "";
  };

  const print = () => {
    alert(inpuRef.current.value)
  }
  

  return (
    <div className="space-x-4 space-y-4 bg-blue-200 flex-1 w-full ">
      <input className="border border-gray-300 rounded-md py-2 px-4" type="text" id="input-test" ref={inpuRef}/>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded active:bg-gray-500" onClick={focus}>Focus</button>
      <button className="bg-green-400 text-white font-bold py-2 px-4 rounded active:bg-gray-500" onClick={clear}>Limpiar</button>
      <button className="bg-teal-600 text-white font-bold py-2 px-4 rounded active:bg-gray-500" onClick={print}>Imprimir</button>
    
    </div>
  );
};

export default RefComponent;
