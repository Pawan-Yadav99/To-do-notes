# Project Name

"To-do-notes"

# Installation

Navigate to the project directory: "cd [project directory]"
Install dependencies using given command: "npm install"

# Configuration

Update the .env file with the necessary configuration details, such as database credentials, API keys, etc.

# Start the application using given command

"npm start"

# use API endpoints for notes

# POST {base_url}/api/v1/notes - Create a new to-do note.

# Example

Request: -{
"title": "notes1",
"description": "hello notes what's up"
}
response:- {
"statusCode": 201,
"message": "Note has been created successfully",
"data": {
"title": "notes1",
"description": "hello notes what's up",
"\_id": "6790f665919decbca282fffa",
"createdAt": "2025-01-22T13:45:09.574Z",
"updatedAt": "2025-01-22T13:45:09.574Z",
"\_\_v": 0
}
}

# PUT {base_url}/api/v1/notes/:id - Update an existing to-do note.

# Example

Request params:{
id:"678fd2e410cabec335d2c37e"
},
body:{
"title": "updated notes1",
"description":"This is updated note description"

}

# GET {base_url}/api/v1/notes - Retrieve all to-do notes.

# Example

Request query params: {
page:1,
limit:10
}

Response : {
"statusCode": 200,
"message": "Note details fetched successfully",
"data": [
{
"_id": "678fd2e410cabec335d2c37e",
"title": "notes1",
"description": "hello notes what's up",
"createdAt": "2025-01-21T17:01:24.176Z",
"updatedAt": "2025-01-21T17:01:24.176Z",
"__v": 0
},
{
"_id": "6790f29c2cfd6496970e0893",
"title": "notes2",
"createdAt": "2025-01-22T13:29:00.735Z",
"updatedAt": "2025-01-22T13:29:00.735Z",
"__v": 0
},
{
"_id": "6790f2f72cfd6496970e089a",
"title": "notes3",
"createdAt": "2025-01-22T13:30:31.497Z",
"updatedAt": "2025-01-22T13:40:15.948Z",
"__v": 0
},
]
}

# DELETE {base_url}/api/v1/notes/:id - Delete a specific to-do note.

# Example

Request params :{
id:"678fd31810cabec335d2c382"
}

Response:{
"statusCode": 200,
"message": "Note has been deleted successfully"
}
