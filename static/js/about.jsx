'use strict';

function About() {
  return(
    <div><p>About the Author!</p>
    <p>Charlotte Bourg</p>
    <p><a href= "https://github.com/charlotte-bourg">GitHub</a></p>
    </div>

  );
}

ReactDOM.render(<About />, document.querySelector('#about-info'));
