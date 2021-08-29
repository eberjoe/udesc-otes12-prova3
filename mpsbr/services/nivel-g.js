const axios = require('axios');

exports.nivelg = async function(body) {

  const rateIndex = ['Ausente', 'Insuficiente', 'Regular', 'Bom', 'Excelente'];

  const {
    gpr1, gpr5, gpr6, gpr8, gpr9, gpr11,
    req1, req5, req6, req7
  } = body;

    const gprPayload = {gpr1, gpr5, gpr6, gpr8, gpr9, gpr11};
    const reqPayload = {req1, req5, req6, req7};
    
  const req = await axios.post('http://localhost:8002/indicadores/v1/req', reqPayload)
  .then(function (response) {
    return response.data.req
  });

  const gpr = await axios.post('http://localhost:8002/indicadores/v1/gpr', gprPayload)
  .then(function (response) {
    return response.data.gpr
  });

  return new Promise(function(resolve, reject) {
    resolve({req, gpr, capacity: {
      i: `O processo${
        rateIndex.indexOf(req) > 1 ? ' ' : ' não '
      }produz os resultados definidos.`,
      ii: `A execução do processo${
        rateIndex.indexOf(gpr) > 1 ? ' ' : ' não '
      }é planejada e monitorada.`,
      iii: `As pessoas${
        rateIndex.indexOf(gpr) > 1 && rateIndex.indexOf(req) > 1 ? ' ' : ' não '
      }estão preparadas para executar suas responsabilidades no processo.`
      }
    });
  });
}

