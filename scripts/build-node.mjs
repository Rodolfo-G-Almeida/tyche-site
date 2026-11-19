// Build de produção para o servidor próprio (nginx + PM2). Gera a pasta .output/.
// Uso: npm run build:node   (funciona no Windows, Linux e macOS)
// O deploy da Vercel continua usando "npm run build" e não passa por aqui.
import { spawnSync } from "node:child_process";

const result = spawnSync("npx vite build", {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NITRO_PRESET: "node-server" },
});

process.exit(result.status ?? 1);
