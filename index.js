addEventListener("fetch", (event) => {
  return event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const reqUrl = new URL(request.url);
  let url = reqUrl.searchParams.get("url");

  request = new Request(url, request);
  request.headers.set("Origin", new URL(url).origin);
  console.log(reqUrl.origin);

  let response = await fetch(request);
  response = new Response(response.body, response);

  let text = await response.text();

  let re = /href=\"(http.*?)\"/gm;

  let linksFound = text.matchAll(re);
  let links = [];
  for (let link of linksFound) {
    links.push(link[1]);
  }

  let result = JSON.stringify(links);

  return new Response(result, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Vary: "Origin",
    },
  });
}
