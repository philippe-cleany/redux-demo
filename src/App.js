import React, { Component } from 'react';
import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + 1
      }
      return state
    break
    case "SUB":
      state = {
        ...state,
        result: state.result - 1
      }
      return state
    break
  }
  return state
}

const action = type => store.dispatch({type});

const store = createStore(reducer, {
  result: 1,
});

class App extends Component {
  render() {
    return (

        <Counter
          value={store.getState()}
          onIncrement={() => action('ADD')}
          onDecrement={() => action('SUB')}
        />

    );
  }
}

const Counter = ({ value, onIncrement, onDecrement }) => {
return (
  <div className="ui raised very padded text container segment">
    <h2 style={{fontSize: '45em'}}className="ui header">{value.result}</h2>
    <button className="ui large positive button" onClick={onIncrement}>+</button>
    <button className="ui large negative button" onClick={onDecrement}>-</button>
  </div>
  );
}

store.subscribe(() => {
  console.log('%c [store]: ', 'color:green;', store.getState());
})

export default App;
