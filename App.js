const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello jee"),React.createElement("h2",{},"kiase ho saare")]),
React.createElement("div",{id:"child1"},
React.createElement("h2",{},"let's start"),React.createElement("h3",{},"the journey"))
);
console.log(parent);


const data =  React.createElement("h1",{},"hello jee kiase ho saare");
const rt = ReactDOM.createRoot(document.getElementById("root"));
   rt.render(parent);