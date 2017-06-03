class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };

    this.handleClick = this.handleClick.bind(this);

  }  

  handleClick(videoIndex) {
    console.log('In App handleClick');
    //console.log(e.target.value);
    this.setState({
      selected: videoIndex
    });
  }
  
  render() {
    console.log('In App render');
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer 
            video={this.props.videos[this.state.selected]}
          />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.videos} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
