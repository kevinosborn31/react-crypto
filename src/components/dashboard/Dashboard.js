import React, {useState, useEffect} from "react";
import getData from "../../utils/getData";

function Dashboard() {

    const [currencies, setCurrencies] = useState([]);
    const [pair, setPair] = useState("");
    const [price, setPrice] = useState("0.00");
    const [pastData, setPastData] = useState({});

    useEffect(() => {
        getData("USD");
    }, [])



    return (
    <div className="dashboardWrapper">
        <p>Dashboard</p>
    </div>
    );
}

export default Dashboard;
