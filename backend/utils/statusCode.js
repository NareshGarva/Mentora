// statusCodes.js

const STATUS_CODES = {
  // ✅ Success
  OK: 200,                    // Standard success
  CREATED: 201,               // Resource created
  ACCEPTED: 202,              // Request accepted but processing async
  NO_CONTENT: 204,           // Success with no response body

  // 🟡 Redirection
  NOT_MODIFIED: 304,          // For caching and conditional requests

  // ❌ Client Errors
  BAD_REQUEST: 400,           // Missing or invalid input
  UNAUTHORIZED: 401,          // Auth required or failed
  PAYMENT_REQUIRED: 402,      // Reserved but used by some APIs
  FORBIDDEN: 403,             // Authenticated but not allowed
  NOT_FOUND: 404,             // Resource doesn't exist
  METHOD_NOT_ALLOWED: 405,    // Wrong HTTP method (e.g. POST on GET route)
  CONFLICT: 409,              // Resource conflict (e.g. duplicate email)
  UNPROCESSABLE_ENTITY: 422,  // Valid JSON but semantically invalid (like validation error)
  TOO_MANY_REQUESTS: 429,     // Rate limiting

  // ❗ Server Errors
  INTERNAL_SERVER_ERROR: 500, // Generic server crash
  NOT_IMPLEMENTED: 501,       // Route/method not implemented yet
  BAD_GATEWAY: 502,           // Server received invalid response from another service
  SERVICE_UNAVAILABLE: 503,   // Server down or overloaded
  GATEWAY_TIMEOUT: 504        // Another server didn't respond in time
};

export default STATUS_CODES;
