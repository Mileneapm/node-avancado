const express = require('express')
const yaml = require('js-yaml')
const fs = require('fs')

const usuarioController = require('./controller/usuario.controller')()

  try {
    let fileContents = fs.readFileSync('./src/config/host.yaml', 'utf8');
    data = yaml.load(fileContents);
      } catch (e) {
        console.log(e);
  }

  const app = express()
  const port = data['port']

  app.use(express.json())

  const routing = require('./routes/routing')

  app.use(routing) 

  
  function validarToken(req, res, next) {
    var token = req.headers['token'];
  
    if (!token) {
      return res.status(401).json({ autenticacao: false, message: 'É necessário enviar o token.', code: 'ERR001' });
    }
  
    jwt.verify(token, 'userToken', function (err, payload) {
      if (err) {
        console.log(err)
        return res.status(500).json({ autenticacao: false, message: err.message, code: 'ERR002' });
      }

      console.log(payload.user)
  
      req.user = payload.user
  
      next();
    });
  }
  
  app.use(validarToken, routing)
  
  app.use(function (err, req, res, next) {
    res.status(err.httpStatusCode || 500).json({ code: err.code, message: err.message })
  });

 /* app.get('/download/:nomeArquivo', async (req, res) => {
    const { nomeArquivo } = req.params
  
    let readStream = fs.createReadStream('./uploads/' + nomeArquivo)
  
    readStream.on('open', function () {
      readStream.pipe(res)
    });
  })*/

  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })