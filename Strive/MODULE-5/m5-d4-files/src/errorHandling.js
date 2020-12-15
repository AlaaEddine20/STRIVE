const notFoundHandler = (err, req, res, next) => {
  err.httpStatusCode === 404 ? res.status(404).send(err.message) : next(err)
  }
  
  const unauthorizedHandler = (err, req, res, next) => {
    err.httpStatusCode === 401 ? res.status(401).send(err.message) : next(err)
  }
  
  const forbiddenHandler = (err, req, res, next) => {
    err.httpStatusCode === 403 ? res.status(403).send(err.message) : next(err)
  }

  const badRequestHandler = (err, req, res, next) => {
    err.httpStatusCode === 400 ? res.status(400).send(err.message) : next(err)
  }
  
  const catchAllHandler = (err, req, res) => {
    if (!res.headersSent) {
      res.status(err.httpStatusCode || 500).send("Generic Server Error")
    }
  }
  
  module.exports = {
    notFoundHandler,
    unauthorizedHandler,
    forbiddenHandler,
    badRequestHandler,
    catchAllHandler,
  }
  