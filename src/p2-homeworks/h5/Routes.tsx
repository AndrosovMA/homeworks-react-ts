import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";
import { Counter } from '../../Counter/Counter';
import { Exam } from '../../Exam/Exam';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    COUNTER: '/counter',
    EXAM: '/exam',

}

function RoutesComponent() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route path={PATH.COUNTER} element={<Counter/>}/>
            <Route path={PATH.EXAM} element={<Exam/>}/>

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default RoutesComponent
