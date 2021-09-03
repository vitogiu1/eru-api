# Eru-Api - A api oficial da eru-botlist

Como usar?

Primeiramente instale, utilizando:
```shell
npm i eru-api
```

Consiga seu token, no site da botlist, nas configurações de seu bot, após ele ter sido aprovado

```js
const eruApi = require('eru-api');

const dbl = new eruApi({
    token: "Seu token de autorização conseguido no site da botlist"
})
```

Após ter se conectado, basta começar a utilizar a api :)