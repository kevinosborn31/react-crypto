// filters currency based on parameter
function filterCurrency(currency) {

}

function getData(currency) {
    const ws = useRef(null);
    const url = useRef(false);
    const first = "https://api.pro.coinbase.com";

    // connect to websocket API
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    
    const apiCall = async () => {
        await fetch(`${url}/products`)
        .then((res) => res.json())
        .then((data) => (pairs = data));

        let filtered = pairs.filter((pair) => {
            if (pair.quote_currency === currency) {
              return pair;
            }
          });

        // sort filtered currency pairs alphabetically
        filtered = filtered.sort((a, b) => {
            if (a.base_currency < b.base_currency) {
                return -1;
            }
            if (a.base_currency > b.base_currency) {
                return 1;
            }
            return 0;
        });
        setCurrencies(filtered);

        first.current = true;
    };

    apiCall()
}