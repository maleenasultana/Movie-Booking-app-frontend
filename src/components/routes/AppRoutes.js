import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '../../components/LandingPage/LandingPage'
import Login from '../../components/Auth/Auth'
import Admin from '../../components/Admin/Admin'
import Client from '../../components/Client/Client'
import Booking from '../../components/Booking/Booking'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import MovieTheaters from '../../components/MovieTheatres/MovieTheatres'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<LandingPage />}
                />
                <Route
                    exact
                    path='/login'
                    element={<Login />}
                />
                <Route
                    exact
                    path='/admin'
                    element={<Admin />}
                />
                <Route
                    exact
                    path='/client'
                    element={<Client />}
                />
                <Route
                    exact
                    path='/movie/:movieid/:theatreid'
                    element={<Booking />}
                />
                <Route
                    exact
                    path='/movie/:movieid/details'
                    element={<MovieDetails />}
                />

                <Route
                    exact
                    path="/buytickets/:moviename/:movieid"
                    element={
                        <MovieTheaters />
                    }
                />
            </Routes>
        </Router>
    )
}

export default AppRoutes