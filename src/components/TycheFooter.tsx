import { Link } from "@tanstack/react-router";
import { InstagramIcon } from "@/components/SocialIcons";
import { Play } from "lucide-react";
import tycheLogo from "@/assets/tyche-poker-logo-transparent.png";

export function TycheFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#020a09] text-white">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Link to="/tyche-poker" className="inline-flex" aria-label="Tyche Poker">
            <img src={tycheLogo} alt="Tyche Poker" width={690} height={713} className="h-28 w-auto object-contain drop-shadow-[0_8px_24px_rgba(94,152,144,0.2)]" loading="lazy" />
          </Link>
          <p className="mt-3 max-w-md text-sm text-white/55">
            Poker ao vivo, entretenimento e tecnologia para transmissões profissionais.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="https://www.instagram.com/tychepoker/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Tyche Poker" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#5e9890] hover:text-white">
              <InstagramIcon size={18} />
            </a>
            <a href="https://www.youtube.com/@TychePoker" target="_blank" rel="noopener noreferrer" aria-label="YouTube do Tyche Poker" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#5e9890] hover:text-white">
              <Play size={18} fill="currentColor" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
          <Link to="/tyche-poker" className="transition hover:text-white">Tyche Poker</Link>
          <Link to="/tyche-poker/tech" className="transition hover:text-white">Tyche Tech</Link>
        </div>
      </div>
      <div className="container-x border-t border-white/10 py-5 text-xs text-white/40">
        © {new Date().getFullYear()} Tyche Poker. Todos os direitos reservados.
      </div>
    </footer>
  );
}