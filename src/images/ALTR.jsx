import React from "react";

const ALTR = props => {
	const { fillColor = "#fefefe", ...rest } = props;
	return (
		<svg viewBox="0 0 239 70" preserveAspectRatio="xMidYMid meet" {...rest}>
			<title>{"Group 2"}</title>
			<g fill={fillColor} fillRule='evenodd'>
				<path d='M195.966 69.61L155.836.103h-52.441l10.526 18.232h31.387l29.606 51.276zM143.322 51.36H111.93L82.324 0H61.272l40.131 69.592h52.445zM187.39 18.332h22.195c5.006 0 9.079 4.073 9.079 9.079 0 4.899-3.904 8.894-8.762 9.063h-12.056l10.609 18.248 8.514 14.89h21.146l-11.89-20.566c6.483-5 10.67-12.835 10.67-21.635C236.896 12.35 224.645.1 209.586.1h-32.722l10.527 18.232zM80.065 69.632L40.238 0 29.52 18.536l29.493 51.096zM21.052 69.61l8.468-14.642-10.526-18.232L0 69.612z' />
			</g>
		</svg>
	)
};

export default ALTR;
