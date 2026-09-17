import type { CSSProperties } from "react";

/**
 * Cor de marca por rota. Aplicada no wrapper raiz para que header,
 * footer e botão flutuante acompanhem o tema da página.
 */
export const routeThemes: Record<string, CSSProperties> = {
  "/tyche-poker/tech": {
    "--brand": "#5e9890",
    "--brand-foreground": "#06201d",
    "--eyebrow": "#5e9890",
    "--ring": "#5e9890",
  } as CSSProperties,
  "/tyche-poker": {
    "--brand": "#5e9890",
    "--brand-foreground": "#06201d",
    "--eyebrow": "#5e9890",
    "--ring": "#5e9890",
  } as CSSProperties,
};

export function getRouteTheme(pathname: string): CSSProperties | undefined {
  const key = pathname.replace(/\/+$/, "") || "/";
  return routeThemes[key];
}
