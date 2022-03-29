/* 
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

	const errorHTML = `
		
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="preconnect" href="https://fonts.googleapis.com"> 
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
		<style>
			body{
				padding: 0; margin: 0;
				font-family: 'Montserrat', sans-serif;
				font-weight: 800;
				background-color: #4343F9;
				color: #fff;
			}
			#root{
				width: 100%;
				height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 21px;
			}
		</style>
		<title>Not here</title>
	</head>
	<body>
		<div id="root">Rise your gaze to the sky<br/>than a bit back to the URL bar<br/>and check that link again</div>
	</body>
	</html>
	
	`;
    
	let filePath = path.resolve(__dirname + '/../frontend' + req.url);
    
	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	}else{
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				res.end(data);
			}
		});
	}
	});
});

server.listen(9000, "127.0.0.1", () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
}); */

// End of codecool server



const http = require('http');
const path = require('path');
const port = 9000
const fs = require('fs');


const server = http.createServer(function(request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html' })
	let filePath = path.resolve(__dirname + '/../frontend/' + request.url)
		console.log(request.url);
		if(request.url === '/') {
			filePath = filePath + '/index.html'
		}
	console.log(filePath);

	fs.readFile(filePath, function(error, data) {
		if(error) {
			response.writeHead(404)
			response.write('Error: File Not Found')
		} else {
			response.write(data)
		}
		response.end()
	})
})

server.listen(port, function(error) {
	if(error) {
		console.log('Something went wrong', error)
	} else {
		console.log('Server is listening on port ' + port)
	}
})