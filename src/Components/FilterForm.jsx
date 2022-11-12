import React from 'react';
import "../Styles/FilterForm.css";
import { useState } from 'react';

const FilterForm = (props) => {
  
   //handling inputs 
  const [filterValues, setfilterValues] = useState({Location: "Any", When: "Any", Price:"Any" , Type: "Any"});
 
  const locationhandler = (e) =>{
    setfilterValues({...filterValues, Location: e.target.value, })
  }

  const datehandler = (e) =>{
    setfilterValues({...filterValues, When: e.target.value})
  } 
  
  const pricehandler = (e) =>{
    setfilterValues({...filterValues, Price: e.target.value})
  } 
  
  const typehandler = (e) =>{
    setfilterValues({...filterValues, Type: e.target.value})
  }


  //form submission
  const filterFormhandler = (e) =>{
      e.preventDefault();
      props.passValuesToMain(filterValues)

  }

  return (
   <>
   <form className="wrapper" onSubmit={filterFormhandler}>  
      <div className="field">
          <h5>Location</h5>
          <select onChange={locationhandler}>
          <option value="Any">Any</option>
            <option value="USA">USA</option>
            <option value="India">INDIA</option>
            <option value="UK">UK</option>
          </select>
      </div> 
      <div className="field">
          <h5>When</h5>
          <input type="date" defaultValue={"Any"} value={filterValues.When} onChange={datehandler} />
      </div> 
      <div className="field">
          <h5>Price</h5>
          <select  onChange={pricehandler}>
          <option value="Any">Any</option>
            <option value="500-2000">500$-2000$</option>
            <option value="2000-2500">2000$-2500$</option>
            <option value="2500-5000">2500$ + </option>
          </select>
      </div> 
      <div className="field">
          <h5>Property Type</h5>
          <select onChange={typehandler}>
            <option value="Any">Any</option>
            <option value="House">Houses</option>
            <option value="Villa">Villas</option>
            <option value="Flat">Flat</option>
          </select>
      </div> 
      <div className="submit-button">
          <button type='submit'>Search</button>
      </div> 

    </form>
   
   </>
  )
}

export default FilterForm