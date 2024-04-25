import { useState } from 'react'
import './App.css'

function App() {
// let bgColor = "bg-black"
let [bg, setBg] = useState("")
let [color, setColor] = useState("text-white");
let [text, setText] = useState('')
let white = "text-white";
let [welcome, setWelcome] = useState("")
  return (
   <>
   <div className={`${bg} h-screen w-full flex flex-col justify-between items-center py-28 transition-bg duration-700`}>
    <h1 className={`${color} text-center font-bold text-3xl`}>{welcome}
    <br /> <br /> <br /> {text} 
    </h1>

    <div className='bg-slate-300 w-[90%] p-4 rounded-xl gap-2 flex justify-between flex-wrap lg:flex-nowrap sm:text-sm sm:gap-1'>

      <button 

      onClick={
        () => {
          setBg("bg-red-700");
          setColor(white);
          setText("Welcome to Red Color Background")
          setWelcome("IB Coding School Projects")
        }}
         className='bg-red-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-red-800'>Red</button>

      <button 
      onClick={
        () => {
          setBg("bg-green-700");
          setColor(white);
          setText("Welcome to GREEN Color Background") 
          setWelcome("IB Coding School Projects")
        }}
         className='bg-green-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-green-800'>Green</button>

      <button  
      onClick={
        () => {
          setBg("bg-blue-700");
          setColor(white);
          setText("Welcome to BLUE Color Background") 
          setWelcome("IB Coding School Projects")
        }}
         className='bg-blue-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-blue-800'>Blue</button>

      <button  
      onClick={
        () => {
          setBg("bg-orange-700");
          setColor(white);
          setText("Welcome to ORANGE Color Background") 
          setWelcome("IB Coding School Projects")
        }}
         className='bg-orange-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-orange-800'>Orange</button>

      <button  
      onClick={
        () => {
          setBg("bg-gray-700");
          setColor(white);
          setText("Welcome to GRAY Color Background") 
          setWelcome("IB Coding School Projects")
        }}
         className='bg-gray-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-gray-800'>Gray</button>

      <button 
      onClick={
        () => {
          setBg("bg-yellow-700");
          setColor(white);
          setText("Welcome to YELLOW Color Background") 
          setWelcome("IB Coding School Projects")
        }}
          className='bg-yellow-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-yellow-800'>Yellow</button>

      <button 
      onClick={
        () => {
          setBg("bg-pink-700");
          setColor(white);
          setText("Welcome to PINK Color Background") 
          setWelcome("IB Coding School Projects")
        }}
          className='bg-pink-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-pink-800'>Pink</button>

      <button 
      onClick={
        () => {
          setBg("bg-purple-700");
          setColor(white);
          setText("Welcome to PURPLE Color Background") 
          setWelcome("IB Coding School Projects")
        }}
          className='bg-purple-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-purple-800'>Purple</button>

      <button 
      onClick={
        () => {
          setBg("bg-teal-700");
          setColor(white);
          setText("Welcome to TEAL Color Background")
          setWelcome("IB Coding School Projects")
        }}
          className='bg-teal-700 text-white px-4 py-1 rounded-xl font-bold hover:bg-teal-800'>Teal</button>

      <button  
      onClick={
        () => {
          setBg("bg-white");
          setColor(!color);
          setText("Welcome to WHITE Color Background") 
          setWelcome("IB Coding School Projects")
        }} 
        className='bg-white text-black px-4 py-1 rounded-xl font-bold hover:bg-slate-200'>White</button>

      <button  
      onClick={
        () => {
          setBg("bg-black");
          setColor(white);
          setText("Welcome to BLACK Color Background") 
          setWelcome("IB Coding School Projects")
        }}
         className='bg-black text-white px-4 py-1 rounded-xl font-bold hover:bg-slate-800'>Black</button>
        <br />
      
    </div>
    <button  
      onClick={
        () => { window.location.reload()
        }}
         className='bg-black text-white px-4 py-1 rounded-xl font-bold hover:bg-slate-800'>Back to Home</button>
   </div>
   </>
  )
}

export default App
