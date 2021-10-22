import './App.css';

function App({name,email,imgL}) {
  return (
    <div className="App">
      <img src={imgL} alt="" />
      <h3>{name}</h3>
      <h4>{email}</h4>
    </div>
  );
}

export default App;
