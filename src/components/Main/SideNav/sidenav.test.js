import React from "react";
import { shallow } from "enzyme";
import Sidenav from "./";

describe("<Sidenav />", () => {
	const defaultProps = {
		classes: {},
		routes: []
	};

	test("renders without crashing", () => {
		const wrapper = shallow(<Sidenav {...defaultProps} />);
		expect(wrapper.exists()).toBe(true);
	});
});
