# Minecraft Survival Resource Calculator (SRC) API

### The API used to communicate between the client and server of the Minecraft Survival Resource Calculator (SRC) and a definition of all relevant data structures.<br><br>

# General Information

## Request Parameters

HTTP requests can utilize two types of parameters: route and query.<br><br>

Route parameters represent static (unchanging) data that helps identify the resource being requested. They are part of the request URL and are typically represented in the form `/:param` in the route of an endpoint. Example: `http://example.com/route/:param/subroute`. This API will make use of at least one route parameter.<br><br>

Query parameters represent variable data (data that may change) and are often used to impose filters on the requested data. They are defined in the form `param=value`. Multiple query parameters may be joined together by the `&` symbol. Together, all query parameters are known as the query string. The query string is found at the end of the request URL and is preceded by a `?`. Example: `http://example.com?param1=value1&param2=value2`. This API is not making use of any query parameters at this time.<br><br>

Route and Query parameters may be combined in the same request URL. For example: `http://example.com/route/:routeparam?queryparam=value`. In this case, `:routeparam` specifies what resource to retrieve and `queryparam=value` specifies how to filter what is returned from the resource.<br><br>

# Responses

### Each endpoint will return its own data, but all responses will follow the same general structure, as shown here:

```javascript
{
	success: Boolean
	data: Object
}
```

### The `success` property indicates whether or not the request encountered an error of some kind. The `data` property will contain whatever the endpoint returned.<br><br>

## Error Responses

### Error Responses that are properly handled by the server will always have the following structure:

```javascript
{
	success: false,
	data: {
		message: String
	}
}
```

### The message will give some indication of what went wrong. If the error response does not match this structure, something may be wrong with the request and more debugging will be required to determine the problem.<br><br>

# Endpoints

## Summary

| Endpoint                               | Request Type | Description                                                                                                                |
| -------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `/projectlist`                         | `GET`        | Retrieve basic information for all saved projects.                                                                         |
| `/createproject`                       | `POST`       | Create a new project.                                                                                                      |
| `/project/:project`                    | `GET`        | Retrieve the component list for the project identified by the route parameter `:project`.                                  |
| `/project/:project/calculateresources` | `GET`        | Calculate the raw resources required to obtain the components of the project identified by the route parameter `:project`. |

<br><br>

## `/projectlist`

### Description

Retrieve basic information for all saved projects.

### Usage

Make a `GET` request to `http://localhost/projectlist`.

### Parameters/Request Body

None

### Response Data

This endpoint returns the following structure as the `data` property in the standard response:

```javascript
{
	projects: Project[]
}
```

<br><br>

## `/createproject`

### Description

Create a new project.

### Usage

Make a `POST` request to `http://localhost/createproject`.

### Parameters/Request body

Request body:

```javascript
{
	projectName: String,
	projectAuthor: String,
	projectComponents: Item[]
}
```

### Response Data

This endpoint returns the following structure as the `data` property in the standard response:

```javascript
{
	message: "Successfully created project!"
}
```

<br><br>

## `/project/:project`

### Description

Retrieve the component list for the project identified by `:project`.

### Usage

Make a `GET` request to `http://localhost/project/:project`

### Parameters/Request Body

| Parameter  | Type  | Data Type | Required | Description                      |
| ---------- | ----- | --------- | -------- | -------------------------------- |
| `:project` | route | `Integer` | `true`   | The ID of the requested project. |

### Response Data

This endpoint returns the following structure as the `data` property in the standard response:

```javascript
{
	project: Project
}
```

<br><br>

## `/project/:project/calculateresources`

### Description

Calculate the raw resources required to obtain all components of the project identified by `:project`.

### Usage

Make a `GET` request to `http://localhost/project/:project/calculateresources`

### Parameters/Request Body

| Parameter  | Type  | Data Type | Required | Description                      |
| ---------- | ----- | --------- | -------- | -------------------------------- |
| `:project` | route | `Integer` | `true`   | The ID of the requested project. |

### Response Data

This endpoint returns the following structure as the `data` property in the standard response:

```javascript
{
	rawResources: Item[]
}
```

<br><br>

# Data Type Definitions

## Summary

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `Project` | Data class for representing Minecraft SRC projects. |
| `Item`    | Data class for representing Minecraft items.        |

Note: There are other data types besides these two, but these are the only data types that will be returned to the client.

<br><br>

## `Project`

### Description

A data representation of a Minecraft Survival Resource Calculator (SRC) project.

### Properties

| Property       | Type      | Description                                                                                                  |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `id`           | `Integer` | The unique identifier used by the database to identify a project.                                            |
| `name`         | `String`  | The name of the project.                                                                                     |
| `author`       | `String`  | The name of the project's author.                                                                            |
| `description`  | `String`  | A description of the project.                                                                                |
| `creationDate` | `Integer` | The date a project was created, given as an Epoch timestamp (the time in milliseconds since 1 January 1970). |

### JavaScript Representation

```javascript
{
	id: Integer,
	name: String,
	author: String,
	description: String,
	creationDate: Integer
}
```

<br><br>

## `Item`

### Description

A basic data representation of a Minecraft item.

### Properties

| Property      | Type      | Description                                                                                                                                                                     |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | `Integer` | The unique identifier used by the database to identify a project.                                                                                                               |
| `namespace`   | `String`  | The namespace to which the item belongs. Usually associated with the code base that defines the item. Example: all vanilla Minecraft items belong to the namespace `minecraft`. |
| `blockId`     | `String`  | The ID used to uniquely identify an item within its namespace. Example: a diamond pickaxe in vanilla Minecraft has the block ID `diamond_pickaxe`.                              |
| `name`        | `String`  | The human-readable name of the item.                                                                                                                                            |
| `stackSize`   | `Integer` | Indicates how many of the item may be stacked at once.                                                                                                                          |
| `isRaw`       | `Boolean` | Indicates whether the item is a raw resource or must be obtained through crafting or smelting.                                                                                  |
| `isSmeltable` | `Boolean` | Indicates whether or not the item can be smelted in a regular furnace.                                                                                                          |
| `isBlastable` | `Boolean` | Indicates whether or not the item can be smelted in a blast furnace.                                                                                                            |
| `isSmokable`  | `Boolean` | Indicates whether or not the item can be smelted in a smoker.                                                                                                                   |
| `burnTime`    | `Integer` | How long the item will burn when used as fuel in a regular furnace. Must be >= 0. A value of 0 indicates that the item cannot be used as fuel.                                  |

### JavaScript Representation

```javascript
{
	id: Integer,
	namespace: String,
	blockId: String,
	name: String,
	stackSize: Integer,
	isRaw: Boolean,
	isSmeltable: Boolean,
	isBlastable: Boolean,
	isSmokable: Boolean,
	burnTime: Integer
}
```
