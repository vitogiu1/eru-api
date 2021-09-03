const fetch = require('node-fetch')

  class dbl {
    constructor(token) {
        this.token = token;
    }


      serverCount(servidores) {
        return fetch(`https://eru.discordlist.cf/api/bots/stats`, {
            method: 'POST',
            headers: {
                'serverCount': this.token,
                'Content-Type': 'application/json',
                'Authorization': servidores
            }
        }).then(console.log('Postado!'))

    }
      async isVoted(id) {
        return await fetch(`https://eru.discordlist.cf/api/bots/check/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.token
            }
        }).then(res => res.json()).then(async json => json.voted);
    }

    async searchBot(id) {
        return await fetch(`https://eru.discordlist.cf/api/bots/${id}`, {
              method: 'GET'
          })
          .then(res => res.json()).then(json => json);
        }
}


module.exports = dbl