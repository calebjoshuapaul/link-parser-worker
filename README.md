# link-parser-worker

This worker is built using cloudflare, this worker filters out all http links from the page passed and displays it.
The links are filtered using regex.

- The code starts by creating a URL and then creates a new Request object.
- The code then calls the fetch function to get the response from the server.
- After that, it converts the response into JSON and returns it with an appropriate HTTP header.
–
- The code has a fetch event listener which will handle the request, and return a response.

- The code above also creates an async function called handleRequest() which will be executed when the fetch event is triggered.
- The handleRequest() function creates a new Request object, and then uses the fetch API to create a Response object with the text of the page as its body.
