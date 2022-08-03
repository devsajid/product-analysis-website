import React from "react";
import Headers from "../Header/Headers";
import ReviewHook from "../Reviews/ReviewsHook/RE";

export default function Home() {
  return (
    <div>
      <Headers></Headers>
      <ReviewHook></ReviewHook>{" "}
    </div>
  );
}
