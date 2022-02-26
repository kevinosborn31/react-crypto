export const formatData = (data) => {
    let finalData = {
        labels: [],
        datasets: [
            {
                label: "Price",
                data: [],
                backgroundColor: "rgb(255, 99, 132, 0.8)",
                borderColor: "rgba(255, 99, 132, 0.2)",
                fill: false
            }
        ]
    };

    // convert dates from timestamp to mm/dd/yy format
    let dates = data.map((val) => {
        const ts = val[0];
        let date = new Date(ts * 1000);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let final = `${month}-${day}-${year}`;
        return final;
    });

    // get ending price from coinbase API
    let princeArr = data.map((val) => {
        return val[4];
    });

    // reverse price array so it is in chronological order
    princeArr.reverse();

    // do same for dates
    dates.reverse();

    // price array will be used as dataset for Chartjs
    finalData.labels = dates;

    // price array will be used as dataset for Chartjs
    finalData.datsets[0].data = priceArr;

    return finalData;
};