import { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { axiosInstance } from "../../lib/axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const WishlistPage = () => {
  const counterSelector = useSelector((store) => store.counter);
  const messageSelector = useSelector((store) => store.message);

  const [wishlistInput, setWishlistInput] = useState("");
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch wishlist items from the API
  const fetchWishListItems = async () => {
    try {
      const response = await axiosInstance.get("/wishlist-items");
      setWishlistItems(response.data);
    } catch (error) {
      // Menangani error saat fetch data
      toast.error("Server error,please wait for a moment"); // Menampilkan toast error jika gagal
      console.error(error); // Menampilkan error di console untuk debugging
    }
  };

  // Add a new item to the wishlist
  const addWishlist = async () => {
    if (!wishlistInput.trim()) {
      toast.error("Wishlist item cannot be empty"); // Menampilkan toast error jika input kosong
      return;
    }

    try {
      await axiosInstance.post("/wishlist-items", {
        name: wishlistInput,
      });
      setWishlistInput(""); // Kosongkan input setelah berhasil ditambahkan
      await fetchWishListItems(); // Ambil data terbaru setelah POST
      toast.success("You have added an item"); // Menampilkan toast sukses
    } catch (e) {
      toast.error("Server error,please wait for a moment"); // Menampilkan toast error jika gagal POST
      console.error(e); // Menampilkan error di console untuk debugging
    }
  };

  useEffect(() => {
    fetchWishListItems(); // Memanggil fungsi fetchWishListItems saat komponen pertama kali dirender
  }, []);

  return (
    <>
      <div className="flex items-center p-4 gap-4">
        <Input
          value={wishlistInput}
          onChange={(event) => setWishlistInput(event.target.value)}
          label="Wishlist Item"
          color="secondary"
        />
        <Button onPress={addWishlist} color="primary">
          Add
        </Button>
      </div>
      <p className="text-center">{wishlistInput}</p>
      <ul className="list-decimal list-inside text-center">
        {wishlistItems.map((item, index) => (
          <li key={`${item.name}-${index}`}>{item.name}</li>
        ))}
      </ul>
      <Link
        to="/sign-up"
        className="text-blue-500 hover:underline flex justify-center items-center mt-3"
      >
        Sign up now!
      </Link>
      <br/>
      <Link
        to="/"
        className="text-blue-500 hover:underline flex justify-center items-center mt-3"
      >
        Back Home
      </Link>
      <p className="text-center text-xl font-semibold">
        Global count : {counterSelector.count}
      </p>
      <p className="text-center text-xl font-semibold">
        Global message : {messageSelector}
      </p>
    </>
  );
};

export default WishlistPage;
