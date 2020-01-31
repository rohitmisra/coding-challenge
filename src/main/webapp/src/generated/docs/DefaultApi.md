# OpenApiDefinition.DefaultApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](DefaultApi.md#createCategory) | **POST** /api/v1/category | 
[**createProduct**](DefaultApi.md#createProduct) | **POST** /api/v1/product | 
[**deleteCategory**](DefaultApi.md#deleteCategory) | **DELETE** /api/v1/category/{id} | 
[**deleteProduct**](DefaultApi.md#deleteProduct) | **DELETE** /api/v1/product/{id} | 
[**findProductById**](DefaultApi.md#findProductById) | **GET** /api/v1/product/{id} | 
[**getAllProducts**](DefaultApi.md#getAllProducts) | **GET** /api/v1/product | 
[**getCategories**](DefaultApi.md#getCategories) | **GET** /api/v1/category | 
[**getCategoryById**](DefaultApi.md#getCategoryById) | **GET** /api/v1/category/{id} | 
[**getCategoryProductTree**](DefaultApi.md#getCategoryProductTree) | **GET** /api/v1/category/productTree | 
[**updateCategory**](DefaultApi.md#updateCategory) | **PUT** /api/v1/category/{id} | 
[**updateProduct**](DefaultApi.md#updateProduct) | **PUT** /api/v1/product/{id} | 


<a name="createCategory"></a>
# **createCategory**
> CategoryResponse createCategory(opts)



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var opts = {
  'categoryRequest': new OpenApiDefinition.CategoryRequest() // CategoryRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCategory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryRequest** | [**CategoryRequest**](CategoryRequest.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="createProduct"></a>
# **createProduct**
> ProductResponse createProduct(opts)



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var opts = {
  'productRequest': new OpenApiDefinition.ProductRequest() // ProductRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProduct(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productRequest** | [**ProductRequest**](ProductRequest.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="deleteCategory"></a>
# **deleteCategory**
> deleteCategory(id)



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var id = 789; // Number | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCategory(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(id)



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var id = 789; // Number | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProduct(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="findProductById"></a>
# **findProductById**
> ProductResponse findProductById(id)



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var id = 789; // Number | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProductById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getAllProducts"></a>
# **getAllProducts**
> [ProductResponse] getAllProducts()



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllProducts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ProductResponse]**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCategories"></a>
# **getCategories**
> [CategoryResponse] getCategories()



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategories(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CategoryResponse]**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCategoryById"></a>
# **getCategoryById**
> CategoryResponse getCategoryById(id)



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var id = 789; // Number | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategoryById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getCategoryProductTree"></a>
# **getCategoryProductTree**
> [CategoryProductTreeResponse] getCategoryProductTree()



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategoryProductTree(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CategoryProductTreeResponse]**](CategoryProductTreeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateCategory"></a>
# **updateCategory**
> CategoryResponse updateCategory(id, opts)



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var id = 789; // Number | 
var opts = {
  'categoryRequest': new OpenApiDefinition.CategoryRequest() // CategoryRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCategory(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **categoryRequest** | [**CategoryRequest**](CategoryRequest.md)|  | [optional] 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateProduct"></a>
# **updateProduct**
> ProductResponse updateProduct(id, opts)



### Example
```javascript
var OpenApiDefinition = require('open_api_definition');

var apiInstance = new OpenApiDefinition.DefaultApi();
var id = 789; // Number | 
var opts = {
  'productRequest': new OpenApiDefinition.ProductRequest() // ProductRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProduct(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **productRequest** | [**ProductRequest**](ProductRequest.md)|  | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

