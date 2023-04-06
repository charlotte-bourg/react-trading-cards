'use strict';

function Homepage() {
  return(
    <div><p>Welcome to the trading card site!</p>
    <p><a href= "/cards">Cards</a></p>
    <p><a href= "/about">About the Author</a></p>
    <img src="/static/img/balloonicorn.jpg"></img>
    </div>

  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
