export default function Footer({ totalItems, totalPaacked, darsad }) {
  if (totalItems === 0) {
    return (
      <>
        <div className=' w-full h-[10vh] flex  text-white justify-center text-sm items-center flex-wrap bg-red-500 '>شما هیچ آیتمی برایی سفر ندارید😢</div>
      </>
    );
  }
  else
    return (

      <>
        <div className=' w-full h-[10vh] flex  text-white justify-center text-sm items-center flex-wrap bg-red-500 '> {darsad === 100 ? "شما آماده سفر هستید✈️" : <TotalFooter totalItems={totalItems} totalPaacked={totalPaacked} darsad={darsad} />}</div>
      </>
    );
}
function TotalFooter({ totalItems, totalPaacked, darsad }) {
  return (
    <>
      <div className='text-blue-400'> {totalItems} </div> آیتم در لیست خود دارید و <div className='text-blue-400'> {totalPaacked} </div> تعداد را آماده کرده اید . <div className='text-blue-400'>({darsad}%)</div>
    </>
  );
}
