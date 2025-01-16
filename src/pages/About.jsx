import countryData from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>
      <div className="gradient-cards">
        {countryData.map((curEle) => {
          const { id, countryName, capital, population, interestingFact } =
            curEle;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital: {capital}</span>
                </p>
                <p>
                  <span className="card-description">
                    population: {population}
                  </span>
                </p>
                <p>
                  <span className="card-description">
                    Interesting Fact: {interestingFact}
                  </span>
                </p>
                <p>
                  <span className="card-description">Capital: </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
