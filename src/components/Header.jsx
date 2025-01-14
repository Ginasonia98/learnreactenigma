/* eslint-disable react/prop-types */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Input,
  // Button,
} from "@nextui-org/react";
import PropTypes from "prop-types"; // Import PropTypes
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { useState } from "react";
//Ini adalah utilitas dari pustaka prop-types yang digunakan untuk mendefinisikan
// dan memvalidasi tipe properti (props) yang diterima oleh suatu komponen. Ini
// membantu memastikan tipe data yang benar dan menghindari kesalahan saat runtime.
import { useParams } from "react-router-dom";

const AcmeLogo = () => {
  //Komponen React yang sederhana yang mengembalikan logo dalam format SVG. Ini
  // adalah logo merek yang digunakan untuk situs web atau aplikasi.
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      {/* fill = none : untuk Mengatur agar latar belakang transparan
      fill="currentColor": Mengatur warna isi logo mengikuti warna teks saat ini.
      Logo ini digambar dalam elemen SVG dengan lebar dan tinggi 36.*/}
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  // Ketebalan garis tepi ikon
  width,
  height,
  ...props
}) => {
  return (
    //Ikon yang digambar berbentuk kaca pembesar dengan lingkaran dan garis pemegangnya.
    <svg
      aria-hidden="true"
      //memastikan ikon ini tidak dibaca oleh pembaca layar (untuk aksesibilitas)
      //karena hanya bersifat dekoratif.
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
      //Properti ...props memungkinkan pengiriman properti tambahan seperti event
      //handler ke elemen SVG.
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

// PropTypes validation
SearchIcon.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
//size, strokeWidth, width, dan height harus berupa angka.
// Jika ada properti yang tidak sesuai tipe data yang ditentukan, peringatan akan
//ditampilkan di konsol saat pengembangan.

const Header = () => {
  // const [message, setMessage] = useState("Hello World");
  const [username, setUsername] = useState(useParams().username);
  const navigate = useNavigate(); // Inisialisasi navigate

  //componentDidMount
  // useEffect(() => {
  //   alertUser();
  //   //akan ketrigger pada komponen willunmount
  //   return () => {
  //     alert("WILL UNMOUNT");
  //   };
  // }, []);
  // const alertUser = () => {
  //   alert("DID MOUNT");
  // };

  // //componentdidupdate dan component didmount
  // useEffect(() => {
  //   alert("DID UPDATE");
  // }, [message]); //array of depedencies

  // const changeMessage = () => {
  //   setMessage("State Changed");
  // };

  const handleLogout = () => {
    setUsername(null); // Menghapus username
    alert("You have been logged out."); // Opsional: Berikan konfirmasi
    navigate("/sign-up"); // Navigasi ke halaman sign-up setelah logout
  };

  const goToProfile = () => {
    // Navigasi ke halaman profil dengan username yang tepat
    navigate(`/profile/${username}`);
  };

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <div className="text-purple-600">
            <AcmeLogo />
          </div>
          <p className="hidden sm:block font-bold text-inherit text-purple-600">
            Enigma
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="secondary" href="#">
              Integration
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{username}</p>
            </DropdownItem>
            {/* "My Settings" mengarah ke /profile/:username */}
            <DropdownItem key="settings" onPress={goToProfile}>
              My Settings
            </DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onPress={handleLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <Heading /> {/* Menjaga komponen Heading tetap ada */}
    </Navbar>
  );
};

export default Header;
