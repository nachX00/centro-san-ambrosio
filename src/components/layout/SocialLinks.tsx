import { site } from "@/lib/site";

const links = [
  {
    name: "WhatsApp",
    href: site.social.whatsapp,
    icon: WhatsAppIcon,
  },
  {
    name: "Facebook",
    href: site.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: site.social.instagram,
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    href: site.social.twitter,
    icon: TwitterIcon,
  },
] as const;

export function SocialLinks() {
  return (
    <nav aria-label="Redes sociales" className="mt-5">
      <ul className="flex flex-wrap gap-2">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-cream/25 text-cream transition-colors hover:border-cream hover:bg-cream/10"
              >
                <Icon />
                <span className="sr-only">{item.name} (se abre en una pestaña nueva)</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01m-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23m4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74 1.48.64 1.84.7 2.5.59.4-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.10-.23-.17-.48-.29"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.5 8.5V6.7c0-.7.5-1.2 1.2-1.2h1.3V3h-2.3C12.3 3 11 4.4 11 6.5v2H9v2.5h2V21h3.5v-10h2.3l.5-2.5z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5m0 1.7A3.3 3.3 0 0 0 4.7 8v8A3.3 3.3 0 0 0 8 19.3h8A3.3 3.3 0 0 0 19.3 16V8A3.3 3.3 0 0 0 16 4.7zm8.6 1.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2m0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.9 10.4 20.7 3h-1.6l-5.9 6.4L8.5 3H3.3l7.2 10.1L3.3 21h1.6l6.3-6.8 5 6.8h5.2zm-2.2 2.4-.7-1-5.8-7.8h2.5l4.7 6.3.7 1 6.1 8.2h-2.5z"
      />
    </svg>
  );
}
