import React from "react";
import { Link } from "react-router-dom";

export default function ReviewBox(props) {
  const { name, ratting, Pic, feedback } = props.Review;

  return (
    <div class="container">
      <div class="row ">
        <div class="col">
          <div class="card">
            <div class="card-body ">
              <h5 class="card-title">Name : {name}</h5>
              <p class="card-text">Ratting : {ratting}</p>
              <p class="card-text">Pic : {Pic}</p>
              <p class="card-text">Feedback : {feedback}</p>
              <Link to = "{<Reviews></Reviews>}" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
