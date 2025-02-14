import Carusel from "../components/Carusel";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);

  function handlePaginate(event, position) {
    setCurrent(position);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=${current}&sparkline=false&price_change_percentage=24h`
      )
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [current]);

  return (
    <>
      <Carusel />
      <div className="container">
        <div className="py-5">
          <h2 className="text-center text-[34px] leading-[41.99px] tracking-[0.25px] text-white font-normal mb-3">
            Cryptocurrency Prices by Market Cap
          </h2>
          <input
            className="w-full pt-6 px-[14px] pb-5 mb-5 text-base leading-[16px] tracking-[0.15px] text-input outline-0 rounded border border-[rgba(255,255,255,0.23)]"
            type="text"
            placeholder="Search For a Crypto Currency.."
          />
          <div className="flex items-center justify-between bg-[#87CEEB] py-5 px-4 rounded-t border-b border-[rgb(81,81,81)]">
            <h3 className="text-sm text-black font-bold leading-[24px] tracking-[0.15px] ">
              Coin
            </h3>
            <div className="flex items-center gap-[172px]">
              <h3 className="text-sm text-black font-bold leading-[24px] tracking-[0.15px]   ">
                Price
              </h3>
              <h3 className="text-sm text-black font-bold leading-[24px] tracking-[0.15px]   ">
                24h Change
              </h3>
              <h3 className="text-sm text-black font-bold leading-[24px] tracking-[0.15px] ">
                Market Cap
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-center  bg-[#16171A] shadow-lg">
            {data.length > 0 &&
              data.map((crypto, index) => (
                <div
                  key={index}
                  className="border-b border-[rgb(81,81,81)] flex items-center justify-between pt-4 pl-4 pb-7 pr-[15px]"
                >
                  <div className="flex items-center gap-[15px]">
                    <img
                      src={crypto.image}
                      alt="crypto image"
                      width={50}
                      height={50}
                    />
                    <h2 className="text-white text-[22px] font-normal leading-[31.46px] tracking-[0.15px] uppercase">
                      {crypto.symbol}
                      <span className="block text-sm leading-[20px] tracking-[0.15px] text-[rgb(169,169,169)] capitalize">
                        {crypto.id}
                      </span>
                    </h2>
                  </div>
                  <div className="flex items-center  gap-[160px]">
                    <p className="text-sm font-normal text-white leading-[20.02px] tracking-[0.15px] ">
                      ₹ {crypto.current_price}
                    </p>
                    <p className="flex items-center justify-between gap-[18px] ">
                      <span className="text-[rgb(14,203,129)] leading-[20.02px] tracking-[0.15px] text-sm ">
                        +{crypto.high_24h}
                      </span>
                    </p>
                    <p className=" text-sm font-normal text-white leading-[20.02px] tracking-[0.15px] ">
                      ₹ {crypto.atl.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex items-center justify-center mt-5">
            <Pagination
              count={10}
              page={current}
              onChange={handlePaginate}
              variant="outlined"
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": { color: "rgb(135, 206, 235)" },
                "& .MuiPaginationItem-page.Mui-selected": {
                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                  color: "rgb(135, 206, 235)",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
