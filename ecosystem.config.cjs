// Configuração do PM2 para rodar o site no servidor próprio, atrás do nginx.
// Uso (depois de "npm run build:node"): pm2 start ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "tyche",
      script: ".output/server/index.mjs",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        // Só o nginx (na mesma máquina) acessa; a porta não fica aberta para a internet.
        HOST: "127.0.0.1",
        PORT: "3001",
      },
      max_memory_restart: "512M",
    },
  ],
};
