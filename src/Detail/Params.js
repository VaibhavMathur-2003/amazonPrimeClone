
import React from 'react'
import movie from "../Movie/movie.json"
import music from "../Movie/music.json"
import sports from "../Movie/sports.json"
import { useParams } from 'react-router-dom'
import Detail from './Detail';

const Params = () => {
  const { pathname } = useParams();
  return (
        <>
          {
            movie
              .filter((i) => i.id === pathname)
              .map((i) => (
                <div key={i.id}>
                    <Detail {...i}/>
                </div>
              ))}
              {
            music
              .filter((i) => i.id === pathname)
              .map((i) => (
                <div key={i.id}>
                    <Detail {...i}/>
                </div>
              ))}
              {sports
              .filter((i) => i.id === pathname)
              .map((i) => (
                <div key={i.id}>
                    <Detail {...i}/>
                </div>
              ))}  
        </>
  )
}

export default Params