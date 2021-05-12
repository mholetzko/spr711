build(){
    docker build --tag gql_api .
}

start(){
    docker run --rm --publish 4000:4000  gql_api
}

prune(){
    docker system prune -f -a
}

#run the command ...
$@