import React, {useState, useEffect, useRef} from "react";

function Dashboard() {

    const [currencies, setCurrencies] = useState([]);
    const [pair, setPair] = useState("");
    const [price, setPrice] = useState("0.00");
    const [pastData, setPastData] = useState({});

    const ws = useRef(null);
    let first = useRef(false);
    const url = "https://api.pro.coinbase.com";

    useEffect(() => {
        ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

        const apiCall = async () => {
            await fetch(url + "/products")
              .then((res) => res.json())
              .then((data) => (pairs = data));
        
            let filtered = pairs.filter((pair) => {
              if (pair.quote_currency === "USD") {
                return pair;
              }
            });

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
      },[])



    return (
    <div className="dashboardWrapper">
        <p>Dashboard</p>
    </div>
    );
}

export default Dashboard;
