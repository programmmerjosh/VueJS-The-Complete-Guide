### Index

### Working with a backend (Sending and Fetching data as well as handling technical and server errors)

- HTTPS requests
- In this section I am using a *secrets.json* file (I have specifically NOT added to version control ~ 
using .gitignore) where I can store my database endpoints (and any other secret/hidden data) and not have 
them shared in the code itself. So, I'm using a variable in place of the actual data.

### In the first 4 projects we focus on Sending and Getting (Fetching) data
- JSON.stringify (how we send data to the database)
- fetch method (with method: GET/POST, headers, body)

### Projects: http-05-handling-technical-errors & http-06-handling-error-responses

- we focus on handling errors (technical and server related)
- .catch((error) => {}), throw new Error('Could not save data!');

- Also handling/reading data (that we get back from the database)
- .then((response) => {}), if (response.ok), return response.json();