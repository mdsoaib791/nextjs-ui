"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useDeleteProductMutation = exports.useUpdateProductMutation = exports.useCreateProductMutation = exports.useGetProductQuery = exports.useGetProductsQuery = exports.productService = void 0;
// src/services/productService.ts
var react_1 = require("@reduxjs/toolkit/query/react");
// Define a service using a base URL and expected endpoints
exports.productService = react_1.createApi({
    reducerPath: 'productService',
    baseQuery: react_1.fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    tagTypes: ['Product'],
    endpoints: function (builder) { return ({
        getProducts: builder.query({
            query: function () { return 'products'; },
            providesTags: function (result) {
                return result
                    ? __spreadArrays(result.map(function (_a) {
                        var id = _a.id;
                        return ({ type: 'Product', id: id });
                    }), [
                        { type: 'Product', id: 'LIST' },
                    ]) : [{ type: 'Product', id: 'LIST' }];
            }
        }),
        getProduct: builder.query({
            query: function (id) { return "products/" + id; },
            providesTags: function (result, error, id) { return [{ type: 'Product', id: id }]; }
        }),
        createProduct: builder.mutation({
            query: function (body) { return ({
                url: 'products',
                method: 'POST',
                body: body
            }); },
            invalidatesTags: [{ type: 'Product', id: 'LIST' }]
        }),
        updateProduct: builder.mutation({
            query: function (_a) {
                var id = _a.id, body = _a.body;
                return ({
                    url: "products/" + id,
                    method: 'PUT',
                    body: body
                });
            },
            invalidatesTags: function (result, error, _a) {
                var id = _a.id;
                return [{ type: 'Product', id: id }];
            }
        }),
        deleteProduct: builder.mutation({
            query: function (id) { return ({
                url: "products/" + id,
                method: 'DELETE'
            }); },
            invalidatesTags: function (result, error, id) { return [{ type: 'Product', id: id }, { type: 'Product', id: 'LIST' }]; }
        })
    }); }
});
// Export hooks for usage in functional components
exports.useGetProductsQuery = exports.productService.useGetProductsQuery, exports.useGetProductQuery = exports.productService.useGetProductQuery, exports.useCreateProductMutation = exports.productService.useCreateProductMutation, exports.useUpdateProductMutation = exports.productService.useUpdateProductMutation, exports.useDeleteProductMutation = exports.productService.useDeleteProductMutation;
