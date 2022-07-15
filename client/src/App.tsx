import React from 'react'
import { HeaderComponment as Header } from './compoentnts/Header'
import { Routes, Route, HashRouter } from 'react-router-dom'
// import { Routes } from 'react-router-dom

import { MoviesList } from './compoentnts/MoviesList'
import Slider from './compoentnts/Slider/index'
import './style/normalize.css'
import { MoviePage } from './compoentnts/MoviePage'
import { Main } from './compoentnts/Main'
import { AuthProvider } from './compoentnts/context/auth-context'
import GlobalStyle from './style/globalStyle'
import { Timetable } from './compoentnts/Auth/Timetable'

export default function App() {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        {/* <Slider /> */}
                        {/* <MoviesList /> */}
                        <Route path='/' element={<Main />} />
                        <Route path='/timetable' element={<Timetable />} />
                        <Route
                            path={`/movie/:movieId`}
                            element={<MoviePage />}
                        />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </>
    )
}
