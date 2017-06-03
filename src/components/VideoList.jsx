class VideoList extends React.Component { 

  constructor(props) {
    super(props);
  }

  render () {
    console.log('In VideoList render');
    var cb = this.props.onClick;
    return ( 
      <div className="video-list media">
        {this.props.videos.map((video, index) => {
          return <VideoListEntry video={video} index={index} onClick={cb} />; 
        })}
      </div>
    );
  } 
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
