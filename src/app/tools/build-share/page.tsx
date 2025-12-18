"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
import { CLASSES, WEAPONS, SOUL_COMPANIONS, RELICS } from "@/data/gameData";
import { ClassSelector } from "@/components/selectors/ClassSelector";
import { WeaponSelector } from "@/components/selectors/WeaponSelector";
import { CompanionSelector } from "@/components/selectors/CompanionSelector";
import { RelicDropdown } from "@/components/selectors/RelicPicker";
import { ShareIcon, CopyIcon, DownloadIcon, QRCodeIcon, ChevronRightIcon } from "@/components/icons/GameIcons";

function BuildShareContent() {
  const searchParams = useSearchParams();
  const buildCardRef = useRef<HTMLDivElement>(null);

  const [classId, setClassId] = useState("");
  const [weaponId, setWeaponId] = useState("");
  const [companionId, setCompanionId] = useState("");
  const [relicIds, setRelicIds] = useState<string[]>([]);
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  // Load build from URL params
  useEffect(() => {
    const c = searchParams.get("c");
    const w = searchParams.get("w");
    const p = searchParams.get("p");
    const r = searchParams.get("r");

    if (c) setClassId(c);
    if (w) setWeaponId(w);
    if (p) setCompanionId(p);
    if (r) setRelicIds(r.split(",").filter(Boolean));
  }, [searchParams]);

  const selectedClass = CLASSES.find((c) => c.id === classId);
  const selectedWeapon = WEAPONS.find((w) => w.id === weaponId);
  const selectedCompanion = SOUL_COMPANIONS.find((c) => c.id === companionId);
  const selectedRelics = RELICS.filter((r) => relicIds.includes(r.id));

  const generateShareUrl = () => {
    const params = new URLSearchParams();
    if (classId) params.set("c", classId);
    if (weaponId) params.set("w", weaponId);
    if (companionId) params.set("p", companionId);
    if (relicIds.length) params.set("r", relicIds.join(","));
    return `${window.location.origin}/tools/build-share?${params.toString()}`;
  };

  const shareUrl = classId ? generateShareUrl() : "";

  const copyToClipboard = async () => {
    if (!shareUrl) return;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const exportAsImage = async () => {
    if (!buildCardRef.current || !classId) return;

    try {
      const dataUrl = await toPng(buildCardRef.current, {
        backgroundColor: "#0a0a12",
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = `${selectedClass?.name || "build"}-netherworld.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export image:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-purple-400">Build Share</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <ShareIcon size={48} className="text-blue-500" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-100">Build Share</h1>
              <p className="text-gray-500">Create and share your builds with others</p>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Build Editor */}
          <div className="space-y-6">
            <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <h2 className="text-lg font-bold text-gray-100 mb-4">Create Build</h2>

              <div className="space-y-4">
                <ClassSelector value={classId} onChange={setClassId} />
                <WeaponSelector value={weaponId} onChange={setWeaponId} filterByClass={classId} />
                <CompanionSelector value={companionId} onChange={setCompanionId} />
                <RelicDropdown value={relicIds} onChange={setRelicIds} maxSelections={5} />
              </div>
            </div>

            {/* Share Options */}
            {classId && (
              <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
                <h2 className="text-lg font-bold text-gray-100 mb-4">Share Options</h2>

                {/* Share URL */}
                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2 block">Share Link</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={shareUrl}
                      readOnly
                      className="flex-1 px-3 py-2 bg-[#0a0a12] border border-purple-900/30 rounded-lg text-gray-400 text-sm truncate"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
                    >
                      <CopyIcon size={16} />
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowQR(!showQR)}
                    className="px-4 py-3 bg-[#0a0a12] hover:bg-purple-900/20 border border-purple-900/30 text-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <QRCodeIcon size={16} />
                    {showQR ? "Hide QR" : "Show QR"}
                  </button>
                  <button
                    onClick={exportAsImage}
                    className="px-4 py-3 bg-[#0a0a12] hover:bg-purple-900/20 border border-purple-900/30 text-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <DownloadIcon size={16} />
                    Export Image
                  </button>
                </div>

                {/* QR Code */}
                {showQR && (
                  <div className="mt-4 p-4 bg-white rounded-lg flex justify-center">
                    <QRCodeSVG value={shareUrl} size={200} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Build Preview */}
          <div>
            <div
              ref={buildCardRef}
              className="p-6 bg-gradient-to-br from-[#12121f] to-[#1a1a2e] border border-purple-900/30 rounded-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-100">Build Preview</h2>
                <span className="text-xs text-gray-500">netherworldcovenant.com</span>
              </div>

              {!classId ? (
                <div className="text-center py-12 text-gray-500">
                  <ShareIcon size={48} className="mx-auto mb-4 opacity-30" />
                  <p>Select a class to create your build</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Class */}
                  <div className="flex items-center gap-3 p-3 bg-[#0a0a12] rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-2xl">
                      ⚔️
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Class</p>
                      <p className="text-lg font-bold text-gray-200">{selectedClass?.name}</p>
                      <p className="text-xs text-gray-500">{selectedClass?.title}</p>
                    </div>
                  </div>

                  {/* Weapon */}
                  {selectedWeapon && (
                    <div className="flex items-center gap-3 p-3 bg-[#0a0a12] rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center text-2xl">
                        🗡️
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Weapon</p>
                        <p className="text-lg font-bold text-gray-200">{selectedWeapon.name}</p>
                        <p className="text-xs text-gray-500">{selectedWeapon.type}</p>
                      </div>
                    </div>
                  )}

                  {/* Companion */}
                  {selectedCompanion && (
                    <div className="flex items-center gap-3 p-3 bg-[#0a0a12] rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-2xl">
                        👻
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Soul Companion</p>
                        <p className="text-lg font-bold text-gray-200">{selectedCompanion.name}</p>
                        <p className="text-xs text-gray-500">{selectedCompanion.type}</p>
                      </div>
                    </div>
                  )}

                  {/* Relics */}
                  {selectedRelics.length > 0 && (
                    <div className="p-3 bg-[#0a0a12] rounded-lg">
                      <p className="text-xs text-gray-500 mb-2">Relics</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedRelics.map((relic) => (
                          <span
                            key={relic.id}
                            className="px-3 py-1.5 bg-yellow-900/20 text-yellow-300 text-sm rounded flex items-center gap-1"
                          >
                            {relic.name}
                            <span className="text-xs text-yellow-500">
                              [{relic.tier}]
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="mt-6 p-4 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <h3 className="font-semibold text-gray-200 mb-3">Sharing Tips</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  Share the link on Discord, Reddit, or forums
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  Use QR code for easy mobile sharing
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRightIcon size={14} className="text-purple-500 mt-1 flex-shrink-0" />
                  Export as image for social media posts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuildSharePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16 flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    }>
      <BuildShareContent />
    </Suspense>
  );
}
