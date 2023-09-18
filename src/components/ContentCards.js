import React, { Component } from 'react';
import ReactDOM from 'react-dom'


const Card = (props) => (
  <div className="card">
    <img src={ props.imgUrl } 
      alt={ props.alt || 'Image' } />
    <div className="card-content">
      <h3>{ props.content }</h3>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
);

class ContentCards extends React.Component {
  render () {
    const cardsData = [
      {id: 2, title: '', content: 'Electric Vehicle Charging Points', imgUrl: 'https://images.unsplash.com/photo-1672821939350-d55275fde5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cmljYWwlMjBjaGFyZ2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'},
      {id: 3, title: '', content: 'Domestic Renovations', imgUrl: 'https://images.unsplash.com/photo-1566417110090-6b15a06ec800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80'},
      {id: 1, title: '', content: 'Rewiring', imgUrl: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'},
      {id: 4, title: '', content: 'Smart Lighting', imgUrl: 'https://images.unsplash.com/photo-1628417076407-638e6a88a62e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwbGlnaHRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'},
      {id: 5, title: '', content: 'Electric and Storage Heating', imgUrl: 'https://images.unsplash.com/photo-1673038111329-d0fdc5eb5014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'},
      {id: 6, title: '', content: 'Fire Alarm Installations', imgUrl: 'https://images.unsplash.com/photo-1665655034446-1536f6de3fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGZpcmUlMjBhbGFybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'},
      {id: 7, title: '', content: 'EICRs', imgUrl: 'https://images.unsplash.com/photo-1530971013997-e06bb52a2372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2896&q=80'},
    ]
    
    return(
      <div className="container">
        <h2 style={{ 'text-align': 'center' }}>
          Our Services
        </h2>
        
        <CardContainer cards={ cardsData } />
      </div>
    );
  }
}


export default ContentCards;