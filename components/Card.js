import Link from "next/link";

export default function Card({ data }) {
  return (
    <Link href={`/job/${data.id}`}>
      <a className="unstyled-link">
        <div className="card">
          <div className="card__logo" style={{ "--bg": data.logoBackground }}>
            <img src={data.logo} alt="" />
          </div>
          <div className="flow" style={{ "--flow-spacing": ".625rem" }}>
            <p>
              {data.postedAt} <span className="dot-separator"></span>{" "}
              {data.contract}
            </p>
            <div>
              <h2 className="card__link | heading-2">{data.position}</h2>
            </div>
            <p>{data.company}</p>
          </div>
          <p className="card__location | color-primary bold">{data.location}</p>
        </div>
      </a>
    </Link>
  );
}
