This project is intended to be a simple experience.

I want to create a simple analogue of socket.io sockets with help of AJAX and SSE tecnologies.
```
|		|					         	-------------
|		|			----SSE---->	  	|  client 	|
|		|			<---AJAX----  		|     1   	|
|	S	|					         	-------------
|		|			
|		|					         	-------------
|	E	|			----SSE---->  		|  client 	|
|		|			<---AJAX----	  	|     2   	|
|	R	|					         	-------------
|		|
|		|					         	-------------
|	V	|			----SSE---->  		|  client 	|
|		|			<---AJAX----	  	|     3   	|
|	E	|					         	-------------
|		|		
|		|					         	-------------
|	R	|			----SSE---->  		|  client 	|
|		|			<---AJAX----  		|     4   	|
|		|					         	-------------
```
