import React from 'react'
import { HeaderComponment as Header } from './components/Header'
import { Routes, Route, HashRouter } from 'react-router-dom'
// import { Routes } from 'react-router-dom

import { MoviesList } from './components/MoviesList'
import Slider from './components/Slider/index'
import './style/normalize.css'
import { MoviePage } from './components/MoviePage'
import { Main } from './components/Main'
import { AuthProvider } from './components/context/auth-context'
import GlobalStyle from './style/globalStyle'
import { Timetable } from './components/Timetable'

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
