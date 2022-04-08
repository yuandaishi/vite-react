import { useMemo, useState } from "react";

export const useDemo = () => {
  // useMemo(fn,arr);fn的执行和arr中的数据有关，arr中的数据改变的时候，fn才执行，如果是空数组，则只执行一次
  return useMemo(()=>{console.log('xxxx')},[])
//   const [name, setName] = useState("YDS");
//   const fn = () => {
//       console.log('xxxx')
//     setInterval(() => {
//         console.log('xxxxxxxxxxxxxx')
//       setName(Math.random() + "YDS");
//     }, 1000);
    
//   };
//   return useMemo(fn, []);
};
