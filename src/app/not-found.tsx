import Link from "next/link";
import { SkullIcon, HomeIcon, BookIcon, ArrowRightIcon } from "@/components/icons/GameIcons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8">
          <SkullIcon size={80} className="mx-auto text-purple-500 mb-4" />
          <h1 className="text-6xl sm:text-8xl font-black text-gray-100 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4">
            Lost in the Netherworld
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            The page you seek has been consumed by the void. Perhaps it never existed,
            or perhaps it was claimed by the darkness.
          </p>
        </div>

        <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl mb-8">
          <p className="text-gray-500 text-sm mb-4">
            You might find what you&apos;re looking for here:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 p-3 bg-purple-900/20 hover:bg-purple-900/40 border border-purple-900/30 rounded-lg transition-colors group"
            >
              <HomeIcon size={18} className="text-purple-400" />
              <span className="text-gray-300 group-hover:text-white">Home</span>
            </Link>
            <Link
              href="/guides/beginners"
              className="flex items-center justify-center gap-2 p-3 bg-purple-900/20 hover:bg-purple-900/40 border border-purple-900/30 rounded-lg transition-colors group"
            >
              <BookIcon size={18} className="text-purple-400" />
              <span className="text-gray-300 group-hover:text-white">Guides</span>
            </Link>
            <Link
              href="/classes"
              className="flex items-center justify-center gap-2 p-3 bg-purple-900/20 hover:bg-purple-900/40 border border-purple-900/30 rounded-lg transition-colors group"
            >
              <ArrowRightIcon size={18} className="text-purple-400" />
              <span className="text-gray-300 group-hover:text-white">Classes</span>
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors"
        >
          <HomeIcon size={18} />
          Return to Safety
        </Link>
      </div>
    </div>
  );
}
