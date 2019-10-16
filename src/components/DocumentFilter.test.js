import React from "react";
import DocumentFilter from "./DocumentFilter";

import { shallow } from "enzyme";

let wrapper;

describe("<DocumentItem>", () => {
  beforeEach(() => {
    wrapper = shallow(<DocumentFilter />);
  });

  it("has an input", () => {
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });

  describe("when text is typed in the input", () => {
    it("should trigger onInputChange");
  });
});
