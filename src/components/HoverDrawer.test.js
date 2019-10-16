import React from "react";
import HoverDrawer from "./HoverDrawer";

import { shallow } from "enzyme";

const wrapper = shallow(<HoverDrawer />);

describe("<HoverDrawer>", () => {
  it("should display the icon");
  describe("mouse over the component", () => {
    it("should display the children elements");
    describe("mouse leave the component", () => {
      it("should display the icon");
    });
  });
});
