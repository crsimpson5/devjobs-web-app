export default function Card({ data }) {
  return (
    <div className="card">
      <div className="card__logo" style={{ "--bg": data.logoBackground }}>
        <img src={data.logo} alt="" />
      </div>
      <div className="flow" style={{ "--flow-spacing": ".625rem" }}>
        <p>
          {data.postedAt} <span className="dot-separator"></span>{" "}
          {data.contract}
        </p>
        <h2 className="heading-2">{data.position}</h2>
        <p>{data.company}</p>
      </div>
      <p className="card__location | color-violet-400 bold">{data.location}</p>
    </div>
  );
}
