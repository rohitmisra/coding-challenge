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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenApiDefinition);
  }
}(this, function(expect, OpenApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenApiDefinition.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('createCategory', function() {
      it('should call createCategory successfully', function(done) {
        //uncomment below and update the code to test createCategory
        //instance.createCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProduct', function() {
      it('should call createProduct successfully', function(done) {
        //uncomment below and update the code to test createProduct
        //instance.createProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCategory', function() {
      it('should call deleteCategory successfully', function(done) {
        //uncomment below and update the code to test deleteCategory
        //instance.deleteCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProduct', function() {
      it('should call deleteProduct successfully', function(done) {
        //uncomment below and update the code to test deleteProduct
        //instance.deleteProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findProductById', function() {
      it('should call findProductById successfully', function(done) {
        //uncomment below and update the code to test findProductById
        //instance.findProductById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllProducts', function() {
      it('should call getAllProducts successfully', function(done) {
        //uncomment below and update the code to test getAllProducts
        //instance.getAllProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategories', function() {
      it('should call getCategories successfully', function(done) {
        //uncomment below and update the code to test getCategories
        //instance.getCategories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryById', function() {
      it('should call getCategoryById successfully', function(done) {
        //uncomment below and update the code to test getCategoryById
        //instance.getCategoryById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoryProductTree', function() {
      it('should call getCategoryProductTree successfully', function(done) {
        //uncomment below and update the code to test getCategoryProductTree
        //instance.getCategoryProductTree(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCategory', function() {
      it('should call updateCategory successfully', function(done) {
        //uncomment below and update the code to test updateCategory
        //instance.updateCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProduct', function() {
      it('should call updateProduct successfully', function(done) {
        //uncomment below and update the code to test updateProduct
        //instance.updateProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
