/****
 *
 * install jsonwebtoken
 * jwt.sign(payload, secret, {expiresIn:})
 * token client
 */

/***
 * how to store token in client side
 * 1. memory --> okay type
 * 2. local storage --> ok types(XSS attack may occur)
 * 3. cookies http only
 */

/**
 * 1.set cookies http only for development the secure: false
 * 2. chat gpt --- why should we put jwt token and set it on http only
 * 3. cors settings
 * 4. axios client side setting
 */
