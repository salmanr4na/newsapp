import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App()
{
var[language,setLanguage] = useState()
var[search,setSearch] = useState()

const changeLanguage = (data)=>
    {
       setLanguage(data)
    }

const changeSearch = (data)=>
{
    setSearch(data)
}
        return (
            <BrowserRouter>
                <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
                <Routes>
                    <Route path='/' element={<Home search={search} language={language} q="All" />} />
                    <Route path='/All' element={<Home search={search} language={language} q="All" />} />
                    <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
                    <Route path='/Education' element={<Home search={search} language={language} q="Education" />} />
                    <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
                    <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
                    <Route path='/Crime' element={<Home search={search} language={language} q="Crime" />} />
                    <Route path='/Sports' element={<Home search={search} language={language} q="Sports" />} />
                    <Route path='/Cricket' element={<Home search={search} language={language} q="Cricket" />} />
                    <Route path='/Olympics' element={<Home search={search} language={language} q="Olympics" />} />
                    <Route path='/Entertainment' element={<Home search={search} language={language} q="Entertainment" />} />
                    <Route path='/Health' element={<Home search={search} language={language} q="Health" />} />
                    <Route path='/Economics' element={<Home search={search} language={language} q="Economics" />} />
                    <Route path='/World' element={<Home search={search} language={language} q="World" />} />
                    <Route path='/India' element={<Home search={search} language={language} q="India" />} />
                    <Route path='/IT' element={<Home search={search} language={language} q="IT" />} />
                    <Route path='/Corporate' element={<Home search={search} language={language} q="Corporate" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
