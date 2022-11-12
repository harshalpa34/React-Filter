import React from 'react'
import Card from './Card/Card';


const List = ({data}) => {
  // console.log(data);

  
  return (
    <div className="cardwrapper">
   { data.length !== 0 ?  data.map((data) => <Card data = {data}/> ) : 
    <div className='ResultNotFound'>
      <h1>No Results Found!</h1>
    </div>
    }
    </div>
    
    )
    
}

export default List