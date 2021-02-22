# OTwoAPI

**Start**

```console
foo@bar:/app/otwoapi$ npm run start
```

**Compile**

```console
foo@bar:~/app/otwoapi$ npm run compile
```

**Docker**

```console
foo@bar:~/app/otwoapi$ docker build -t otwoapi .
foo@bar:~/app/otwoapi$ docker run --name otwoapi-app -p 1155:3000 -d --env-file ./.env otwoapi
```
