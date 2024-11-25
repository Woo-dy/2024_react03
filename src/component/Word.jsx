import React, { useState } from 'react';

function Word({word}) {
   const [isShow, setIsShow] = useState(false);
   
   function toggleShow(params) {
      setIsShow(!isShow)
   }

   const [isDone, setIsDone] = useState(word.isDone);

   function toggleDone(params) {
      setIsDone(!isDone)
   }

   return (
      <>
         <tr className={isDone ? "off" : ""}>
            <td>
               <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>day{word.day}</td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
               <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
               <button className="btn_del">삭제</button>
            </td>
         </tr>
      </>
   );
}

export default Word;