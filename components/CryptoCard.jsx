function CryptoCard({ crypto }) {
  return (
    <div className="flex items-center flex-col">
      <img
        className="mb-2.5"
        src={crypto.image}
        alt=""
        width={80}
        height={80}
      />
      <h4 className="text-base font-normal leading-[19px] tracking-[0%] text-white flex items-center gap-1 justify-center text-center mb-[2px]">
        {crypto.symbol}
        <span className="text-[#0ECB81] font-medium leading-[19px] text-base">
          +{crypto.atl.toFixed(2)}
        </span>
      </h4>
      <h3 className="text-[21.48px] font-medium leading-[25px] tracking-[0%] text-white">
        <span className="text-base">₹</span> {crypto.current_price.toFixed(2)}
      </h3>
    </div>
  );
}
export default CryptoCard;
