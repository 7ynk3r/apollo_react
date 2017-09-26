global.XMLHttpRequest = require('xhr2/lib/xhr2');

const {Response, Request, Headers, fetch} = require('whatwg-fetch');
global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;
