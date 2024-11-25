import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

function App() {
   return (
      <BrowserRouter>
         <div className='App'>
            <Header />
            <Routes>
               {/* path='/' 는 첫 페이지를 의미한다. (메인 페이지) */}
               <Route path='/' element={<DayList />} />
               {/* 동적 라우팅 */}
               {/* /day/:day == /day/1 같은 의미이다. */}
               <Route path='/day/:day' element={<Day />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
