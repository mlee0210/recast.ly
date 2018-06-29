// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={props.videos[0]} /> 
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={props.videos} />
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    this.options = {key: 'AIzaSyB6QS1JCG27ye_4dWmcURtFi3M5SjgnBlc', max: 5, query: ''};
  }
  
  handleClick(video) {
    this.setState ({
      currentVideo: video
    });
  }
  
  setVideoData(data) {
    this.setState ({
      videoList: data,
      currentVideo: data[0]
    });
  }

  handleSearch(word) {
    this.options.query = word;
    searchYouTube(this.options, this.setVideoData.bind(this));

  }

  render() {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onClick={this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} /> 
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onClick={this.handleClick.bind(this)} />
          </div>
        </div>
      </div>    
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



