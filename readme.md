Aura
#########

# Run project
API
```
docker-compose up
```

Client
```
ng serve
```


# URL
Swagger
http://localhost:8080/docs

API
http://localhost:8080/api

# Commandes

## JWT
create an user:
curl -X POST http://localhost:8080/register -d _username=[EMAIL] -d _password=[PASSWORD]

Login and get token
```
curl -X POST -H "Content-Type: application/json" http://localhost:8080/login_check -d '{"username":"johndoe","password":"test"}'
```

Test Auth
```
curl -H "Authorization: Bearer[TOKEN]" http://localhost:8080/test_api
```


## API
Update schema
```
docker-compose exec php bin/console doctrine:schema:update --force
```

