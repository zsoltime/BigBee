import React, { Component } from 'react'
import  {Consumer} from '../../context';
import  axios from 'axios';
class Search extends Component {

    state={
        trackTitle:''
    }
    findTrack(dispatch,e){
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=>{
            dispatch({
                type:'SEARCH_TRACKS',
                payload:res.data.message.body.track_list
            })
            this.setState({trackTitle:''})
        })
        .catch(err=>console.log(err))
    }
    onChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                <Consumer>
                    {
                        value=>{
                            const {dispatch}=value;
                            return(
                                <div className='card card-body mb-4 p-4'>
                            <h1 className='display-4 text-center'>
                                <i className="fas fa-music"/> Search for a song
                            </h1>
                            <p className='lead text-center'>Get the lyrics for an song</p>
                            <form onSubmit={this.findTrack.bind(this,dispatch)}>
                                <div className='form-group' >
                                    <input type="text" className='form-control form-control-lg' 
                                    placeholder='Song Title' name='trackTitle' 
                                    value={this.state.trackTitle} onChange={this.onChange}/>
                                </div>
                                <button className='btn btn-dark btn-block btn-lg mb-5' type="submit">Get Track Lyrics</button>
                            </form>
                            </div>
                            )
                        }
                    }
                </Consumer>
            </div>
        )
    }
}
export default Search;