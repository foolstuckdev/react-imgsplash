import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Spinner from './Spinner';
import axios from "../api/unsplash";

class App extends React.Component {
  state = { images: [], errorMessage: '' };

  onSearchSubmit = async term => {
    const response = await axios.get("/search/photos", {
      params: { query: term }
    });

    if(!response){
        this.setState({errorMessage: 'Oops! An error occurred. Please try again later.'})
        return;
    }
    this.setState({ images: response.data.results });
    
  };

//   renderContent(){
//       console.log(this.state.errorMessage)
//       console.log(this.state.image)
//     if(this.state.errorMessage && !this.state.image){
//         return <div>Error: {this.state.errorMessage}</div>
//     }

//     if (!this.state.errorMessage && this.state.image) {
//         return (
//           <div className="ui container" style={{ marginTop: "10px" }}>
//             <SearchBar onSubmit={this.onSearchSubmit} />
//             <ImageList images={this.state.images} />
//           </div>
//         );
//       }
  
//       return <Spinner message="Loading .."/>
//   }

  render() {
    // return(this.renderContent());

    return (
        <div className="ui container" style={{ marginTop: "0.8vh" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      );
  }
}

export default App;
