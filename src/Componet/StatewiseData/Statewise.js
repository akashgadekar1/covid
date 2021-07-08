import React, { useEffect, useState } from 'react';
// import  "./State.css";

const Statewise = () => {

  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(false);

  const getCovidData= async () =>{
    // setLoading(true)
    // const res=await fetch('https://api.covid19india.org/raw_data31.json');
    // const actualData=await res.json();
    // console.log(actualData.raw_data);
    // setData(actualData.raw_data);
    // setLoading(false)


setLoading(true)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.covid19india.org/raw_data31.json", requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.raw_data)
setLoading(false)

      })
      .catch(error => console.log('error', error));
  }

useEffect(()=>{
  getCovidData();

},[]);

  if (loading == true) {
    return (
      <div className="container-fluid">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      </div>
    )
  }

  return (
    <>
     <div className="container-fluid mt-5">


     <button class="btn btn-primary" type="submit" onClick={()=>getCovidData()}> <i class="fas fa-sync-alt"></i>Refresh</button>

     <div className="main-heading">
     <h1 className="mb-5 text-center color-danger"><span className="font-weight-bold ">INDIA </span> <i class="fas fa-viruses"></i> COVID-19 Dashboard</h1>
     </div>
     <div className="table-responsive">
       <table className="table table-hover">
         <thead className="thead-dark">
           <tr>
             <th style={{fontFamily:'Montserrat',fontSize:24}}>State</th>
             <th style={{fontFamily:'Montserrat',fontSize:24}}>Distrcict</th>
            
             <th>Todays Positive</th>
             <th>recovered</th>
             <th>deaths</th>
             <th>active</th>
             <th>update</th>
           </tr>
           </thead>
        <tbody>
              {data && data.map((curElem, ind) => {
                return (
                  <tr>
                    <th style={{fontFamily:'Montserrat',fontSize:20}}>{curElem.detectedstate}</th>
                    <th style={{fontFamily:'Montserrat',fontSize:20}}>{curElem.detecteddistrict}</th>
                    <th style={{fontFamily:'Montserrat',fontSize:20}}>{curElem.numcases}</th>
                    <th >{curElem.recovered}</th>
                    <th> {curElem.deaths}</th>
                    <th >{curElem.active}</th>
                    <th >{curElem.statenotes}</th>
                  </tr>
                )
          })}
        
        </tbody>
       </table>
     </div>
    
   </div>
    </>
  )
}

export default  Statewise;
