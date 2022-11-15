import DerivAPIBasic from "https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic";

const app_id = 1089; // Replace with your app_id or leave as 1089 for testing.
export const connection = new WebSocket(
    `wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`
);
const api = new DerivAPIBasic({ connection });
const tickStream = () => api.ticks({ ticks: "R_50", subscribe: 1 });
export const payoutCurrenciesStream = () => api.payoutCurrencies({ payout_currencies: 1 });
export const ratesStream = (base) => api.exchangeRates({ exchange_rates: 1, base_currency: base });






// connection.onmessage = (ev) => {
//     console.log('testFunction, ev.message = ', JSON.parse(ev.data).msg_type)
// }

const tickResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
        console.log("Error : ", data.error.message);
        connection.removeEventListener("message", tickResponse, false);
        await api.disconnect();
    }
    if (data.msg_type === "tick") {
        console.log(data.tick);
    }
};

export const subscribeTicks = async () => {
    await tickStream();
    connection.addEventListener("message", tickResponse);
    console.log('tickStream()', tickStream())
};

export const unsubscribeTicks = () => {
    connection.removeEventListener("message", tickResponse, false);
    tickStream().unsubscribe();
    // api.unsubscribe();
    console.log('api', api)
    console.log('tickStream()', tickStream())
};

export const testFunction = () => {

}

// const ticks_button = document.querySelector("#ticks");
// ticks_button.addEventListener("click", subscribeTicks);
//
// const unsubscribe_ticks_button = document.querySelector("#ticks-unsubscribe");
// unsubscribe_ticks_button.addEventListener("click", unsubscribeTicks);