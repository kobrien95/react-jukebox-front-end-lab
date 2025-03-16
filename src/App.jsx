import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TrackForm from "./TrackForm/TrackForm";
import TrackList from "./TrackList/TrackList";
import TrackDetail from "./TrackDetail/TrackDetail";

import * as trackService from "./services/trackService";

function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      const data = await trackService.index();
      console.log(data, "<- data");

      setTracks(data);
    }

    fetchTracks();
  }, []);

  async function createTrack(dataFormFromTheForm) {
    try {
      const newTrack = await trackService.create(dataFormFromTheForm);
      console.log(newTrack, "<- this is our newTrack");
      setTracks([...tracks, newTrack]);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTrack(trackIdFromTrackDetails) {
    try {
      const respond = await trackService.deleteTrack(trackIdFromTrackDetails);

      if (respond.er) {
        throw new Error(respond.err);
      }

      const filteredTracksArray = tracks.filter((track) => {
        return track._id !== trackIdFromTrackDetails;
      });

      setTracks(filteredTracksArray);
      setSelectedTrack(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <TrackList tracks={tracks} />
      <TrackForm createTrack={createTrack} />
      {selectedTrack ? (
        <TrackDetail
          deleteTrack={deleteTrack}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      ) : null}
    </div>
  );
}

export default App;
