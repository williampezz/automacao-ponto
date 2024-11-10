require('dotenv').config();

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      config.env.CPF_TESTE = process.env.CPF_TESTE;
      config.env.SENHA = process.env.SENHA;
      return config;
    },
  },
};
