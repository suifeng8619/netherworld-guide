import { ExternalLinkIcon } from "@/components/icons/GameIcons";

interface ResourceLink {
  title: string;
  url: string;
  description: string;
}

const RESOURCE_LINKS: ResourceLink[] = [
  {
    title: "Steam Store Page",
    url: "https://store.steampowered.com/app/2735580/Netherworld_Covenant/",
    description: "Official game page with reviews and updates",
  },
  {
    title: "Steam Community Guides",
    url: "https://steamcommunity.com/app/2735580/guides/",
    description: "Player-created guides and tutorials",
  },
  {
    title: "Steam Discussions",
    url: "https://steamcommunity.com/app/2735580/discussions/",
    description: "Official forums for tips and discussions",
  },
  {
    title: "YouTube Tutorials",
    url: "https://www.youtube.com/results?search_query=netherworld+covenant+guide",
    description: "Video guides and gameplay walkthroughs",
  },
];

interface ResourceLinksProps {
  title?: string;
  showAll?: boolean;
  className?: string;
}

export function ResourceLinks({
  title = "Community Resources",
  showAll = true,
  className = "",
}: ResourceLinksProps) {
  const links = showAll ? RESOURCE_LINKS : RESOURCE_LINKS.slice(0, 2);

  return (
    <div className={`p-6 bg-[#12121f] border border-purple-900/30 rounded-xl ${className}`}>
      <h3 className="font-bold text-gray-200 mb-4 flex items-center gap-2">
        <ExternalLinkIcon size={18} className="text-purple-400" />
        {title}
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-[#0a0a12] border border-purple-900/20 rounded-lg hover:border-purple-700/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-gray-200 group-hover:text-purple-400 transition-colors">
                {link.title}
              </span>
              <ExternalLinkIcon size={12} className="text-gray-500" />
            </div>
            <p className="text-xs text-gray-500">{link.description}</p>
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-600">
        These external resources are maintained by the community and official channels.
      </p>
    </div>
  );
}

// Compact inline version for sidebars
export function ResourceLinksCompact() {
  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500 uppercase tracking-wider">Official Resources</p>
      <div className="flex flex-wrap gap-2">
        <a
          href="https://store.steampowered.com/app/2735580/Netherworld_Covenant/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-2 py-1 bg-[#1b2838] text-gray-300 rounded hover:bg-[#2a475e] transition-colors flex items-center gap-1"
        >
          Steam <ExternalLinkIcon size={10} />
        </a>
        <a
          href="https://steamcommunity.com/app/2735580/guides/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded hover:bg-purple-900/50 transition-colors flex items-center gap-1"
        >
          Guides <ExternalLinkIcon size={10} />
        </a>
        <a
          href="https://www.youtube.com/results?search_query=netherworld+covenant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-2 py-1 bg-red-900/30 text-red-300 rounded hover:bg-red-900/50 transition-colors flex items-center gap-1"
        >
          YouTube <ExternalLinkIcon size={10} />
        </a>
      </div>
    </div>
  );
}
