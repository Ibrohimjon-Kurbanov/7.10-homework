import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApexCharts from "react-apexcharts";

const ApexChart = () => {
  const options = {
    chart: {
      type: "area",
      background: "#14161a",
      toolbar: { show: false },
    },
    grid: {
      show: true,
      borderColor: "#121417",
      strokeDashArray: 0,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: [
        "8:15 AM",
        "9:15 AM",
        "9:45 AM",
        "10:15 AM",
        "10:45 AM",
        "11:15 AM",
        "11:45 AM",
        "12:15 PM",
        "12:45 PM",
        "1:15 PM",
        "1:45 PM",
        "2:15 PM",
        "2:44 PM",
        "3:15 PM",
        "3:45 PM",
        "4:15 PM",
        "4:45 PM",
        "5:15 PM",
        "5:45 PM",
        "6:15 PM",
        "6:45 PM",
        "7:15 PM",
        "8:15 PM",
        "8:45 PM",
        "9:15 PM",
        "9:45 PM",
      ],
      labels: { style: { colors: "#fff" } },
    },
    yaxis: { labels: { style: { colors: "#fff" } } },
    stroke: { curve: "smooth", width: 2 },
    dataLabels: { enabled: false },
    tooltip: { theme: "dark" },
  };

  const series = [
    {
      name: "Price (Past 1 Days) in INR",
      data: [
        2920000, 2940000, 2960000, 2980000, 3000000, 3020000, 3040000, 3060000,
        3080000,
      ],
    },
  ];

  return (
    <div>
      <ApexCharts
        options={options}
        series={series}
        type="line"
        height={646}
        width={1000}
      />
    </div>
  );
};

function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        if (response.status == 200) {
          setData(response.data);
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex w-full max-w-[1800px]  mx-auto">
      <div className="max-w-[547px] px-[25px] mt-[25px] flex flex-col items-center border-r-2 border-[rgb(128,128,128)] ">
        <img
          src={data?.image?.large}
          alt={data.name}
          width={200}
          height={200}
          className="object-cover mb-5"
        />
        <h1 className="text-white font-bold text-5xl leading-[56px] mb-6">
          {data?.name}
        </h1>
        <div className="max-w-[440px]">
          <p className="text-white text-base font-normal leading-[28px] tracking-[0.15px] mb-[30px] ">
            {data?.description?.en?.slice(0, 188)}
          </p>
          <div>
            <h3 className="text-white text-2xl font-bold leading-[32px] mb-5">
              Rank:
              <span className="font-thin"> {data.market_cap_rank}</span>
            </h3>
            <h3 className="text-white text-2xl font-bold leading-[32px] mb-5">
              Current Price: ₹
              <span className="font-thin">
                {data?.market_data?.current_price.eth}
              </span>
            </h3>
            <h3 className="text-white text-2xl font-bold leading-[32px] mb-5">
              Market Cap: ₹
              <span className="font-thin">
                {data?.market_data?.market_cap.bch}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-5">
        {" "}
        <ApexChart></ApexChart>
      </div>
    </div>
  );
}
export default Details;
