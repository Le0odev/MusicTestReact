
import { useState, useEffect } from "react"
import axios from 'axios'
import Header from '../components/Header/index'
import SearchInput from "../components/Header/SearchInput"
import useDebounce from "../components/useDebounce"
import Player from "../components/Player"
import Pagination from '../components/Pagination'


export default function Home() {

        const [info, setInfo] = useState({})
        const [text, setText] = useState('');

        useEffect(() => {

          if(text){
            const options = {
              method: 'get',
                url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
                params: {q: `${text}`}, 
                
                headers: {
                  'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                  'x-rapidapi-key': '72760ecb0amshd4ff2d6336f7b13p114463jsn373f4d7cde51'
                }
            };

            axios.request(options).then(response => {
              setInfo(response.data)
              console.log(response)
            }).catch(function (error) {
              console.error(error);
          });
            
            
            

          }
          
          



        }, [text])

       







  return (
    
    <div>
      
    <SearchInput value={text} onChange={(search) => setText(search)}  />
    
    {info.data && (
      <div className='results-search'>
          {info.data.map((music) =>
          <div className="chart-card " key={music.id}>
          <img className="card-img" src={music.album.cover_medium} alt=""></img>
          <h2 className="msc-titulo">{music.title}</h2>
          <h5 className="artist-name">{music.artist.name}</h5>
          <p className="album-title">{music.album.title}</p>
          <audio controls><source src={music.preview}></source> </audio>
        </div>
          
          )}
      </div>
      
  )}
  <Pagination />

</div>    

  )
}


