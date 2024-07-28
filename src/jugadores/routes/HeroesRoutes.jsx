import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "../../ui/components/Footer"
import { NavBar } from "../../ui/components/Navbar"
import { AnimesPage } from "../pages/AnimesPage"
import { ComicsPage } from "../pages/ComicsPage"
import { HomePage } from "../pages/HomePage"
import { HeroPage } from "../pages/HeroPage"



export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<HomePage/>} />
            <Route path="animes" element={<AnimesPage/>} />
            <Route path="comics" element={<ComicsPage/>} />
            <Route path="hero/:id" element={<HeroPage/>} />
        </Routes>
        <Footer/>
    </>
  )
}
