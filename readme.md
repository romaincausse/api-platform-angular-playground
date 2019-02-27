Aura
#########

# Commandes

## JWT
create user:
curl -X POST http://localhost:8080/register -d _username=[EMAIL] -d _password=[PASSWORD]

Login
```
curl -X POST -H "Content-Type: application/json" http://localhost:8080/login_check -d '{"username":"johndoe","password":"test"}'
```

Test Auth
```
curl -H "Authorization: Bearer[TOKEN]" http://localhost:8080/test_api
```


