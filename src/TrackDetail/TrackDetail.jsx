export default function TrackDetail(props) {
  if (props.selectedTrack === null) {
    return (
      <section>
        <h2>No Track Selected</h2>
      </section>
    );
  }

  return (
    <section>
      <h2>{props.selectedTrack.title}</h2>
      <span>Artist: {props.selectedTrack.artist}</span>
      <button onClick={() => props.deleteTrack(props.selectedTrack._id)}>
        Delete
      </button>
    </section>
  );
}
