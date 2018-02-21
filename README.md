## Running YARN from docker

### Install packages

```
ID=$(docker build . -q) && docker run --rm -it -v "$PWD:/build" $ID yarn install
```

### Run server

The server will be accessible at http://localhost:8080/

```
ID=$(docker build . -q) && docker run --rm -it -v "$PWD:/build" -p 8080:8080 $ID yarn headless
```
