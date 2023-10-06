import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav text-uppercase">
      <Link
        to="/"
        className="nav-link active"
        style={{ color: "white", background: "black" }}
      >
        {" "}
        Accueil{" "}
      </Link>
      <Link
        to="/addmovies"
        className="nav-link active"
        style={{ color: "white", background: "black" }}
      >
        {" "}
        Ajouter un Film{" "}
      </Link>
    </nav>
  );
}
