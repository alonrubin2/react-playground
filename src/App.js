
import './App.css';
import Menu from './Menu/Menu';
import Menuitem from './Menu/Menuitem/Menuitem';
import SpecialButton from './SpecialButton/SpecialButton'
import Counter from './Counter/Counter';
import Toggle from './Toggle/Toggle'
import RandomColorSquare from './RandomColorSqare/RandomColorSquare'



function App() {
  return (
    <div className="App">
        <Menu>
            <Menuitem route="/">Home</Menuitem>
            <Menuitem route="/about">About</Menuitem>
        </Menu>
        <hr/>
        <SpecialButton />
        <hr />
        <Counter />
        <hr />
        <Toggle />
        <hr />
        <RandomColorSquare />
    </div>
  );
}

export default App;
