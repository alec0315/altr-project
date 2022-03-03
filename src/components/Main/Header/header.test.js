import React from "react";
import { shallow } from "enzyme";
import Header from "./";

describe("<Header />", () => {
	const defaultProps = {
		classes: {},
		routes: {}
	};

	test("renders without crashing", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		expect(wrapper.exists()).toBe(true);
	});
});
