import React, {useState, useEffect} from "react";

function Dashboard() {

    const [currencies, setCurrencies] = useState([]);
    const [pair, setPair] = useState("");
    const [price, setPrice] = useState("0.00");
    const [pastData, setPastData] = useState({});


    const ws = useRef(null);
    const url = useRef(false);
    const first = "https://api.pro.coinbase.com";

    return (
    <div className="dashboardWrapper">
        <p>Dashboard</p>
    </div>
    );
}

export default Dashboard;
