# Simple OVP Api

> NOTE: The API has a login endpoint, but this the most basic authentication implementation, so please DO NOT reuse this in any production code.

### Description

The purpose of this project was to provide an API for a React-Native POC mobile application for Accedo.tv.


### API Endpoints

|endpoint|method|description|example|
|--------|------|-----------|-------|
|/api/login|GET|Authenticates the user|`curl -d '{ "email": "john@doe.com", "password": "secret" }' http://localhost/api/login/`|
|/api/movie|GET|Returns all the Movies from the database|curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/movie/`|
|/api/serie|GET|Returns all the Series from the database|`curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/serie/`|
|/api/detail/:id|GET|Returns all the data for the asset with the given `:id`|`curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/detail/1032`|



### Tech Stack

 * express.js
 * node.js
 * apidoc
 * vanilla js
 * json


### Usage

The server can be started using the `start_server.sh` bash file.


### Implementation details

##### Data(Store?)

The data is served from JS file (`routes/dummyData.js`).
