import Header from "../components/Header";

function Mainlayout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}
export default Mainlayout;
