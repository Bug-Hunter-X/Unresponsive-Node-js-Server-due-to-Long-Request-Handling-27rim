# Unresponsive Node.js Server

This repository demonstrates a common issue in Node.js servers: unresponsiveness due to long-running request handlers.  The provided code simulates a server that takes 5 seconds to respond.  This can lead to client-side timeouts and the perception that the server is down, even though it's actually processing the request.

The solution showcases how to improve server responsiveness by implementing request timeouts and improving the handling of asynchronous operations.

## Bug

The `bug.js` file contains a simple HTTP server that uses `setTimeout` to simulate a 5-second delay before sending a response. This delay can cause issues if clients don't have a sufficiently long timeout period.