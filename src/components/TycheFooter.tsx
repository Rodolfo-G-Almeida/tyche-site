import { Link } from "@tanstack/react-router";
import { InstagramIcon, YouTubeIcon } from "@/components/SocialIcons";
import mount8Logo from "@/assets/mount8-logo.png";

/** Site institucional da Mount8, dona do projeto Tyche. */
const MOUNT8_URL = "https://mount8.co";

/**
 * Mesmo rodapé do site da Mount8 (grupo dono do Tyche), com as redes sociais
 * do Tyche Poker no lugar das da Mount8.
 */
const groupLinks = [
  { href: `${MOUNT8_URL}/bts-brasil`, label: "BTS Brasil Produtora" },
  { href: `${MOUNT8_URL}/bts-brasil-tv`, label: "BTSBrasilTV Canal" },
  { href: `${MOUNT8_URL}/mount8-creative`, label: "Mount8 Creative" },
  { href: `${MOUNT8_URL}/mount8-music`, label: "Mount8 Music" },
  { href: `${MOUNT8_URL}/shao-system`, label: "Mount8 Tech" },
  { to: "/tyche-poker", label: "Tyche Poker" },
  { to: "/tyche-poker/tech", label: "Tyche Tech" },
] as const;

const socials = [
  { href: "https://www.youtube.com/@TychePoker", label: "YouTube do Tyche Poker", Icon: YouTubeIcon },
  { href: "https://www.instagram.com/tychepoker/", label: "Instagram do Tyche Poker", Icon: InstagramIcon },
];

export function TycheFooter() {
  return (
    <footer id="contato" className="border-t border-white/10 bg-[#020a09] text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href={MOUNT8_URL} className="flex items-center gap-3 font-display text-xl font-bold">
              <img src={mount8Logo} alt="Mount8" width={48} height={48} loading="lazy" className="h-12 w-12 rounded-md bg-[#e8ead9] object-contain p-1" />
              <span>Mount8</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Uma empresa, múltiplas especialidades em um único contato.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">O Grupo</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {groupLinks.map((l) => (
                <li key={l.label}>
                  {"to" in l ? (
                    <Link to={l.to} className="hover:text-white">{l.label}</Link>
                  ) : (
                    <a href={l.href} className="hover:text-white">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Soluções</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Broadcast e Streaming</li>
              <li>Eventos Corporativos</li>
              <li>Live Marketing</li>
              <li>Produção Audiovisual</li>
              <li>Esports</li>
              <li>Tecnologia e IA</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href="mailto:contato@btsbrasil.tv" className="hover:text-[#5e9890]">contato@btsbrasil.tv</a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80 transition hover:border-[#5e9890] hover:bg-white/10 hover:text-white"><Icon size={18} /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} Mount8. Holding de broadcast, live marketing e tecnologia. Todos os direitos reservados.</span>
          <span>CNPJ 62.310.338/0001-05 - São Paulo, Brasil</span>
        </div>
      </div>
    </footer>
  );
}
