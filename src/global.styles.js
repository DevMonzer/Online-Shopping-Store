import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
	padding: 0;
	margin: 0;
}
	body {
		font-family: 'Open Sans Condensed';
		padding: 0;
	}
	a {
		text-decoration: none;
		color: black;
	}
	* {
		box-sizing: border-box;
	}
`;
