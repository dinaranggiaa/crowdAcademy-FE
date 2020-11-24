import React, { Fragment } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { detailArtikelumum } from "../../../../actions/userActions";
import "./artikel.css";

const DetailArtikel = ({ history }) => {
  //   const dispatch = useDispatch();

  //   const artikelDetailUmum = useSelector((state) => state.artikelDetailUmum);

  //   console.log("detil", artikelDetailUmum);

  //   useEffect(() => {
  //     dispatch(detailArtikelumum());
  //   }, [dispatch, history]);

  return (
    <Fragment>
      <div className="box-artikel">
        <div className="row-artikel">
          <div className="column-gambar">
            <p className="font-judul">
              10 Bahasa Pemrograman Terbaik yang Perlu Kamu
              <br></br>
            </p>
            <p>Abdullah Ahmad</p>
            <hr />
          </div>
          <div className="column-informasi-artikel">
            <p>
              Kamu ingin belajar Bahasa Pemrograman yang tepat sob? Baiklah,
              kali ini saya akan memberitahu 10 bahasa pemrograman terbaik versi
              TIOBE Index, PYPL dan Stack Overflow. Langsung saja Sob, Let’s GO!
              Bahasa pemrograman atau istilah lainnya bahasa komputer adalah
              bahasa yang dipakai untuk menjalankan fungsi tertentu di aplikasi
              ataupun software. Bahasa pemrograman banyak digunakan untuk
              membuat website, aplikasi atau produk digital lainnya. Berikut
              beberapa bahasa pemrograman tersebut.
              <br></br>
              <br></br>
              <ul>
                <li>Python</li>
              
                Python merupakan bahasa pemrograman yang cukup mudah untuk
                dipelajari. Pyhton mempunyai sintaks yang jelas, sifatnya
                intuitif, dan hampir mirip dengan bahasa inggris. Ia juga bisa
                digunakan untuk berbagai macam project, misalnya untuk
                mengembangkan APIs, Crawlers, Scrapers, Sistem backend, dan
                lainnya. Phyton juga terkenal karena punya banyak pilihan
                plug-in dan third-party libraries.
              
              <li>JavaScript</li>
              Javascript terkenal sebagai bahasa komputer khusus untuk
              mengembangkan front-end website. Situs terkenal seperti YouTube,
              Facebook dan Twitter, mereka semua menggunakan bahasa pemrograman
              yang satu ini. Meski banyak digunakan untuk membuat tampilan depan
              website, java script juga bisa digunakan untuk mengembangkan
              aplikasi mobile, game dan juga desktop. Ini karena javascript
              tidak membutuhkan resource memori yang besar, dinamis serta mudah
              untuk digunakan.
              <li>Java</li>
              Sejak dirilis di tahun 90-an, java memiliki banyak sekali
              penggemar, alasannya, karena: - Java bisa digunakan hampir di
              semua system operasi, - Java mempunyai bahasa pemrograman yang
              cocok untuk perusahaan skala besar, karena bahasa pemrograman ini
              cepat, lebih mudah dikelola, minim bug, dan backward compatible. -
              Java mempunyai komunitas yang besar di Stack Overflow dan Github.
              <li>SQL</li>
              Meski sudah cukup lawas, SQL masih menjadi bahasa pemrograman yang
              penting untuk dipelajari, karena SQL merupakan bahasa pemrograman
              yang khusus digunakan untuk data management.
              <li>C#</li>
              C# (C sharp) adalah bahasa pemgrograman keluaran Microsoft. C
              Sharp adalah bahasa yang fleksibel, powerful, dan mudah digunakan.
              Fleksibel karena bisa digunakan di satu komputer atau di kirim
              lewat web ke komputer lainnya, Powerful karena memiliki fitur yang
              lengkap dan mudah digunakan karena modifikasi perintah sama
              seperti C++, ia juga memberitahu letak kesalahan ketika kita
              sedang Coding. C sharp banyak digunakan untuk membuat APIs,
              aplikasi desktop terutama Games.
              <li>C</li>C merupakan bahasa pemgrograman yang paling tua tapi masih
              eksis sampai sekarang. Bahasa pemgrograman ini juga dikenal dengan
              general purpose language. Dengan kata lain, C sengaja di desain
              untuk mengembangkan berbagai macam system operasi dan hardware,
              makanya C mempunyai bahasa pemrograman yang jelas dan mudah
              dipahami. Banyak bahasa pemrograman popular seperti Java, PHP dan
              JavaScript yang bermula dari C.
              <li>PHP</li>
              PHP masih menjadi bahasa pemrograman yang cukup popular saat ini,
              setidaknya 40% website aktif di dunia dibuat dengan menggunakan
              bahasa pemrograman ini, termasuk website yang di buat menggunakan
              CMS WordPress, Joomla dan Drupal.
              <li>C++</li>
              C++ banyak digunakan dalam pengembangan high-level application,
              seperti virtual reality, games, system operasi komputer, dan
              grafik komputer. Kalau kamu tertarik mengembangkan system di
              internet of things atau cloud platforms, membuat aplikasi di
              smartwatch atau membuat aplikasi inovatif lainnya, C++ menjadi
              aplikasi yang wajib kamu pelajari.
              <li>Swift</li>
              Swift dipakai untuk mengembangkan software atau aplikasi di iOS
              atau Mac OS. Swift merupakan bahasa pemrograman yang sangat mudah
              untuk dipelajari, cepat, aman dan mudah dibaca. Dibandingkan
              dengan bahasa pemrograman lainnya, developer Swift belum banyak,
              makanya ini menjadi kesempatan yang baik untuk kamu belajar dan
              mengembangkan aplikasi melalui Swift.
              <li>Ruby</li>
              Ruby merupakan bahasa pemrograman yang cukup terkenal di kalangan
              Startup, kenapa? Karena: - Ruby mempunyai sintaks yang sederhana,
              artinya kamu bisa mendesain aplikasi menggunakan sedikit code
              saja. - Ruby mempunyai development tools khusus, yaitu Ruby on
              Rails, tools ini membantu para developer untuk melakukan pekerjaan
              secara lebih cepat. Tidak heran, kalau ruby dipakai oleh banyak
              Unicorn di Silicon Valley. Misalnya Twitter, Airbnb dan Github pun
              juga pakai Ruby. Itulah sekilas bahasa pemrograman yang terbaik
              untuk tahun ini versi TIOBE Index, PYPL dan Stack Overflow. Nah,
              kira-kira kamu sudah tau belum bahasa pemrograman yang kamu
              minati.
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DetailArtikel;
