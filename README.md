Criação do container

docker build -t api-app .

para execução do docker compose

docker-compose up -d

para visualizar o logs basta usar o comando a baixo

docker logs -f api-app

Apos startar o projeto criar as tabelas com o comando a baixo do Typeorm

 yarn typeorm migrations:run