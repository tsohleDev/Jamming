import React from "react";

export class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                <input value="New Playlist"/>
                {/* <!-- Add a TrackList component --> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}