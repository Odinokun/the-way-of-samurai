import React from 'react';
import {Routes, Route} from "react-router-dom";
import s from './App.module.css'
import {Header} from "./component/Header/Header";
import {Aside} from "./component/Aside/Aside";
import {Profile} from "./component/Pages/Profile/Profile";
import {Dialogs} from "./component/Pages/Dialogs/Dialogs";
import {News} from "./component/Pages/News/News";
import {Music} from "./component/Pages/Music/Music";
import {Settings} from "./component/Pages/Settings/Settings";

function App() {
  return (
    <div className={s.wrap}>
      <Header/>
      <Aside/>
      <main className={s.main}>
        <Routes>
          <Route path='/' element={<Profile/>}/> {/*костыль*/}
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dialogs' element={<Dialogs/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
