import React from 'react';

const Cards = (props)=>{
return(
 <>
 
  <div className='card'>
  <img src={props.src} />
  <h1 style={{textAlign:'center'}}>{props.title}</h1>
  <div className='views'>
  <p>{props.views}</p>
  <p>{props.month}</p>
  </div>
  <p style={{textAlign:'center',fontWeight:'bold'}}>{props.youtuber}</p>
  <button>Watch Now</button>
  </div>


 </>
)
};


export default Cards;