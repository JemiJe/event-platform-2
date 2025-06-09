/**
 * @typedef {import('../types/events').Event} Event
 */

import { createServer } from "node:http";

import { consumeEvents } from "./consumer.mjs";

const eventServer = createServer((req, res) => {
	// Check if the request URL is exactly '/events'
	if (req.url === '/events') {
		if (req.method === 'POST') {
			let body = '';
			req.on('data', chunk => { body += chunk; });
			req.on('end', () => {
				try {
					/** @type {Event[]} */
					const events = JSON.parse(body);
					
					consumeEvents(events);

					res.statusCode = 200;
					res.end("Events received");

				} catch (err) {
					console.error("Error parsing events:", err);
					res.statusCode = 400;
					res.end("Invalid JSON");
				}
			});
		} else {
			res.statusCode = 405;
			res.end("Method Not Allowed");
		}
	} else {
		res.statusCode = 404;
		res.end("Not Found");
	}
});

eventServer.listen(3000, () => {
	console.log("Event server is running on port 3000 and listening on /events");
});
