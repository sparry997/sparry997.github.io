import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
// import "bootstrap/js/dist/collapse"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Script src="/bootstrap/bootstrap.bundle.min.js" />
      <Head>
        <title>Spencer Parry</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed"></link>
      </Head>
      <main className={styles.main}>
        <div
          className={styles.header}
          style={{ width: "100%", height: "40em", position: "relative" }}
        >
          <nav className={`navbar navbar-expand-lg navbar-light bg-light opacity-75 ${styles.roboto}`}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                SP
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="#navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Interests
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div></div>
          <br></br>
          <br></br>
          <br></br>
          <div className="container">
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm"></div>
              <div className="col-sm">
                <div className={styles.headerDiv}>
                  <h1 >Test</h1>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
        </div>
      </main>
    </>
  );
}
