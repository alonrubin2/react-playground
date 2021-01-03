
import './App.css';
import Menu from './Menu/Menu';
import Menuitem from './Menu/Menuitem/Menuitem';
import SpecialButton from './SpecialButton/SpecialButton'
import Counter from './Counter/Counter';
import Toggle from './Toggle/Toggle'
import RandomColorSquare from './RandomColorSqare/RandomColorSquare'
import GradiantButton from './GradiantButton/GradiantButton'



function App() {
  return (
    <div className="App">
        <Menu>
            <Menuitem route="/">Home</Menuitem>
            <Menuitem route="/about">About</Menuitem>
            <Menuitem route="/contact">Contact</Menuitem>
        </Menu>
        <hr/>
        <SpecialButton />
        <hr />
        <Counter />
        <hr />
        <Toggle />
        <hr />
        <RandomColorSquare />
        <hr/>
        <GradiantButton color1='#FFC300' color2='#C70039' height={200} />
        <hr/>
        <GradiantButton color1='green' color2='brown' height={100} />
        <hr/>
        <GradiantButton color1='#44e0fc' color2='#fc892a' height={130} />
        <hr/>
    </div>
  );
}

export default App;
