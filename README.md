Criação do container

docker build -t api-app .

para execução do docker compose

docker compose up -d

para visualizar o logs basta usar o comando a baixo

docker logs -f api-app

para visualizar url local do database para acesso via beekeper

docker exec database cat /etc/hosts
