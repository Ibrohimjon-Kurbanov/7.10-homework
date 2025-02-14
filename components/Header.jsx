import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-3 bg-[#14161A]">
      <div className="container flex items-center justify-between">
        <Link>
          <img src="../images/site-logo.svg" alt="" width={168} height={24} />
        </Link>
        <div className="flex items-center gap-[20px] ">
          <select
            className="outline-none border-0 text-white p-1 "
            name=""
            id=""
          >
            <option className="text-black">USD</option>
            <option className="text-black">EUR</option>
            <option className="text-black">RUB</option>
          </select>
          <button className=" cursor-pointer bg-[rgb(135_206_235)] text-[rgba(0,0,0,0.87)] py-2 px-[18px] rounded font-medium tracking-[0.4px] leading-[24.5px] text-sm">
            WATCH LIST
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
