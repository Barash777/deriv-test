import './App.css';
import {subscribeTicks, unsubscribeTicks} from "./api/api";
import {Button} from "./components/Button/Button";
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    const subscribe = () => {
        subscribeTicks()
    }

    const unsubscribe = () => {
        unsubscribeTicks()
    }

    return (
        <div className="App">
            <div className="App-inside">
                <input className={'inputValue'} type={'text'}/>
                <Button name={'Subscribe'} cb={subscribeTicks} />
                <Button name={'Unsubscribe'} cb={unsubscribeTicks} />
                {/*<button className={'btn'} onClick={subscribe}>Subscribe</button>*/}
                {/*<button className={'btn'} onClick={unsubscribe}>Unsubscribe</button>*/}
                <Accordion name={'test-1'} text={'some text'} />
                <Accordion name={'test-2'} text={'some text'} />
                <Accordion name={'test-3'} text={'some text'} />
                <Accordion name={'test-4'} text={'some text'} />
            </div>

        </div>
    );
}

export default App;
