import './App.css';
import React from 'react';
import Card from './Card';
import dadimg1 from './Dad-images/IMG_0006.JPG'
import dadimg2 from './Dad-images/IMG_0008.JPG'
import dadimg3 from './Dad-images/IMG_3844.JPG'
import dadimg4 from './Dad-images/IMG_5939.JPG'
import dadimg5 from './Dad-images/IMG_0012.JPG'
import dadimg6 from './Dad-images/IMG_0013.jpg'
import dadimg7 from './Dad-images/IMG_2297.JPG'
import dadimg8 from './Dad-images/IMG_3471.JPG'



function App() {
  return (
    <div>
    <div className = 'navbar'>
      <h1 className = 'title'>Happy Father's Day</h1>
    </div>
    <div className='card-div'>
      <Card coverImg = {dadimg1}/>
      <Card coverImg = {dadimg2}/>
      <Card coverImg = {dadimg3}/>
      <Card coverImg = {dadimg4}/>
    </div>
    <div className='card-div2'>
      <Card coverImg = {dadimg5}/>
      <Card coverImg = {dadimg6}/>
      <Card coverImg = {dadimg7}/>
      <Card coverImg = {dadimg8}/>
    </div>

    </div>
    

  );
}

export default App;
