import {
    ApiClient,
    DefaultApi
} from './generated/src'

class RestAPIClient extends ApiClient {
    callApi(path, httpMethod, pathParams, queryParams, collectionQueryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, callback) {
        return fetch(`${this.basePath}${path}`,
            {
                method: httpMethod
            });
    }
}

class CategoryProductTreeAPI extends DefaultApi {
    constructor() {
        super(new RestAPIClient())
    }
}

export {
    CategoryProductTreeAPI
}