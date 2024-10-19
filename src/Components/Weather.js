// import "../App.css"
// import React, { useState } from 'react'


// const Weather = () => {
// const[city, setCity] = useState(null)
// const [weather, setWeather] = useState()
// const [favouriteCity, setFavouriteCity] = useState([])
//  console.log(favouriteCity)

// async function Api(){
//   const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'7d0c9550f67803ed5631b3f1957351c6'}`)
//   const json = response.json()
//    json.then((res)=>{
//     setWeather(res)
//     setFavouriteCity(res)
//   })
  
// }
// const handleFavouriteData = ()=>{
 
// }

// const handleFetchData =()=>{
//   if(city.length > 0){
//     Api()
//   }else{
//     return null;
//   }
      
// }
//   return (
   
//     <div className=' text-center h-screen bg-gray-100 '>
//      <h1 className="font-bold text-3xl text-red-400">Weather Forecast</h1>
//       <div>
//         <input className="border border-black w-96 pl-2" placeholder="Location"
//         value={city} 
//         onChange={(e)=>setCity(e.target.value)}
//         />
//         <button className="border border-black border-l" onClick={handleFetchData} >Get Weather</button>
//         <button className="border border-black border-l" onClick={handleFavouriteData} >Add favourite</button>

//       </div>
//       {weather && <>
//       <div className="border border-black mt-6">
//         <h1>Name of City: {weather?.name}</h1>
//        <h1>Temperature:{weather?.main?.temp} </h1>
//         <h1>Description: {weather?.weather[0]?.description}</h1>
//         <h1>Humidity: {weather?.main?.humidity}%</h1>
//         <h1>Wind: {weather?.wind.speed} km/h</h1>
//       </div>
//       </>}
      
//       <div className="text-start">
//         <p>Some favourites </p>
//         <h1>{favouriteCity[0]}</h1>

//     </div>
    
//     </div>
//   )
// }

// export default  Weather;