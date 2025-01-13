import { Component } from "react";

class Timer extends Component {
  //Komponen ini adalah subclass dari Component, yang berarti mewarisi
  //fungsionalitas dari kelas Component.
  constructor(props) {
    super(props);
    //Merupakan konstruktor yang dipanggil pertama kali saat objek dari
    // kelas Timer dibuat. Konstruktor menerima props sebagai argumen,
    // yang kemudian diteruskan ke kelas induk dengan super(props)
    this.state = {
      seconds: 0,
    };
    //Menetapkan state awal untuk komponen. Di sini, state memiliki properti
    //seconds yang dimulai dengan nilai 0. State digunakan untuk melacak
    //waktu yang telah berlalu dalam detik.
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      //Di dalam metode ini, kita memulai sebuah interval menggunakan
      // setInterval yang akan menjalankan fungsi setiap detik (1000 ms).
      this.setState((prevState) => ({
        //setState() digunakan untuk memperbarui nilai state seconds. Fungsi
        // setState menerima fungsi callback yang menerima nilai state
        //sebelumnya (prevState), dan kita menambahkannya dengan 1 setiap
        //kali fungsi dipanggil.
        seconds: prevState.seconds + 1,
      }));
    }, 1000); // Increment every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  //Di sini, kita memanggil clearInterval(this.interval) untuk menghentikan
  //interval yang telah dimulai di componentDidMount

  render() {
    return (
      <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-lg mt-8 mb-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Timer
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Elapsed Time: {this.state.seconds} seconds
        </p>
        {/* Menampilkan jumlah detik yang telah berlalu, yang diambil dari 
        this.state.seconds. */}
      </div>
    );
  }
}

export default Timer;
