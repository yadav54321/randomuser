import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  const previousValue = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      setData(results);
      previousValue.current = number;
    };
    fetchData();
  }, [number]);

  return (
    <>

      {data.map((item, index) => {
        return (
          <>

            <div className="card" key={index}>
              <h2> Random User</h2>
              <h1><img src={item.picture.large} alt="jh" /></h1>

              <h3>
                {item.name.title} {item.name.first} {item.name.last}
              </h3>
              <p style={{ textTransform: "capitalize" }}>
                {item.gender} ( {item.dob.age} )
              </p>
              <p>
                <strong>City :</strong>
                {item.location.city} <strong>State :</strong>{" "}
                {item.location.state} <strong>Country :</strong>
                {item.location.country}
              </p>
              <p>&#9993; {item.email}</p>
              <p>
                &#128222; {item.phone} | {item.cell}
              </p>

              <button style={{ fontSize: '30px', backgroundColor: 'green', }} onClick={() => setNumber((previous) => previous + 1)}>
                next
              </button>
            </div>
          </>
        );
      })}
    </>
  );
}
