import React from 'react'
import { HeaderComponment as Header } from './components/Header'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { AuthProvider } from './components/context/auth-context'
import { Main } from './components/Main'
import { Timetable } from './screens/timetable'
import { MoviePage } from './screens/moviePage'
import { BuyTickets } from './screens/buyTickets'
import GlobalStyle from './style/globalStyle'
import './style/normalize.css'

export default function App() {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/timetable' element={<Timetable />} />
                        <Route
                            path={`/movie/:movieId`}
                            element={<MoviePage />}
                        />
                        <Route
                            path={`/buy-tickets/:movieId`}
                            element={<BuyTickets />}
                        />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </>
    )
}
