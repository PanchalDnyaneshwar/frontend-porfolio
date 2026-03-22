import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import type { SocialLinks as SocialLinksType } from '@/types/profile.types';

interface SocialLinksProps {
  links?: SocialLinksType;
  email?: string;
}

function SocialLinks({ links, email }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {links?.github ? (
        <a href={links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
          <Github size={18} />
        </a>
      ) : null}
      {links?.linkedin ? (
        <a href={links.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
          <Linkedin size={18} />
        </a>
      ) : null}
      {links?.twitter ? (
        <a href={links.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
          <Twitter size={18} />
        </a>
      ) : null}
      {email ? (
        <a href={`mailto:${email}`} className="text-slate-400 hover:text-white">
          <Mail size={18} />
        </a>
      ) : null}
    </div>
  );
}

export default SocialLinks;