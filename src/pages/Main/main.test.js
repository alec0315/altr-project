import React from "react";
import { shallow } from "enzyme";
import Main from "./";

function requiredProps() {
	return {
		classes: {}
	};
}

describe("<Main />", () => {
	test("renders without crashing", (props = requiredProps()) => {
		const wrapper = shallow(<Main {...props} />);
		expect(wrapper.exists()).toBe(true);
	});
});
