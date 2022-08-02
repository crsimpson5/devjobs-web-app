import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import Header from "../../components/Header";

import data from "../../data.json";

export default function Job() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState();

  useEffect(() => {
    setJob(data.filter((job) => job.id === parseInt(id))[0]);
  }, [id]);

  return (
    <>
      <Head>
        <title>devjobs</title>
        <meta name="description" content="Search for developer jobs" />
      </Head>

      <Header />

      {job ? (
        <>
          <header className="container">
            <p>{job.company}</p>
          </header>

          <main className="container">
            <p>
              {job.postedAt}{" "}
              <span className="dot-separator"> {job.contract}</span>
            </p>
            <h1 className="heading-1">{job.position}</h1>
            <p class="color-primary bold">{job.location}</p>
            <button className="button">Apply Now</button>

            <div className="flow">
              <p>{job.description}</p>
              <h2 className="heading-2">Requirements</h2>
              <p>{job.requirements.content}</p>
              <ul>
                {job.requirements.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <h2 className="heading-2">What You Will Do</h2>
              <p>{job.role.content}</p>
              <ol>
                {job.role.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          </main>

          <footer>
            <div className="container">
              <p className="heading-2">{job.position}</p>
              <p>{job.company}</p>
              <button className="button">Apply Now</button>
            </div>
          </footer>
        </>
      ) : (
        <div>no job found</div>
      )}
    </>
  );
}
