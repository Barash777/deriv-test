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
            <div className="Sub-panel">
                <input className={'inputValue'} type={'text'}/>
                <Button name={'Subscribe'} cb={subscribeTicks} />
                <Button name={'Unsubscribe'} cb={unsubscribeTicks} />
                {/*<button className={'btn'} onClick={subscribe}>Subscribe</button>*/}
                {/*<button className={'btn'} onClick={unsubscribe}>Unsubscribe</button>*/}
            </div>
            <div className={'Accordion-panel'}>
                <Accordion name={'btn-1'} text={'some text 1'}/>
                <Accordion name={'btn-2'} text={'some text 2'}/>
                <Accordion name={'btn-3'} text={'some text 3 some text 3 some text 3 some text 3'}/>
                <Accordion name={'btn-4'} text={'some text 4'}/>
            </div>

        </div>
    );
}

export default App;
