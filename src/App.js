
import { useState } from 'react';
import './App.css';
import  Header from './Header';
import  Selects  from './Selects';
import  Main  from './Main';
import  Footer  from './Footer';
// const packData =[
//   {id:1,des:"جوراب",tedad:2,packed:false},
//   {id:12,des:"شلوار",tedad:4,packed:true},
//   {id:134,des:"جوراب",tedad:2,packed:false},
//   {id:14,des:"شلوار",tedad:4,packed:true}, 
//   {id:15,des:"جوراب",tedad:2,packed:false},
//   {id:16,des:"شلوار",tedad:4,packed:true},
//   {id:17,des:"جوراب",tedad:2,packed:false},
//   {id:18,des:"شلوار",tedad:4,packed:true},
//   {id:19,des:"جوراب",tedad:2,packed:false},
//   {id:10,des:"شلوار",tedad:4,packed:true},

// ]
function App() {
  const [add , setadd] = useState([]);

  const totalItems = add.length
  const totalPaacked= add.filter(item => item.packed ).length
  const darsad = Math.round(totalPaacked / totalItems *100)

  function adddHandler(item){
    setadd((items) =>[...items,item])
  }
  function removeHandler(itemid){
    setadd(items => items.filter(item => item.id !== itemid) )
  console.log(itemid)
}
function packedHandler(id){
  setadd((items) => items.map(item => item.id === id ? {...item,packed:!item.packed} : item))
}
function removeAll(){ 
  setadd([])
}
  return (
    <>
      <Header />
      <Selects adddHandler={adddHandler}/>
      <Main add={add} removeHandler={removeHandler} packedHandler={packedHandler} removeAll={removeAll}/>
      <Footer totalItems={totalItems} totalPaacked={totalPaacked} darsad={darsad}/>
    </>
  );
}
export default App;
