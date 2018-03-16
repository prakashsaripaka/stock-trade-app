import React, { Component } from 'react';
//import './App.css';

//import {connect} from 'react-redux';

/*import PLPAction from '../actions/actions';
import searchSelector from '../selectors/plp-selectors';*/


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          tradeList : [],
          isLoading: false,
        }
    }

 componentDidMount() {
   this.setState({ isLoading: true });


    fetch("http://localhost:3000/trade")
      .then(response => response.json())
      .then(data => this.setState({ tradeList: data, isLoading: false  }));
  }


    

  render() {

     const { isLoading , tradeList} = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="App ">
         <div>
        {tradeList.map(trade =>
          <div key={trade._id}>
          <span>{trade.title}</span>
            <span>{trade.content}</span>
          </div>
        )}
      </div>
          

      </div>
    );
  }
}

/*const convertStateToProps = (state) => {
    return {
        products : searchSelector(state),
        searchString : state.searchString,
        sortBy : state.sortBy
    }
};

const convertDispatchToProps = (dispatch)=> {
    return { dispatch };
};


export default connect(convertStateToProps, convertDispatchToProps)(App);*/

export default App;