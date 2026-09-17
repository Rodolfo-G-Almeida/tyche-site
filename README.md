# Tyche Poker

Site institucional do **Tyche Poker Live** (transmissões ao vivo de poker) e do **Tyche Tech**
(sistema de transmissão profissional de poker), extraído do projeto Mount8 para deploy
independente.

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Redireciona para `/tyche-poker` |
| `/tyche-poker` | Tyche Poker Live |
| `/tyche-poker/tech` | Tyche Tech |
| `/pulsedeck` | URL antiga, redireciona para `/tyche-poker/tech` |
| `/sitemap.xml` | Sitemap gerado dinamicamente |

## Stack

- **TanStack Start** (React 19, SSR) + **TanStack Router** (roteamento por arquivo em `src/routes/`)
- **Vite** + **Nitro** (build/server engine)
- **Tailwind CSS v4** + **shadcn/ui** (Radix UI)
- **Framer Motion** para animações

## Desenvolvimento

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```
