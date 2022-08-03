import React from "react";
// import Navbar from '../Navbar/Navbar'
import ReviewHook from "./ReviewsHook";

export default function Reviews() {
  return (
    <div>
      {/* <Navbar></Navbar> */}

      <h1>This Is Reviews Pages</h1>
      <ReviewHook></ReviewHook>

      <button type="button" class="btn btn-primary m-4">
        See More Reviews
      </button>
    </div>
  );
}
