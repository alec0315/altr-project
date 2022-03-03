import React from "react";
import { shallow } from "enzyme";
import UserCard from "./";

describe("<UserCard />", () => {
	const defaultProps = {
		user: {
			picture: {
				medium: "default"
			},
			name: {
				first: "default",
				last: "default"
			},
			email: "default",
			phone: "default"
		},
	};

	const missingProps = {};

	const wrongProps = {
		user: {
			picture: {
				medium: "default"
			},
			somethingElse: {
				otherName: "default",
				otherLastName: "default"
			},
			otherEmail: "default",
			wrongProp: "default"
		}
	};

	test("component fails if props are incorrect", () => {
		const wrapper = shallow(<UserCard {...wrongProps}/>);

		expect(wrapper.exists()).toBe(false);
	})

	test("component fails if props are missing", () => {
		const wrapper = shallow(<UserCard {...missingProps}/>);

		expect(wrapper.exits()).toBe(false);
	});

	test("renders without crashing", () => {
		const wrapper = shallow(<UserCard {...defaultProps} />);
		expect(wrapper.exists()).toBe(true);
	});
});