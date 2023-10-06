import React from "react";

const MovieCard = ({ element }) => {
  return (
    <div>
      <section>
        <div style={{ width: "300px", height: "600px" }}>
          <img
            variant="top"
            src={element.posterurl}
            style={{ height: "50%" }}
            alt=""
          />
          <div>
            <text>{element.name}</text>
          </div>
          <div>
            <text>{element.posterurl}</text>
          </div>
          <div>
            <text>{element.description}</text>
            <div>
              <text>{element.videoUrl}</text>
            </div>
            <button variant="primary">Voir Plus</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieCard;
