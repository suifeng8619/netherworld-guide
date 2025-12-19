import Link from "next/link";
import { LanternIcon, ExternalLinkIcon } from "@/components/icons/GameIcons";

export function Footer() {
  return (
    <footer className="bg-[#08080f] border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center">
                <LanternIcon size={22} className="text-purple-200" />
              </div>
              <span className="font-bold text-lg text-purple-400">NC Guide</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              The ultimate guide for Netherworld Covenant. Builds, strategies, and tips for mastering the netherworld.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Guides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/beginners" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                  Beginner&apos;s Guide
                </Link>
              </li>
              <li>
                <Link href="/bosses" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                  Boss Strategies
                </Link>
              </li>
              <li>
                <Link href="/guides/combat" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                  Combat Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Classes
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/classes/berserker" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                  Berserker
                </Link>
              </li>
              <li>
                <Link href="/classes/mage" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                  Mage
                </Link>
              </li>
              <li>
                <Link href="/classes/hunter" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                  Hunter
                </Link>
              </li>
              <li>
                <Link href="/classes/shield-guard" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                  Shield Guard
                </Link>
              </li>
              <li>
                <Link href="/classes/useless-person" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                  Useless Person
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Official Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://store.steampowered.com/app/2735580/Netherworld_Covenant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  Steam Store <ExternalLinkIcon size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://steamcommunity.com/app/2735580/discussions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  Steam Discussions <ExternalLinkIcon size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://steamcommunity.com/app/2735580/guides/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  Steam Guides <ExternalLinkIcon size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/results?search_query=netherworld+covenant+guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  YouTube Guides <ExternalLinkIcon size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/search/?q=netherworld%20covenant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  Reddit Discussions <ExternalLinkIcon size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-purple-900/20">
          <p className="text-center text-xs text-gray-600">
            © {new Date().getFullYear()} NC Guide. Not affiliated with MadGoat Game Studio.
            <br />
            Netherworld Covenant is a trademark of MadGoat Game Studio.
          </p>
        </div>
      </div>
    </footer>
  );
}
