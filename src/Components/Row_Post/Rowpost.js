import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import YouTube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
function Rowpost(props) {
    
        const [movies, setMovies] = useState([])
        const [urlid, setUrlid] = useState('')
        useEffect(() => {
            axios.get(props.url).then(response=>{
                console.log(response.data)
                setMovies(response.data.results)
            }).catch(err=>{
                //alert('Network Error')
            }) 
        }, [])
        
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
              // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
        };   
    const handleMovie = (id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlid(response.data.results[0])
            }else{
                console.log('Trailer not availabel')
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="Row_Posters">
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)
                    } className = {props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                )}
                
                
            </div>
          {urlid &&  <YouTube videoId={urlid.key} opts={opts}  />}
        </div>
    )
}

export default Rowpost
