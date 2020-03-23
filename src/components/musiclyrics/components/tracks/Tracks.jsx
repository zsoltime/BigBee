import React, { Component } from 'react'
import Track from "./Track";
import Spinner from '../layout/Spinner';
import {Consumer} from '../../context';
import {Redirect} from 'react-router-dom';
class Tracks extends Component {
    state={redirect:false}
    handleMain = _ => {
        this.setState({redirect:true})
      };
    render() {
        if(this.state.redirect) return<Redirect to='/'/>
        return (
            <>
            <Consumer>
        {value=>{
            console.log(value,'tracks');
            const {track_list,heading}=value;
            if(track_list===undefined || track_list.length===0){
                return <Spinner/>
            }else{
                return(
                <React.Fragment>
                    <h3 className="text-center mb-4">{heading}</h3>
                    <div className="row">
                        {track_list.map(item=>(
                            <Track key={item.track.track_id} track={item.track}/>
                        ))}
                    </div>
                </React.Fragment>
                )
            }
        }}
        </Consumer>
        <button onClick={this.handleMain} className="btn btn-dark btn-sm">
        Switch to Main
      </button>
      </>
        )
    }
}
export default (Tracks);