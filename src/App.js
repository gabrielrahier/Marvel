import './App.css';

function App() {

const data = {title: "Deadpool & Wolowerine"}


  return (
    <div className="App">
      <div id="tout">
	<div id="titre">
    <h1>MARVEL</h1>
    <h1>COUNTDOWN</h1>
    </div>
	<div id="trucs">
    	<div id="temps">
        <p><span style ={{color:"#ED1D24", fontSize: "60px"}} >7</span> days </p>
      	<p> until </p>
        </div>
    <img src="https://image.tmdb.org/t/p/w500/uxBHXaoOvAwy4NpPpP7nNx2rXYQ.jpg" alt="https://image.tmdb.org/t/p/w500/uxBHXaoOvAwy4NpPpP7nNx2rXYQ.jpg" width="280px" height="383px"/>
    <p>{data.title}</p>
	</div>
    <div id="machins">
      <p>Type : Movie</p>
      <p>Third entry in the "deadpool" franchise.</p>
      <p>Plot : TBA</p>
	</div>
</div>

    </div>
  );
}

export default App;
