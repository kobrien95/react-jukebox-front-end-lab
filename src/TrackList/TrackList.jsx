// Defining our function for TrackList, mapping throught the Array with .map()
export default function TrackList(props) {
  const trackLis = props.track.map((track) => {
    //returning a list of tracks using the track iD and the .map method
    return (
      <li key={track._id} onClick={() => props.setSelectedTrack(track)}>
        {track.title}: {track.artist}
      </li>
    );
  });

  return (
    <section>
      <h1>Track List</h1>
      {trackLis.length !== 0 ? ( //If the tracklist has something in the Array...
        <ul>{trackLis}</ul>
      ) : (
        <h2>Nothing to see here!</h2> // ^ Log the tracks if there isn't any tracks to log, respond with message listed.
      )}
    </section>
  );
}
