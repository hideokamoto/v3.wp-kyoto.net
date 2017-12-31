/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AdAmazonLeaderBoard from "../Amazon";
configure({ adapter: new Adapter() });

describe("AdAmazonLeaderBoard", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<AdAmazonLeaderBoard />);
    expect(wrapper).toMatchSnapshot();
  });
});
