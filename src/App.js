import './App.css';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
function App() {

  return (
    <div className="App">
         <h3>App Component</h3>
         <HeaderContainer/>
        <HomeContainer/>
    </div>
  );
}

export default App;
