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
    define(['ApiClient', 'model/CategoryProductTreeResponse', 'model/CategoryRequest', 'model/CategoryResponse', 'model/ProductRequest', 'model/ProductResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CategoryProductTreeResponse'), require('../model/CategoryRequest'), require('../model/CategoryResponse'), require('../model/ProductRequest'), require('../model/ProductResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiDefinition) {
      root.OpenApiDefinition = {};
    }
    root.OpenApiDefinition.DefaultApi = factory(root.OpenApiDefinition.ApiClient, root.OpenApiDefinition.CategoryProductTreeResponse, root.OpenApiDefinition.CategoryRequest, root.OpenApiDefinition.CategoryResponse, root.OpenApiDefinition.ProductRequest, root.OpenApiDefinition.ProductResponse);
  }
}(this, function(ApiClient, CategoryProductTreeResponse, CategoryRequest, CategoryResponse, ProductRequest, ProductResponse) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version v0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCategory operation.
     * @callback module:api/DefaultApi~createCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CategoryRequest} opts.categoryRequest 
     * @param {module:api/DefaultApi~createCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryResponse}
     */
    this.createCategory = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['categoryRequest'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = CategoryResponse;

      return this.apiClient.callApi(
        '/api/v1/category', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback module:api/DefaultApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductRequest} opts.productRequest 
     * @param {module:api/DefaultApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */
    this.createProduct = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['productRequest'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ProductResponse;

      return this.apiClient.callApi(
        '/api/v1/product', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCategory operation.
     * @callback module:api/DefaultApi~deleteCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/DefaultApi~deleteCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCategory = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCategory");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/category/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProduct operation.
     * @callback module:api/DefaultApi~deleteProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/DefaultApi~deleteProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProduct = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProduct");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/product/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findProductById operation.
     * @callback module:api/DefaultApi~findProductByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/DefaultApi~findProductByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */
    this.findProductById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findProductById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ProductResponse;

      return this.apiClient.callApi(
        '/api/v1/product/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllProducts operation.
     * @callback module:api/DefaultApi~getAllProductsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProductResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getAllProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProductResponse>}
     */
    this.getAllProducts = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [ProductResponse];

      return this.apiClient.callApi(
        '/api/v1/product', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategories operation.
     * @callback module:api/DefaultApi~getCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CategoryResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CategoryResponse>}
     */
    this.getCategories = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [CategoryResponse];

      return this.apiClient.callApi(
        '/api/v1/category', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategoryById operation.
     * @callback module:api/DefaultApi~getCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/DefaultApi~getCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryResponse}
     */
    this.getCategoryById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCategoryById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = CategoryResponse;

      return this.apiClient.callApi(
        '/api/v1/category/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCategoryProductTree operation.
     * @callback module:api/DefaultApi~getCategoryProductTreeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CategoryProductTreeResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~getCategoryProductTreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CategoryProductTreeResponse>}
     */
    this.getCategoryProductTree = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [CategoryProductTreeResponse];

      return this.apiClient.callApi(
        '/api/v1/category/productTree', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCategory operation.
     * @callback module:api/DefaultApi~updateCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/CategoryRequest} opts.categoryRequest 
     * @param {module:api/DefaultApi~updateCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryResponse}
     */
    this.updateCategory = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['categoryRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCategory");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = CategoryResponse;

      return this.apiClient.callApi(
        '/api/v1/category/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:api/DefaultApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductRequest} opts.productRequest 
     * @param {module:api/DefaultApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductResponse}
     */
    this.updateProduct = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['productRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProduct");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ProductResponse;

      return this.apiClient.callApi(
        '/api/v1/product/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
