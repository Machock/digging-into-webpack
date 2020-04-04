export default async function Code() {
  //   const _ = await import(/* webpackChunkName: "lodash" */ "lodash");
  const _ = await import(/* webpackPrefetch: true */ "lodash");
  //   const _ = await import(/* webpackPreload: true */ "lodash");
  let div = document.createElement("div");
  div.innerText = "Code Split";
  document.getElementsByTagName("body")[0].appendChild(div);
}
