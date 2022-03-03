import React from "react";
import { shallow } from "enzyme";
import Content from "./";

describe("<Content />", () => {
	const defaultProps = {
		classes: {},
		routes: {}
	};

	test("renders without crashing", () => {
		const wrapper = shallow(<Content {...defaultProps} />);
		expect(wrapper.exists()).toBe(true);
	});
});
