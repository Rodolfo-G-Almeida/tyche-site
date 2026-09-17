import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import tycheLogo from "@/assets/tyche-poker-logo-transparent.png";

const pokerLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tyche", label: "Tyche" },
  { href: "#cash-game", label: "Cash Game" },
  { href: "#como-funciona", label: "Como funciona" },
] as const;

const techLinks = [
  { href: "#sistema", label: "O sistema" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#especificacoes", label: "Especificações" },
  { href: "#para-quem", label: "Para quem" },
] as const;

export function TycheHeader() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const isTech = pathname.startsWith("/tyche-poker/tech");
  const links = isTech ? techLinks : pokerLinks;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04100e]/95 text-white backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/tyche-poker" className="flex h-[4.5rem] items-center py-1" onClick={() => setOpen(false)} aria-label="Tyche Poker">
          <img src={tycheLogo} alt="Tyche Poker" width={690} height={713} className="h-[4.25rem] w-auto object-contain drop-shadow-[0_6px_18px_rgba(94,152,144,0.2)]" />
        </Link>

        <nav aria-label="Navegação Tyche" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">
              {link.label}
            </a>
          ))}
          {isTech ? (
            <Link to="/tyche-poker" className="rounded-full border border-[#5e9890]/55 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5e9890]/15">
              Tyche Poker
            </Link>
          ) : (
            <Link to="/tyche-poker/tech" className="rounded-full bg-[#5e9890] px-5 py-2.5 text-sm font-semibold text-[#06201d] transition hover:bg-[#78b6ad]">
              Tyche Tech
            </Link>
          )}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </div>

      {open && (
        <nav aria-label="Navegação Tyche mobile" className="border-t border-white/10 bg-[#04100e] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 text-sm text-white/75">
                {link.label}
              </a>
            ))}
            {isTech ? (
              <Link to="/tyche-poker" onClick={() => setOpen(false)} className="mt-3 rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white">
                Voltar ao Tyche Poker
              </Link>
            ) : (
              <Link to="/tyche-poker/tech" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-[#5e9890] px-5 py-3 text-center text-sm font-semibold text-[#06201d]">
                Conhecer Tyche Tech
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}