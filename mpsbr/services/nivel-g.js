const axios = require('axios');

exports.nivelg = async function(body) {
  const {
    p,c,
    e,d,
    ameaca, seguranca,
    mt, fa, fc, fd,
    gpr1, gpr5, gpr6, gpr8, gpr9, gpr11,
    req1, req5, req6, req7} = body

    const smiPayload = {mt, fa, fc, fd}
    const rePayload = {p, c}
    const drePayload = {e, d}
    const integridadePayload = {ameaca, seguranca}
    const gprPayload = {gpr1, gpr5, gpr6, gpr8, gpr9, gpr11}
    const reqPayload = {req1, req5, req6, req7}
    

  const re = await axios.post('http://localhost:8001/metricas/v1/re', rePayload)
  .then(function (response) {
    console.log(response.data.re)
    return response.data.re 
  })

  const smi = await axios.post('http://localhost:8001/metricas/v1/smi', smiPayload)
    .then(function (response) {
      console.log(response.data.smi)
      return response.data.smi
  })

  const integridade = await axios.post('http://localhost:8001/metricas/v1/integridade', integridadePayload)
  .then(function (response) {
    console.log(response.data.integridade)
    return response.data.integridade
  })

  const dre = await axios.post('http://localhost:8001/metricas/v1/dre', drePayload)
  .then(function (response) {
    console.log(response.data.dre)
    return response.data.dre
  })

  const req = await axios.post('http://localhost:8002/indicadores/v1/gpr', gprPayload)
  .then(function (response) {
    console.log(response.data.gpr)
    return response.data.gpr
  })

  const gpr = await axios.post('http://localhost:8002/indicadores/v1/req', reqPayload)
  .then(function (response) {
    console.log(response.data.req)
    return response.data.req
  })

  return new Promise(function(resolve, reject) {
    if ((req == 'Excelente' && gpr == 'Excelente') ||  (req == 'Excelente' && gpr == 'Bom') || (req == 'Bom' && gpr == 'Excelente')) {
      resolve({re, smi, integridade, dre, req, gpr, capacity: 'A capacidade do seu processo atende o nível G de MPS.BR.'});
    }else{
      resolve({re, smi, integridade, dre, req, gpr, capacity: 'A capacidade do seu processo não atende o nível G de MPS.BR.'});
    }
  });
}

