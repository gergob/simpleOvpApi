# Simple OVP Api

> NOTE: The API has a login endpoint, but this the most basic authentication implementation, so please DO NOT reuse this in any production code.

### Description

The purpose of this project was to provide an API for a React-Native POC mobile application for Accedo.tv.


### API Endpoints

| Endpoint | method | description | example |
|--------|------|-----------|-------|
|`/login`|`GET`|Authenticates the user|`curl -d '{ "email": "john@doe.com", "password": "secret" }' http://localhost/api/login/`|
|`/movie`|`GET`|Returns all the Movies from the database|`curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/movie/`|
|`/serie`|`GET`|Returns all the Series from the database|`curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/serie/`|
|`/detail/:id`|`GET`|Returns all the data for the asset with the given `:id`|`curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/detail/1032`|
|`/resume`|`GET`|Gets all items which have a progress in playback|`curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/resume/`|
|`/data/:nr`|`GET`|Gets a fix number of items (series and/or movies)|`curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/data/20`|
|`/search`|`POST`|Searches the keyword in: title, genre, description, actors, director, releaseDate|`curl -X POST -H "X-SimpleOvpApi: USER_KEY_2" -H "Content-Type: application/x-www-form-urlencoded" -d 'keyword=john'`|
|`/menu`|`GET`|Gets the menu elements and their configurations|`curl -X GET -H "X-SimpleOvpApi: USER_KEY_2" http://localhost/api/menu/`|



### Tech Stack

 * express.js
 * node.js
 * apidoc
 * vanilla js
 * json


### Usage

 1. `git clone https://github.com/gergob/simpleOvpApi`
 1. `cd simpleOvpApi`
 1. `npm install`
 1. launch using `./start_server.sh`


### Implementation details

##### Data(Store?)

The data is served from JS file (`routes/dummyData.js`).
