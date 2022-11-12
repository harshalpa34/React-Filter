import React from 'react'

import FilterForm from './FilterForm'
import List from './List'
import Navbar from './Navbar'
import data from '../data';
import { useState } from 'react';
import Heading from './Heading'


const Main = () => {
  const [FilteredData, setFilteredData] = useState(data);

  const ApplyFilter = (values) =>{
    let amount = values.Price.split("-");
    console.log(amount);
    console.log(values) ;
    if(values.Location !== "Any" || values.Type !== "Any" || values.Price !== "Any" ){
      const myArrayFiltered = data.filter((el) => {
        if(values.Location === "Any" ){
          if(values.Type ==="Any"){
            if(values.Price ==="Any"){
              return;
            }
            else{
              return (amount[0] <= el.Price && el.Price <= amount[1]);
            }
          }
          else if(values.Price ==="Any"){
              return values.Type === el.Type;
          }else{
            return  (amount[0] <= el.Price && el.Price <= amount[1]) && values.Type === el.Type;
          }
        }else if(values.Type ==="Any"){
          if(values.Price === "Any"){
            return values.Location === el.Location;
          }else{
            return  (amount[0] <= el.Price && el.Price <= amount[1]) && values.Location === el.Location;
          }
        }else if(values.Price === "Any"){
          return values.Location === el.Location && values.Type === el.Type;
        }else{
          return (amount[0] <= el.Price && el.Price <= amount[1]) && values.Location === el.Location && values.Type === el.Type;
        }
     
      });
      console.log(myArrayFiltered)
      setFilteredData(myArrayFiltered)
    }else{
      setFilteredData(data)
    }
  }

  return (
    
    <>
    <Navbar />




    <div className="home">
      <div className="mainWraper">  
      <Heading />
          <FilterForm passValuesToMain = {ApplyFilter}/>
      <List data={FilteredData}/>  
      </div>

  
    </div>
    

    {/* //List */}
    </>
    )

}

export default Main;