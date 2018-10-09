# RESTful Web API with Node.js Framework

Udacity's project #3: RESTful Web API

## Node.js framework

Express.js

## Endpoint documentation

### GET
The web API contains a GET endpoint that responds to a request using a URL path with a block height parameter or properly handles an error if the height parameter is out of bounds.
URL: http://localhost:8000/block/0

Response:

    {
     "hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3",
     "height":0,
     "body":"First block in the chain - Genesis block",
     "time":"1530311457",
     "previousBlockHash":""
    }


### POST
The web API contains a POST endpoint that allows posting a new block with the data payload option to add data to the block body. Block body should support a string of text.
URL: http://localhost:8000/block

    {
     "body": "Testing block with test string data"
    }
The response for the endpoint is a block object in JSON format.


## Running the code

Install all the required js packages:

    npm install

Run the code

    node index.js


## Running the tests

Use curl to create a new block

    curl -d '{"body":"Testing block with test string data"}' -H "Content-Type: application/json" -X POST http://localhost:8000/block```

Use curl to retreive a block

    curl -i -H "Accept: application/json" "http://127.0.0.1:8000/block/0"

## Extra test cases

Use curl to create an invalid block

    curl -d '{"New Block":" "}' -H "Content-Type: application/json" -X POST http://localhost:8000/block```

Use curl to retreive an invalid block

    curl -i -H "Accept: application/json" "http://127.0.0.1:8000/block/1000000"

    curl -i -H "Accept: application/json" "http://127.0.0.1:8000/block/test"

## Acknowledgments

* Using Async Await in Express with Node 9
(https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016)


```
PROJECT LICENSE

This project was submitted by Zac Mohsen Pour as part of the Nanodegree At Udacity.

As part of Udacity Honor code, your submissions must be your own work, hence
submitting this project as yours will cause you to break the Udacity Honor Code
and the suspension of your account.

Me, the author of the project, allow you to check the code as a reference, but if
you submit it, it's your own responsibility if you get expelled.

Copyright (c) 2018 Zac Mohsen Pour

Besides the above notice, the following license applies and this license notice
must be included in all works derived from this project.

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


