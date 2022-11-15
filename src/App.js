import './App.css';
import {connection, payoutCurrenciesStream, ratesStream, subscribeTicks, unsubscribeTicks} from "./api/api";
import {Button} from "./components/Button/Button";
// import {Accordion} from "./components/Accordion/Accordion";
import {useEffect, useState} from "react";

function App() {

    const [currencies, setCurrencies] = useState([]);
    const [rates, setRates] = useState([]);
    const [base, setBase] = useState('');


    const updateRates = (res) => {
        console.log('updateRates, res = ', res)
        const rts = res.exchange_rates.rates
        console.log('updateRates2, rts = ', rts)
        setRates(rts)
    }

    const getRates = async () => {
        if (base !== '') {
            console.log('getRates = ', base)
            const res = await ratesStream(base);
            console.log('getRates2 = ', res)
            updateRates(res)
            connection.addEventListener("message", updateRates);
            console.log('getRates3 DONE = ', base)
        }
    }

    const updateCurrencies = (res) => {
        console.log('updateCurrencies, res = ', res)
        const cur = res.payout_currencies
        if (cur) {
            setCurrencies(cur)
        }
        console.log('cur = ', cur)
        // console.log('cur[0] = ', cur[0])
        if (cur?.length) {
            setBase(cur[0])
        }
    }

    const getCurrencies = async () => {
        const res = await payoutCurrenciesStream();
        updateCurrencies(res)
        // connection.addEventListener("message", updateCurrencies);
    }

    // download currencies
    useEffect(() => {
        getCurrencies()
        // getRates()
    }, [])

    // download rates
    useEffect(() => {
        if (base !== '')
            getRates()
    }, [base])


    return (
        <div className="App">
            <div className="Sub-panel">
                <input className={'inputValue'} type={'text'}/>
                <Button name={'Subscribe'} cb={subscribeTicks}/>
                <Button name={'Unsubscribe'} cb={unsubscribeTicks}/>
                {/*<button className={'btn'} onClick={subscribe}>Subscribe</button>*/}
                {/*<button className={'btn'} onClick={unsubscribe}>Unsubscribe</button>*/}
            </div>
            {/*<div className={'Accordion-panel'}>
                <Accordion name={'btn-1'} text={'some text 1'}/>
                <Accordion name={'btn-2'} text={'some text 2'}/>
                <Accordion name={'btn-3'} text={'some text 3 some text 3 some text 3 some text 3'}/>
                <Accordion name={'btn-4'} text={'some text 4'}/>
            </div>*/}

            {currencies && currencies.map(e => <div key={e}>
                <div>{e}</div>
                <div>{rates[e]}</div>
            </div>)}
            rates.length = {rates && rates.length}, base = {base}
            {/*{rates && rates.map(e => <span key={e}>{e}</span>)}*/}

        </div>
    );
}

export default App;
