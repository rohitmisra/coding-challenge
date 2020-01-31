/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiDefinition) {
      root.OpenApiDefinition = {};
    }
    root.OpenApiDefinition.ProductRequest = factory(root.OpenApiDefinition.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductRequest model module.
   * @module model/ProductRequest
   * @version v0
   */

  /**
   * Constructs a new <code>ProductRequest</code>.
   * @alias module:model/ProductRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductRequest} obj Optional instance to populate.
   * @return {module:model/ProductRequest} The populated <code>ProductRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('categoryKey')) {
        obj['categoryKey'] = ApiClient.convertToType(data['categoryKey'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} categoryKey
   */
  exports.prototype['categoryKey'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;



  return exports;
}));

