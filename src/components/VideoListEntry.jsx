var VideoListEntry = (props) => (

  // constructor(props) {
  //   super(props);

  //   this.handleVideoClick = this.handleVideoClick.bind(this);
    
  // }

  // handleVideoClick() {
  //   console.log('In VideoListEntry handleVideoClick');
  //   this.props.onClick(this.props.index);
  // }

  // render() {
  <div className="video-list-entry" onClick={ ()=> props.onClick(props.index)}>
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{props.video.snippet.title}</div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
);



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
