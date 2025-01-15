import Counter from "../Counter";
import Footer from "../Footer";

const CounterPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Counter />
      </div>
      <Footer />
    </div>
  );
};

export default CounterPage;
