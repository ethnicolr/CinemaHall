import React from 'react'
import { HeaderComponment as Header } from './compoentnts/Header'
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Routes } from 'react-router-dom

import { MoviesList } from './compoentnts/MoviesList'
import Slider from './compoentnts/Slider/index'
import './style/normalize.css'
import { MoviePage } from './compoentnts/MoviePage'
import { Main } from './compoentnts/Main'

export default function App() {
    return (
        <>
            <Header />
            <Switch>
                {/* <Slider /> */}
                {/* <MoviesList /> */}
                <Route exact path={`/`} component={Main} />
                <Route exact path={`/movie/:movieId`} component={MoviePage} />
            </Switch>
        </>
    )
}
