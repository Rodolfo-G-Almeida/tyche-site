import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { getRouteTheme } from "../lib/route-themes";
import { TycheHeader } from "../components/TycheHeader";
import { TycheFooter } from "../components/TycheFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Voltar para a home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">Algo deu errado</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente novamente ou volte para a home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >Tentar de novo</button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-3 text-sm font-medium hover:bg-accent">Ir para a home</a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tyche Poker",
  alternateName: ["Tyche Poker Live", "Tyche Tech"],
  url: "https://tyche.poker",
  description:
    "Tyche Poker Live: transmissões ao vivo de partidas de poker com convidados especiais. Tyche Tech: sistema de transmissão profissional de poker com leitura de cartas em tempo real.",
  areaServed: "Worldwide",
  knowsAbout: ["Poker", "Transmissão ao vivo", "Broadcast", "Streaming", "Tecnologia para broadcast"],
  sameAs: ["https://www.youtube.com/@TychePoker", "https://www.instagram.com/tychepoker/"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tyche Poker Live | Onde estratégia, habilidade e fortuna se encontram" },
      { name: "description", content: "Tyche Poker Live: transmissões ao vivo de partidas de poker com convidados especiais. Conheça também a Tyche Tech, nosso sistema de transmissão profissional de poker." },
      { name: "keywords", content: "Tyche Poker, Tyche Tech, poker ao vivo, transmissão de poker, RFID poker, broadcast de poker" },
      { name: "author", content: "Tyche Poker" },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: "Tyche Poker" },
      { property: "og:title", content: "Tyche Poker Live | Onde estratégia, habilidade e fortuna se encontram" },
      { property: "og:description", content: "Transmissões ao vivo de poker com convidados especiais, mesas exclusivas e cobertura completa." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#04100e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const theme = getRouteTheme(pathname);
  return (
    <QueryClientProvider client={queryClient}>
      <div style={theme}>
        <TycheHeader />
        <main>
          <Outlet />
        </main>
        <TycheFooter />
      </div>
    </QueryClientProvider>
  );
}
