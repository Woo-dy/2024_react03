import { Link, useParams } from "react-router-dom";
// import dummy from "../db/data.json"
import Word from "./Word";
import useFetch from "../hooks/useFetch";

function Day(props) {
   // console.log(dummy);
   // const day = 1;
   // url에 포함된 day 값을 가져오기 위해서 useParams()
   const day = useParams().day;
   const words = useFetch(`http://localhost:3010/words?day=${day}`)
   // const [words, setWords] = useState([]);

   // useEffect(()=>{
   //    fetch(`http://localhost:3010/words?day=${day}`)
   //    .then(res=>{
   //       return res.json()
   //    })
   //    .then(data=>{
   //       console.log(data);
   //       setWords(data);
   //    })
   //    .catch((error)=>console.error("Error : ", error));
   // },[]);


   // const wordList = dummy.words.filter(k=>(k.day) === Number(day))

   return (
      <>
         <table>
            <tbody>
               {/* {dummy.words.map(k => { */}
               {words.map(k => {
                  return <Word key={k.id} word={k} />
               })}
            </tbody>
         </table>
         <Link to={"/"} className="btn_back">뒤로가기</Link>
      </>
   );
}

export default Day;