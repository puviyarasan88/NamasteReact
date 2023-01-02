const heading1 = React.createElement("h1", {id:"title1"}, "HEADING1");
const heading2 = React.createElement("h2", {id:"title2"}, "HEADING2");
const Nestedheading = React.createElement("div", {id:"devtitle"}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Nestedheading);