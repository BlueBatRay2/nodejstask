<div style="text-align: center;">

<h2 align="center">NodeJS Task</h2>

  <p style="text-align: center;">
    A simple demonstration of uploading a file, hashing its contents and storing hash and size into a database. 
  </p>
</div>


### Built With

* [![NPM][NPM]][NPM-url]
* [![NodeJS][NodeJS]][NodeJS-url]
* [![SQLite][SQLite]][SQLite-url]


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* **NodeJS:** Visit the official Node.js website: https://nodejs.org/

* **NPM:** This should be automatically installed with NodeJS.

* **File:** This can be anything, just need a file to upload.

### Installation (for local)

1. **Clone the repo:** Use the following command to clone this repo to your local machine
   ```sh
   git clone https://github.com/BlueBatRay2/nodejstask.git
   ```
2. **Change directory:** Move to project directory
   ```sh
   cd nodejstask
   ```
3. **Install dependencies:** This will install all dependencies specified in the package.json file.
   ```sh
   npm install
   ```

4. **Start the app:** Everything should be ready to go, fire it up.
   ```sh
   node server.js
   ```
   
<!-- USAGE EXAMPLES -->
## Usage

#### Upload file
- To upload a file, make a `POST` request with form-data along with the file's path

  **Parameters:**
    - `Content-Type` (Required) multipart/form-data
    - `file` (Required) path/to/file

  **Return Values:**
    - `hash` *unique hash of file uploaded*
    - `size` *size of file just uploaded*

Here is an example of the request in CURL:
```http
curl -X POST -H "Content-Type: multipart/form-data" -F "file=@/path/to/your/file" http://localhost:3000/upload
```
Successful response will look something like this
```json
{
  "hash":"f5afb668d7d5d201df5180dabfcb42e66467ec32",
  "size":11827117
}
```

[NPM]: https://img.shields.io/static/v1?style=for-the-badge&message=npm&color=CB3837&logo=npm&logoColor=FFFFFF&label=
[NPM-url]: https://https://www.npmjs.com/
[NodeJS]: https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=
[NodeJS-url]: https://https://www.nodejs.org/
[SQLite]: https://img.shields.io/static/v1?style=for-the-badge&message=SQLite&color=003B57&logo=SQLite&logoColor=FFFFFF&label=
[SQLite-url]: https://www.sqlite.org/
