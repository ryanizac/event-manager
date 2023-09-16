/**
 * @typedef {Object} RequestOptions
 * @property {any} body
 * @property {any} params
 * @property {any} query
 * @property {any} headers
 */

/**
 * @typedef {Object} ErrorResult
 * @property {("error")} type
 * @property {string} error
 *
 * @typedef {Object} SuccessResult
 * @property {("data")} type
 * @property {any} data
 *
 * @typedef {Object} CommonResult
 * @property {number} code
 *
 * @typedef {CommonResult & (ErrorResult | SuccessResult)} RequestResult
 */

/**
 * @typedef {("get" | "post" | "put" | "delete")} RequestMethod
 * @typedef {string} RequestPath
 */

/**
 * @typedef {Object} RoutableOptions
 * @property {RequestMethod} method
 * @property {RequestPath} path
 */

export default {};
