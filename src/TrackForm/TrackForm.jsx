

import { useState } from "react";

export default function TrackForm(props) {

    const [formData, setFormData] = useState({
        title: '',
        artist: '',
    })

    function handleChange(event) {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmite(event){
        event.preventDefault()
        props.createTrack(formData)
    }

    return (
        <form onSubmit={handleSubmite}>
            <label htmlFor="title">Title:</label>
            <input type="text" 
            name="title" 
            id="title" 
            value={formData.title} 
            onChange={handleChange} />

            <label htmlFor="artist">Artist</label>
            <input type="text"
            name="artist"
            id="artist"
            value={formData.artist}
            onChange={handleChange} />
            
            <button>Add Track</button>
        </form>
    )
}