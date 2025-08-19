# Configurando o projeto

## Configurando a conexão com o banco de dados
1. Baixe e instale o PostgreSQL.
2. Crie uma base de dados com o nome do banco de dados.
3. Abra o arquivo appsettings.json e coloque a string de conexão com o seu PostgreSQL no campo "DefaultConnection".
   1. Exemplo: "Host=localhost;Port=5432;Database=personaldashboard;Username=postgres;Password=senha"

## Criando as tabelas
1. Instalar o 'dotnet-ef' via terminal.
   1. Abra o terminal e digite 'dotnet tool install --global dotnet-ef'.
2. Faça um build do projeto.
3. Execute o comando 'dotnet ef database update' no terminal para rodar os migrations no seu banco.