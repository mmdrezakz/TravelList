import { useState } from "react";

export default function Selects({ adddHandler }) {
  const [des, setdescription] = useState("");
  const [tedad, setselectdata] = useState(1);



  function handler(e) {

    e.preventDefault();
    if (!des) return;

    const newItem = { id: Date.now(), des, tedad, packed: false };
    adddHandler(newItem);
    console.log(newItem);
    setdescription("");
    setselectdata(1);
  }
  return (
    <div className='flex flex-wrap bg-orange-500 min-h-[10vh]  w-full justify-arounds items-center md:justify-center '>
      <div className=' p-1  flex justify-center  items-center text-white text-base font-parastoo '>چی برای سفرت نیاز داری ؟<div className='bg-white rounded-full flex justify-center items-center p-1 ml-2 mr-2'>😎</div>

      </div>
      <form className='w-full sm:w-1/2 flex items-center justify-around  ' onSubmit={handler}>
        <select className='text-white rounded-sm  bg-red-500 outline-none text-center h-8 ' value={tedad} onChange={e => setselectdata(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => <option value={index} key={index}>{index}</option>)}
        </select>
        <input className='text-white p-1 bg-red-500 rounded-sm outline-none h-8' defaultValue={"..."} value={des} onChange={(e) => setdescription(e.target.value)} />
        <button className='text-white bg-red-500 rounded-sm h-8 text-center p-2 flex justify-center items-center'><div>چیدن</div></button>
      </form>
    </div>
  );
}
