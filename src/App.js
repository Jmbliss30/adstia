import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import $ from 'jquery';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Matt Gardener was knowledgeable',
      para: 'Lorem Ipsum is simply dummy text of the printing typesetting',
      user: 'sandra',
    },
    {
      id: 2,
      title: 'Great Insaurance Agent',
      para: 'Lorem Ipsum is simply dummy text of the printing typesetting',
      user: 'John',
    },
    {
      id: 3,
      title: 'Tom Stacy',
      para: 'Lorem Ipsum is simply dummy text of the printing typesetting',
      user: 'Adam',
    },
    {
      id: 4,
      title: 'Hala Madrid',
      para: 'Lorem Ipsum is simply dummy text of the printing typesetting',
      user: 'Joey',
    },
  ]);
  useEffect(() => {
    $('.carousel .vertical .item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 1; i < 2; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });
  }, []);

  return (
    <div className='App'>
      <div className='conatiner'>
        <div className='left-section'>
          <div className='upr'>
            <h1 className='left-title'>Our Happy Customer </h1>
            <p className='left-content'>
              Here's what some of our thousand of customers has to say! Over the
              years of experinece.
            </p>
          </div>
          <div className='lwr'>
            <h3 className='left-subTitle'>Excellent</h3>
            <span className='stars'>
              {' '}
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
              <i class='fa fa-star' aria-hidden='true'></i>
            </span>
            <div className='reviews'>Based on 786 Reviews</div>
          </div>
        </div>
        <div className='right-section'>
          <div className='container box1'>
            {data.map((element) => {
              return (
                <div className='inner-box'>
                  <div className='title'>{element.title}</div>
                  <div className='content'>{element.para}</div>
                  <span className='stars'>
                    {' '}
                    <i class='fa fa-star' aria-hidden='true'></i>
                    <i class='fa fa-star' aria-hidden='true'></i>
                    <i class='fa fa-star' aria-hidden='true'></i>
                    <i class='fa fa-star' aria-hidden='true'></i>
                    <i class='fa fa-star' aria-hidden='true'></i>
                  </span>
                  <div className='userName'>{element.user}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
