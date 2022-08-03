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
          <header className="job__header | container-md">
            <div
              className="job__logo"
              style={{ background: job.logoBackground }}
            >
              <img src={`.${job.logo}`} alt="" />
            </div>
            <div className="flow" style={{ "--flow-spacing": ".25em" }}>
              <p className="heading-2">{job.company}</p>
              <p className="color-light">
                {job.company.split(" ").join("").toLowerCase() + ".com"}
              </p>
            </div>
            <a href="#" className="button" data-type="light">Company Site</a>
          </header>

          <main className="container-md color-light">
            <p className="color-light">
              {job.postedAt}{" "}
              <span className="dot-separator"> {job.contract}</span>
            </p>
            <h1 className="heading-1">{job.position}</h1>
            <p className="color-primary bold">{job.location}</p>
            <button className="button">Apply Now</button>

            <div className="flow">
              <p>{job.description}</p>
              <h2 className="heading-2">Requirements</h2>
              <p>{job.requirements.content}</p>
              <ul>
                {job.requirements.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <h2 className="heading-2">What You Will Do</h2>
              <p>{job.role.content}</p>
              <ol>
                {job.role.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          </main>

          <footer>
            <div className="container-md">
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
