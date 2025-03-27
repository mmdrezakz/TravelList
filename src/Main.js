import { useState } from "react";

export default function Main({ add, removeHandler, packedHandler, removeAll }) {
  const [sort, setSort] = useState("Input");

  let sortedItem;
  if (sort === "Input")
    sortedItem = add;

  if (sort === "Packed")
    sortedItem = add.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

  if (sort === "Description")
    sortedItem = add.slice().sort((a, b) => a.des.localeCompare(b.des));




  return (
    <>
      <ul className='py-8 w-full h-[50vh] grid grid-cols-4 justify-center text-center items-center bg-yellow-400 text-blue-800 '>
        {sortedItem.map(item => <Item item={item} removeHandler={removeHandler} packedHandler={packedHandler} />)}
      </ul>
      <div className='flex justify-center gap-2 items-center bg-yellow-400 h-[10vh] '>
        <select className='flex justify-center items-center bg-red-500 text-white h-8 rounded-md outline-none' value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="Input">مرتب سازی نسبت به ورودی</option>
          <option value="Description">مرتب سازی نسبت به متن</option>
          <option value="Packed">مرتب سازی نسبت به آماده ها</option>
        </select>
        <button className='flex h-8 justify-center items-center bg-red-500 text-white rounded-md outline-none' onClick={() => { removeAll(); }}>حذف همه آیتم ها</button>
      </div>
    </>
  );
}
function Item({ item, removeHandler, packedHandler }) {
  return (
    <li>
      <input className='ml-1' value={item.packed} onChange={() => { packedHandler(item.id); }} type='checkbox'></input>
      <span className={item.packed ? "line-through" : " "}>{item.tedad}{item.des}</span><button onClick={() => removeHandler(item.id)}>✖️</button></li>
  );
}
