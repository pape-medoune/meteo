import './App.css';
import   {useState,useEffect} from 'react'
import axios from 'axios'
function App() {
  
  const [element,setElement]= useState([]);
  const [lat,setLat] = useState();
  const [lon,setLon] = useState();
  const date = new Date().getDate();

  const fetchElement = async ()=>{
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${date}&appid=ed52192036a9b04a04c94760df27454b`);
      const dt = response.data;
      setElement(dt)
      console.log(dt)
      alert("data displayed successfully")
    }catch(err){
      console.log("Ereur lors du fetch ",err);
    }
  }


  useEffect(()=>{
    fetchElement();
  },[])
  
  return (
    <div className='app w-full items-center flex flex-col h-screen'>
 
<form className=' bg-slate-800 m-5 w-[80%] p-10  h-fit rounded-xl'> 
<div class="grid  md:grid-cols-1 md:gap-3 ">
    <div class="relative z-0 w-full mb-6 group"> 
        <label for="METEO" class="text-3xl text-white">Application météo</label>
    </div> 
  </div>
  <div class="grid  md:grid-cols-2 md:gap-6 ">
    <div class="relative z-0 w-full mb-6 group ">
        <input type="text" name="longitude" value={lon} onChange={(e)=>{setLon(e.target.value)}} id="longitude" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="longitude"  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Longitude</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="latitude" value={lat} onChange={(e)=>{setLat(e.target.value)}} id="latitude" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="latitude" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Latitude</label>
    </div>
  </div> 
  <button type="submit" onClick={fetchElement} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[100%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer la requête</button>
</form> 

    {
      element.map(
        (ele)=>(
          console.log()
        )
      )
    }
    </div>
  );
}

export default App; 