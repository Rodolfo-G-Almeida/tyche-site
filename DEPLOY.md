# Deploy no servidor próprio (tyche.poker)

O domínio **tyche.poker** roda num servidor próprio com **nginx**. Este guia troca o servidor de
desenvolvimento (`vite dev`) por um **build de produção** rodando com **PM2**.

O deploy da Vercel é separado e continua funcionando como antes (usa `npm run build`).

| | Servidor de desenvolvimento (antes) | Build de produção (agora) |
|---|---|---|
| Velocidade | compila cada arquivo na hora | arquivos já otimizados |
| Código-fonte | fica público (`/package.json`, `/src/...`) | não é exposto |
| Cache de imagens e scripts | nenhum | 1 ano (arquivos com hash) |

## Requisitos no servidor

- Node.js 22 LTS (mínimo 20.19) e npm
- PM2: `sudo npm install -g pm2`
- nginx
- git com acesso ao repositório `Rodolfo-G-Almeida/tyche-site`

## Primeira instalação

**0. Antes de tudo, confira se há edições feitas direto no servidor.** Hoje o site lê os arquivos
na hora, então pode haver mudanças que só existem lá. Na pasta atual do site, rode `git status` e
`git diff`. Se aparecer algo, leve para o GitHub antes de continuar.

**1. Baixar o código** (branch `main`):

```bash
git clone https://github.com/Rodolfo-G-Almeida/tyche-site.git tyche-site
cd tyche-site
```

**2. Instalar as dependências e gerar o build** (cria a pasta `.output/`):

```bash
npm ci
npm run build:node
```

**3. Subir o site com o PM2** (porta 3001, só acessível pela própria máquina):

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

O `pm2 startup` mostra um comando com `sudo`; rode-o para o site voltar sozinho se o servidor reiniciar.

**4. Testar antes de mexer no nginx:**

```bash
curl -I http://127.0.0.1:3001/tyche-poker
```

Tem que responder `HTTP/1.1 200`.

**5. Apontar o nginx para o novo processo.** No bloco `server` do tyche.poker, a parte `location /`
fica assim:

```nginx
location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

```bash
sudo nginx -t && sudo systemctl reload nginx
```

**6. Conferir o site no ar** e, só depois, desligar o `vite dev` antigo.

Se a porta 3001 já estiver em uso no servidor, troque o `PORT` em `ecosystem.config.cjs` e no
`proxy_pass` do nginx.

## Atualizar o site

```bash
cd tyche-site
git pull
npm ci
npm run build:node
pm2 reload tyche
```

## Voltar para a versão anterior

```bash
git log --oneline -5
git checkout <commit-anterior>
npm ci
npm run build:node
pm2 reload tyche
```

Depois de corrigir o problema no GitHub, volte para a branch com `git checkout main` e atualize normalmente.

## Regras importantes

- **Não edite arquivos direto no servidor.** O build não enxerga essas edições e o próximo `git pull`
  pode dar conflito. Toda mudança vai pelo GitHub.
- A pasta `.output/` é gerada pelo build e não vai para o git.
- Logs do site: `pm2 logs tyche`. Situação: `pm2 status`.

## Específico do Tyche

- A página inicial (`/`) redireciona para `/tyche-poker`; a Tyche Tech fica em `/tyche-poker/tech`.
- O build da Vercel continua usando o preset `vercel` (definido em `vite.config.ts`); só o `npm run build:node` gera a versão para o servidor próprio.
