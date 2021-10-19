import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brightness6Rounded } from "@material-ui/icons";
import styles from "./Layout.module.css";

import { ArrowBack } from "@material-ui/icons";

const Layout = ({ children, title = "Estados do Brasil: capitais, siglas, bandeiras, mapas",description, keywords,url, imgUrl,home }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon"  href="https://www.estadosdobrasil.com.br/favicon.ico" />
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords}/>

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Estados do Brasil" />

        <meta property="og:image" content={imgUrl} />

        

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="manifest" href="https://www.estadosdobrasil.com.br/manifest.webmanifest" />
        
        <link rel="apple-touch-icon" sizes="57x57" href="https://www.estadosdobrasil.com.br/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://www.estadosdobrasil.com.br/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://www.estadosdobrasil.com.br/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://www.estadosdobrasil.com.br/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://www.estadosdobrasil.com.br/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://www.estadosdobrasil.com.br/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://www.estadosdobrasil.com.br/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://www.estadosdobrasil.com.br/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.estadosdobrasil.com.br/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="https://www.estadosdobrasil.com.br/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.estadosdobrasil.com.br/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://www.estadosdobrasil.com.br/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.estadosdobrasil.com.br/favicon-16x16.png" />
        <link rel="manifest" href="https://www.estadosdobrasil.com.br/manifest.json" />
        <meta name="msapplication-TileColor" content="#20833C" />
        <meta name="msapplication-TileImage" content="https://www.estadosdobrasil.com.br/ms-icon-144x144.png" />
        <meta name="theme-color" content="#20833C" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      </Head>

      <header className={styles.header}>

      {home ? (
          <>

            <div>
              <img className={styles.flag_h} src="/assets/bandeiras/Bandeira do Brasil.png"  /><br />
              Estados do Brasil
            </div>
            
            <div>
              <a  href="https://play.google.com/store/apps/details?id=br.com.capitaisbrasileiras" target="_blank">
                <img src="assets/img/android.png" alt="ANDROID" width="100" />
              </a>
              {/* <a  href="https://play.google.com/store/apps/details?id=br.com.capitaisbrasileiras" target="_blank">
                <img src="assets/img/android.png" alt="ANDROID" width="100" />
              </a> */}
            </div>

            <div>
              <button className={styles.themeSwitcher} onClick={switchTheme}>
                <Brightness6Rounded />
              </button>
            </div>
           
          </>
        ) : (
          <>
            <Link href="/">
              <ArrowBack />
            </Link>

            
              Estados do Brasil
            
            <div>
            <a  href="https://play.google.com/store/apps/details?id=br.com.capitaisbrasileiras" target="_blank">
                <img src="../assets/img/android.png" alt="ANDROID" width="100" />
              </a>
              {/* <a  href="https://play.google.com/store/apps/details?id=br.com.capitaisbrasileiras" target="_blank">
                <img src="../assets/img/android.png" alt="ANDROID" width="100" />
              </a> */}
              </div>
            
            <button className={styles.themeSwitcher} onClick={switchTheme}>
              <Brightness6Rounded />
            </button>
          </>
        )}

        
      </header>
          <br />
          <span className={styles.pix}>Contribua: PIX - eridani.melo@gmail.com</span>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
     
          <strong>Contribua:</strong> PIX - eridani.melo@gmail.com
          <br /><br /><br />
          eridani.melo@gmail.com - 2021 - <Link href="privacidade/politica-de-privacidade"> Política de Privacidade</Link>
          <br /><br /><br />
      </footer>
    </div>
  );
};

export default Layout;
