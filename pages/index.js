import { useState } from "react";

import Head from "next/head";
import Card from "../components/Card";
import Header from "../components/Header";

import data from "../data.json";

export default function Home() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [jobs, setJobs] = useState(data);

  function handleSearch() {
    let newQuery = query.trim().toLowerCase();
    let newLocation = location.trim().toLowerCase();
    let results = data;

    if (newQuery) {
      results = results.filter(
        (job) =>
          job.company.toLowerCase().includes(newQuery) ||
          job.position.toLowerCase().includes(newQuery) ||
          job.requirements.items.join(" ").toLowerCase().includes(newQuery)
      );
    }

    if (newLocation) {
      results = results.filter((job) =>
        job.location.toLowerCase().includes(newLocation)
      );
    }

    if (fullTimeOnly) {
      results = results.filter((job) => job.contract === "Full Time");
    }

    setJobs(results);
  }

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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="input-wrapper__options">
            <div className="checkbox">
              <input
                type="checkbox"
                name="full-time-only"
                id="full-time-only"
                value={fullTimeOnly}
                onChange={() => setFullTimeOnly((prev) => !prev)}
              />
              <label htmlFor="full-time-only">Full Time Only</label>
            </div>
            <button className="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <div className="card-grid | container">
          {jobs.map((job) => (
            <Card data={job} key={job.id} />
          ))}
        </div>
      </main>
    </>
  );
}
