const error = (code, message) => JSON.stringify({code, message});


const success = (data) => JSON.stringify({code: 200, message: 'success', data});



module.exports = {
  error,
  success
}
