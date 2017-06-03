class App extends React.Component {
  constructor() {
    super();


    this.state = {
      selected: 0,
      videos: [],
      searchText: 'cats'
    };
    
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleData = this.handleData.bind(this);


    //Make a call with options and callback
    window.searchYouTube(this.state.searchText, this.handleData);

  }  

  handleSearch(searchText) {
    console.log(searchText);
    this.setState({
      searchText: searchText
    });
    window.searchYouTube(this.state.searchText, this.handleData);

  }

  handleClick(videoIndex) {
    this.setState({
      selected: videoIndex
    });

  }

  handleData(data) {
    if (data) {
      this.setState({
        videos: data.items
      });
    } else {
      console.log('no video data');
    }
  }

  
  render() {
    
    if (this.state.videos.length > 0) {

      return (
        <div>
          <Nav onClick={this.handleSearch} />
          <div className="col-md-7">
            <VideoPlayer 
              video={this.state.videos[this.state.selected]}
            />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={this.handleClick} />
          </div>
        </div>
      );
    } else {
      console.log('In empty array');
      return (
        <div>
          <h3>Loading.... </h3>
        </div>
      );
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
