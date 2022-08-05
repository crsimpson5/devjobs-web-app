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
  const [jobsLimit, setJobsLimit] = useState(12);

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

      <main className="main-content">
        <div className="search | container">
          {/* Desktop */}
          <div className="show-md flex-grow-2">
            <label htmlFor="query" className="visually-hidden">
              Filter by title, companies, expertise
            </label>
            <input
              id="query"
              className="text-input"
              type="text"
              placeholder="Filter by title…"
              data-icon="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <div className="show-md flex-grow-1">
            <label htmlFor="location" className="visually-hidden">
              Filter by location
            </label>
            <input
              id="location"
              className="text-input"
              type="text"
              placeholder="Filter by location…"
              data-icon="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <div className="search__options | show-md">
            <div className="checkbox">
              <input
                type="checkbox"
                id="full-time-only"
                value={fullTimeOnly}
                onChange={() => setFullTimeOnly((prev) => !prev)}
              />
              <label htmlFor="full-time-only">Full Time</label>
            </div>
            <button className="button" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Mobile */}
          <div className="hide-md flex-grow-1">
            <label htmlFor="query-m" className="visually-hidden">
              Filter by title, companies, expertise
            </label>
            <input
              id="query-m"
              className="text-input"
              type="text"
              placeholder="Filter by title…"
              data-icon="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="search__options | hide-md ">
            <button className="button button--filter" data-type="naked">
              <span className="visually-hidden">filter</span>
              <img src="/images/icons/icon-filter.svg" alt="" />
            </button>
            <button className="button button--search" onClick={handleSearch}>
              <span className="visually-hidden">search</span>
              <img src="/images/icons/icon-search.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="card-grid | container">
          {jobs
            .filter((job, idx) => idx < jobsLimit)
            .map((job) => (
              <Card data={job} key={job.id} />
            ))}
        </div>

        {/* Load more button */}
        {jobs.length > jobsLimit && (
          <div className="flex justify-center">
            <button
              className="button"
              onClick={() => setJobsLimit((prev) => prev + 12)}
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </>
  );
}
