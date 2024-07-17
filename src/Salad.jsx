import React from 'react';
import Card from './Card';
import './Card.css'; 
import lavash1Img from '/salad1.jpg';
import lavash2Img from '/salad2.jpg';
import lavash3Img from '/salad3.jpg';
import lavash4Img from '/salad4.jpg';
import lavash5Img from '/salad5.jpg';
import lavash6Img from '/salad6.jpg';
import lavash7Img from '/salad7.jpg';
import lavash8Img from '/salad8.jpg';

function Salad() {
  const lavash1 = {
    title: "Classical Lavash",
    text: "Beef dumpling in hot soup",
    img: lavash1Img,
    price: 1.21
  }
  const lavash2 = {
    title: "Sirli Lavash",
    text: "Beef dumpling in hot soup",
    img: lavash2Img,
    price: 1.22
  }
  const lavash3 = {
    title: "Tandir Lavash",
    text: "Beef dumpling in hot soup",
    img: lavash3Img,
    price: 1.23
  }
  const lavash4 = {
    title: "Go`shtli Lavash",
    text: "Beef dumpling in hot soup",
    img: lavash4Img,
    price: 1.24
  }
  const lavash5 = {
    title: "Tovuqli Lavash",
    text: "Beef dumpling in hot soup",
    img: lavash5Img,
    price: 1.25
  }
  const lavash6 = {
    title: "Student Lavash",
    text: "Beef dumpling in hot soup",
    img: lavash6Img,
    price: 1.26
  }
  const lavash7 = {
    title: "German Lavash",
    text: "Beef dumpling in hot soup",
    img: lavash7Img,
    price: 1.27
  }
  const lavash8 = {
    title: "Asl Lavash",
    text: "Beef dumpling in hot soup",
    img: lavash8Img,
    price: 1.28
  }

  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", listStyle: "none" }}>
        <li><Card data={lavash8}/></li>
        <li><Card data={lavash7}/></li>
        <li><Card data={lavash6}/></li>
        <li><Card data={lavash5}/></li>
        <li><Card data={lavash4}/></li>
        <li><Card data={lavash3}/></li>
        <li><Card data={lavash2}/></li>
        <li><Card data={lavash1}/></li>
      </ul>
    </div>
  );
}

export default Salad;
