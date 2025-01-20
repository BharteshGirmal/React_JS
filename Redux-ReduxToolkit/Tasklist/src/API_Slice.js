import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import React from "react";

console.log(createApi);

createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
  endpoints: (builders) => {
    getTask: builders.query({
      query: () => "/task",
    });
  },
});
