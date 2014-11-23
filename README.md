This project is intended to be a simple experience.

I want to create a simple analogue of socket.io sockets with help of AJAX and SSE tecnologies.
```
|		|					         	-------------
|		|			----SSE---->	  	|  client 	|
|		|			<---AJAX----  		|     1   	|
|		|					         	-------------
|		|			
|		|					         	-------------
|	S	|			----SSE---->  		|  client 	|
|	E	|			<---AJAX----	  	|     2   	|
|	R	|					         	-------------
|	V	|
|	E	|					         	-------------
|	R	|			----SSE---->  		|  client 	|
|		|			<---AJAX----	  	|     3   	|
|		|					         	-------------
|		|		
|		|					         	-------------
|		|			----SSE---->  		|  client 	|
|		|			<---AJAX----  		|     4   	|
|		|					         	-------------
```
