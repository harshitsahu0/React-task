import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";
const Home = () => {
    return (
        <div className='main_home row'>
            <div className='row'>

                <div className="container textHome col-lg-8 col-md-8 col-sm-8">
                    <h1> <span>Welcome</span>  To The <span>Harshit's</span>  Daily <span>Tasks</span> </h1>
                    <p>Below are the buttons linked to my daily Projects</p>
                </div>
            </div>
            <div className='row linkrow'>

                <div className='col-lg-8 col-md-8 col-sm-8 allLinks'>
                    <div className='row'>

                        <div className='col-lg-6 col-md-6 col-sm-6 left-btnContainer'>

                            <button className='Btnlnk'> <Link className='linkBtns' to='/Day1'>Day1</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day2'>Day2</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day3'>Day3</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day4'>Day4</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day5'>Day5</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day6'>Day6</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day6_2nd'>Day6_2nd</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day7'>Day7</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day8'>Day8</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day9'>Day9</Link></button>
                            <button className='Btnlnk'><Link className='linkBtns' to='/Day10'>Day10</Link></button>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 left-btnContainer'>

                           <button className='Btnlnk'> <Link className='linkBtns' to='/Day16'>Day16</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Day19'>Day19</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Day20'>Day20</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Day25'>Day25</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Day26'>Day26</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Day39'>Day39</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Day40'>Day40</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Holiday'>Holiday</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Ludo'>Ludo Dice</Link></button>
                           <button className='Btnlnk'> <Link className='linkBtns' to='/Chess'>ChessBoard</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
