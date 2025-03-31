httpMethod": "GET",
"id": "parallelstore.projects.locations.operations.list",
"parameterOrder": [
"name"
],
"parameters": {
"filter": {
"description": "The standard list filter.",
"location": "query",
"type": "string"
},
"name": {
"description": "The name of the operation's parent resource.",
"location": "path",
"pattern": "^projects/[^/]+/locations/[^/]+$",
"required": true,
"type": "string"
},
"pageSize": {
"description": "The standard list page size.",
"format": "int32",
"location": "query",
"type": "integer"
},
"pageToken": {
"description": "The standard list page token.",
"location": "query",
"type": "string"
}
},
"path": "v1beta/{+name}/operations",
"response": {
"$ref": "ListOperationsResponse"
},
"scopes": [
"https://www.googleapis.com/auth/cloud-platform"
]
}
}
}
}
}
}
}
},
"revision": "20250219",
"rootUrl": "https://parallelstore.googleapis.com/",
"schemas": {
"DestinationGcsBucket": {
"description": "Cloud Storage as the destination of a data transfer.",
"id": "DestinationGcsBucket",
"properties": {
"uri": {
"description": "Required. URI to a Cloud Storage bucket in the format: `gs:///`. The path inside the bucket is optional.",
"type": "string"
}
},
"type": "object"
},
"DestinationParallelstore": {
"description": "Parallelstore as the destination of a data transfer.",
"id": "DestinationParallelstore",
"properties": {
"path": {
"description": "Optional. Root directory path to the Paralellstore filesystem, starting with `/`. Defaults to `/` if unset.",
"type": "string"
}
},
"type": "object"
},
"ExportDataRequest": {
"description": "Export data from Parallelstore to Cloud Storage.",
"id": "ExportDataRequest",
"properties": {
"destinationGcsBucket": {
"$ref": "DestinationGcsBucket",
"description": "Cloud Storage destination."
},
"requestId": {
"description": "Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).",
"type": "string"
},
"serviceAccount": {
"description": "Optional. User-specified Service Account (SA) credentials to be used when performing the transfer. Use one of the following formats: * `{EMAIL_ADDRESS_OR_UNIQUE_ID}` * `projects/{PROJECT_ID_OR_NUMBER}/serviceAccounts/{EMAIL_ADDRESS_OR_UN