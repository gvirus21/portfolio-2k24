import { IconType } from "react-icons";
import { CursorState } from "@/store/useCursorState";
import Link from "next/link";
import { SimpleTextReveal } from "@/components/helpers";

export interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
  setCursorState: (state: CursorState) => void;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  label,
  setCursorState,
}) => (
  <li className="mb-2 underline-link-hover-effect">
    <Link
      href={href}
      onMouseEnter={() => setCursorState("sm-hovered")}
      onMouseLeave={() => setCursorState("regular")}
    >
      <SimpleTextReveal delay={1.5}>
        <span className="flex items-center">
          <Icon className="mr-2" /> {label}
        </span>
      </SimpleTextReveal>
    </Link>
  </li>
);

export default SocialLink;
