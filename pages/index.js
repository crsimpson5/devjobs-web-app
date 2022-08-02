import Head from "next/head";
import Link from "next/link";

import Card from "../components/Card";
import Header from "../components/Header";

import data from "../data.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>devjobs</title>
        <meta name="description" content="Search for developer jobs" />
      </Head>

      <Header />

      <main>
        <div className="input-wrapper | container">
          <div>
            <label htmlFor="" className="visually-hidden">
              Filter by title, companies, expertise
            </label>
            <input
              className="text-input"
              type="text"
              placeholder="Filter by title, companies, expertise…"
              data-icon="search"
            />
          </div>
          <div>
            <label htmlFor="" className="visually-hidden">
              Filter by location
            </label>
            <input
              className="text-input"
              type="text"
              placeholder="Filter by location…"
              data-icon="location"
            />
          </div>
          <div className="input-wrapper__options">
            <div className="checkbox">
              <input
                type="checkbox"
                name="full-time-only"
                id="full-time-only"
              />
              <label htmlFor="full-time-only">Full Time Only</label>
            </div>
            <button className="button">Search</button>
          </div>
        </div>

        <div className="card-grid | container">
          {data.map((job) => (
            <Card data={job} key={job.id} />
          ))}
        </div>
      </main>
    </>
  );
}
