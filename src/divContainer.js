import React from 'react';

const heading = React.createElement("h1", null, "React");
const strong = React.createElement("strong", null, "best tool");
const paragraph = React.createElement("p", "The ", strong, " for building UI");
const container = React.createElement("div", { className: "container" }, [heading, paragraph]);

export default container;