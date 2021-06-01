build(){
    docker build --tag gql_api .
}
stop(){
    docker kill $(docker ps -q)
}

start(){
    docker run --rm --publish 4000:4000  --env MONGODB_URI=$MONGODB_URI gql_api
}

prune(){
    docker system prune -f -a
}

#run the command ...
$@