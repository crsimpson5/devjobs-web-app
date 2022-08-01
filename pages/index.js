import Head from "next/head";
import Link from "next/link";

import Card from "../components/Card";
import data from "../data.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>devjobs</title>
        <meta name="description" content="Search for developer jobs" />
      </Head>

      <header className="main-header">
        <div className="container">
          <Link href="#">
            <a>
              <img className="logo" src="images/icons/logo.svg" alt="" />
            </a>
          </Link>
        </div>
      </header>

      {data.map((job) => (
        <Card data={job} />
      ))}

      {/* <main
        className=""
        style={{
          padding: "2rem",
          display: "grid",
          placeItems: "start",
          gap: "2rem"
        }}
      >
        <button className="button">Button</button>
        <input
          class="text-input"
          type="text"
          placeholder="Enter desired job…"
          data-icon="search"
        />
        <div className="checkbox">
          <input type="checkbox" name="test" id="test" />
          <label htmlFor="test">Checkbox</label>
        </div>

        <div className="input-wrapper">
          <div>
            <label htmlFor="" className="visually-hidden">
              desired job
            </label>
            <input
              class="text-input"
              type="text"
              placeholder="Enter desired job…"
              data-icon="search"
            />
          </div>
          <div>
            <label htmlFor="" className="visually-hidden">
              desired job
            </label>
            <input
              class="text-input"
              type="text"
              placeholder="Enter desired job…"
              data-icon="location"
            />
          </div>
        </div>
        <p>
          hi <span className="dot-separator"></span> there
        </p>
      </main> */}
    </>
  );
}
