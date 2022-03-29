import React from "react";
import Header from "./Header";
import { mount } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import MovieDetail from "./MovieDetail";

test("it expands when the button is clicked", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  );
  expect(wrapper.find(MovieDetail)).toHaveLength(0);
});
//   it("render correctly App component", () => {
//     const wrapper = shallow(
//         <MemoryRouter>
//         <Header />
//       </MemoryRouter>
//     ).exists();
//     assert(wrapper === true);
//   });
