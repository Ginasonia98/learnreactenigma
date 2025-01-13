import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useRef, useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import TodoCard from "./components/TodoCard";
// import Button from "./components/Button";
// import ItemList from "./components/ItemList";
// import Timer from "./components/Timing";
// import Counter from "./components/CounterButton";
// import CheckboxExample from "./components/Checkbox";
// import ToDoApp from "./components/TodoCard";
// import Form from "./components/Form";


//materi Form and List
function App() {
  const inputRef = useRef();

  const [wishlistItems, setWishlistItems] = useState([]);
  

  const addWishlist = () => {
    const wishlistInputValue = inputRef.current.value;
    setWishlistItems([...wishlistItems, wishlistInputValue]);
    //duplicate array lama
    //keterangan menggunakan spread agar array dalam wishlistItems tetap ada, dan agar bisa bergabung dengan array inputan baru
  };

  return (
    <>
      <div className="flex items-center p-4 gap-4">
        <Input ref={inputRef} label="Wishlist Item" color="secondary" />
        <Button onClick={addWishlist} color="primary">
          Add
        </Button>
      </div>
      <ul className="list-decimal list-inside text-center">
        {wishlistItems.map((item) => {
          // eslint-disable-next-line react/jsx-key
          return <li>{item}</li>;
        })}
      </ul>
      {/* <ToDoApp/> */}
      {/* <Header /> */}
      <div className="flex flex-col items-center gap-6">
        {/* <TodoCard
          day="Monday"
          numberOfActivities={3}
          activities={["Mandi", "Sarapan", "Coding"]}
        /> */}
        {/* <TodoCard
          day="Tuesday"
          numberOfActivities={5}
          activities={["Jalan", "Belanja", "Editor", "Belajar", "Olahraga"]}
        /> */}
        {/* <TodoCard
          day="Wednesday"
          numberOfActivities={1}
          activities={["Mandi"]}
        /> */}
      </div>
      <div className="mt-6">
        {/* <Button /> */}
        {/* <Counter /> */}
      </div>
      {/* <Form/> */}
      {/* <CheckboxExample /> */}
      <div className="mt-6">{/* <ItemList /> */}</div>
      {/* <Timer /> */}
      {/* <Footer message="Halo Dunia" /> */}
    </>
  );
}

export default App;
