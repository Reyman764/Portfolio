import { Card, CardContent } from "@/components/ui/card";

interface SocialLink {
  label: string;
  tag: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    tag: "[Social]",
    href: "https://www.instagram.com/reyman9118/",
  },
  {
    label: "Facebook",
    tag: "[Social]",
    href: "https://www.facebook.com/share/1NqtT3b2GA/",
  },
  {
    label: "LinkedIn",
    tag: "[Professional]",
    href: "https://www.linkedin.com/in/reyman-khadgi-430078200/",
  },
  {
    label: "GitHub",
    tag: "[Code]",
    href: "https://github.com/Reyman764",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-zinc-900 border-t-2 border-b-2 text-zinc-100"
    >
      <div className="container mx-auto px-4 max-w-xl text-center">
        <div className="space-y-2 mb-10">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            Get In Touch
          </h2>
          <h1 className="text-3xl font-bold text-zinc-100">
            Let's Collaborate
          </h1>
        </div>

        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
          Have a project in mind, an opportunity to share, or just want to
          connect? Reach out through any of the platforms below:
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-all duration-300 h-full flex items-center justify-center">
                <CardContent className="p-6 text-center">
                  <span className="text-xs text-zinc-500 block mb-1">
                    {link.tag}
                  </span>
                  <span className="text-base font-bold text-zinc-200 group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-2 group-hover:text-zinc-400">
                    → Open Profile
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
