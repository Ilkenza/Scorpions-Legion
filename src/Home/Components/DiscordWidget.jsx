import { useEffect, useState } from "react";

// Zahteva uključen "Enable Server Widget" u Discord podešavanjima servera
// (Server Settings -> Widget).
const GUILD_ID = "1119022493617893406";

function DiscordWidget() {
  const [online, setOnline] = useState(null);

  useEffect(() => {
    if (!GUILD_ID) return;
    let active = true;
    fetch(`https://discord.com/api/guilds/${GUILD_ID}/widget.json`)
      .then((res) => {
        if (!res.ok) throw new Error("widget unavailable");
        return res.json();
      })
      .then((data) => {
        if (active) setOnline(data.presence_count);
      })
      .catch(() => {
        /* graceful fallback */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <a
      href="https://discord.gg/hcbMShPYJ8"
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-hover rounded-2xl px-5 py-4 flex flex-col items-center justify-center min-w-[6rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plava"
    >
      <span className="flex items-center gap-2 text-[2rem] sm:text-[2.5rem] font-bold leading-none text-plava">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        {online != null ? online : "—"}
      </span>
      <span className="text-bela/70 text-sm sm:text-base mt-2">Online</span>
    </a>
  );
}

export default DiscordWidget;
