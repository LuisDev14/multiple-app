import useCounter from "./hooks/useCounter";
const CounterComponent = () => {
  const {counter, increment, decrement} = useCounter(10);


  return (
    <div className="flex-1 w-full flex flex-col gap-4 px-4">
      <h1 className="text-5xl font-bold">{counter}</h1>
      <div>
        <button onClick={increment} className="bg-green-500 text-white font-bold py-2 px-4 rounded active:bg-gray-500">Incrementar</button>
        <button onClick={decrement} className="bg-red-500 text-white font-bold py-2 px-4 rounded active:bg-gray-500"> Decrementar</button>
      </div>
    </div>
  );
};

export default CounterComponent;
