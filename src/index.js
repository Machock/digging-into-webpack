import "./index.css";
import Code from "./codesplit";
// import Test from "./test.ts";
let btn = document.createElement("button");
btn.innerText = "Test Button";
btn.addEventListener("click", e => {
  import("./module1").then(({ p }) => {
    document.getElementsByTagName("body")[0].appendChild(p);
  });
  Code();
});
document.getElementsByTagName("body")[0].appendChild(btn);
