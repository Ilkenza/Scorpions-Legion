import { useEffect, useRef, useState } from "react";
import Icons from "../../Home/Components/Icons";
import Aos from "aos";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../../Common/SectionHeader";

function TeamGenerator() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  const MAX_TEAM_SIZE = 10;
  const [inputValue, setInputValue] = useState("");
  const [teamNames, setTeamNames] = useState(
    Array.from({ length: 25 }, (_, i) => `Tim ${i + 1}`)
  );
  const [submittedNames, setSubmittedNames] = useState([]);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const [showGenerateButton, setShowGenerateButton] = useState(false);
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState("");
  const [teamSize, setTeamSize] = useState(2);
  const [copied, setCopied] = useState(false);
  const teamsRef = useRef(null);

  useEffect(() => {
    const enough = submittedNames.length >= 2;
    setShowClearButton(submittedNames.length > 0);
    setShowGenerateButton(enough);
    setReachedLimit(submittedNames.length === 50);
  }, [submittedNames]);

  // Posle generisanja glatko skroluj do timova da korisnik vidi rezultat.
  useEffect(() => {
    if (teams.length > 0 && teamsRef.current) {
      teamsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [teams]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSubmit();
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
    if (error) setError("");
  };

  const handleSubmit = () => {
    if (reachedLimit) return;
    if (inputValue.trim() === "") {
      setError("Unesi ime učesnika pre dodavanja.");
      return;
    }
    setSubmittedNames([...submittedNames, inputValue.trim()]);
    setInputValue("");
    setError("");
  };

  const handleInputChange = (event, index) => {
    const value = event.target.value.replace(/\s\s+/g, " ");
    const updated = [...submittedNames];
    updated[index] = value;
    setSubmittedNames(updated);
  };

  const handleBlurInput = (index) => {
    const updated = [...submittedNames];
    if (updated[index].trim() === "") {
      updated.splice(index, 1);
    } else {
      updated[index] = updated[index].trim();
    }
    setSubmittedNames(updated);
  };

  const handleRemoveName = (index) => {
    const newNames = [...submittedNames];
    newNames.splice(index, 1);
    setSubmittedNames(newNames);
  };

  const handleClearAll = () => {
    setSubmittedNames([]);
    setTeams([]);
    setError("");
  };

  // teamSize je MAKSIMUM po timu: svaki tim se popuni do teamSize,
  // a preostali igrači koji ne staju idu u dodatni (manji) tim.
  const generateTeams = () => {
    const shuffled = [...submittedNames].sort(() => Math.random() - 0.5);
    const total = shuffled.length;
    const numberOfTeams = Math.ceil(total / teamSize);
    const teamsArray = Array.from({ length: numberOfTeams }, () => []);
    shuffled.forEach((name, i) => {
      teamsArray[Math.floor(i / teamSize)].push(name);
    });
    setTeams(teamsArray);
  };

  const handleCopy = () => {
    const text = teams
      .map(
        (team, i) =>
          `${teamNames[i]}:\n${team.map((m) => `- ${m}`).join("\n")}`
      )
      .join("\n\n");
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  const handleTeamNameChange = (event, index) => {
    const value = event.target.value.replace(/\s\s+/g, " ");
    const updated = [...teamNames];
    updated[index] = value;
    setTeamNames(updated);
  };

  const handleBlurTeamName = (event, index) => {
    const value = event.target.value.trim() === "" ? `Tim ${index + 1}` : event.target.value;
    const updated = [...teamNames];
    updated[index] = value;
    setTeamNames(updated);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-24 px-4">
      <SectionHeader eyebrow="Alat" title="Tim Generator" />

      {/* Input / učesnici */}
      <div className="w-full max-w-3xl glass rounded-2xl p-6 sm:p-8" data-aos="fade-up">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl text-bela font-bold uppercase tracking-wide">Učesnici</h2>
          <span className="glass rounded-full px-3 py-1 text-sm text-plava">
            {submittedNames.length}/50
          </span>
        </div>

        <div className="flex items-center gap-2">
          <input
            maxLength="20"
            className={`flex-1 min-w-0 bg-bgdark/60 border rounded-lg px-4 py-3 text-bela placeholder:text-bela/40 outline-none transition-colors ${
              error ? "border-glcrvena" : "border-white/10 focus:border-plava"
            } ${reachedLimit ? "opacity-60" : ""}`}
            type="text"
            value={inputValue}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDown}
            placeholder={reachedLimit ? "Maksimum (50) dostignut" : "Ime učesnika"}
            disabled={reachedLimit}
          />
          <button
            onClick={handleSubmit}
            disabled={reachedLimit}
            aria-label="Dodaj učesnika"
            className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-plava text-bgdark transition-all duration-300 hover:shadow-glow-blue active:scale-95 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bela"
          >
            <Icons ikonice="plus" stilovi="!text-bgdark !text-2xl !m-0 !my-0" />
          </button>
        </div>
        {error && <p className="text-glcrvena text-sm mt-2">{error}</p>}

        {/* Lista učesnika */}
        <div className="scrollteamg mt-5 max-h-80 overflow-y-auto pr-1">
          {submittedNames.length === 0 ? (
            <p className="text-bela/40 text-sm py-4">
              Dodaj bar 2 učesnika da generišeš timove.
            </p>
          ) : (
            <AnimatePresence>
              {submittedNames.map((name, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 bg-bgdark/60 border border-white/10 rounded-lg px-3 py-2.5 mb-2"
                >
                  <span className="font-display text-plava/70 text-sm tabular-nums w-6 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <input
                    type="text"
                    maxLength="20"
                    value={name}
                    onChange={(e) => handleInputChange(e, index)}
                    onBlur={() => handleBlurInput(index)}
                    aria-label={`Ime učesnika ${index + 1}`}
                    className="flex-1 min-w-0 bg-transparent text-bela outline-none focus:text-plava"
                  />
                  <button
                    onClick={() => handleRemoveName(index)}
                    aria-label="Ukloni"
                    className="shrink-0 w-7 h-7 flex items-center justify-center rounded-md text-glcrvena hover:bg-glcrvena/20 transition-colors"
                  >
                    <Icons ikonice="minus" stilovi="!text-glcrvena !text-base !m-0" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Broj igrača po timu */}
        <div className="flex items-center justify-between mt-6 border-t border-white/5 pt-5">
          <span className="text-bela/80 text-sm sm:text-base">Igrača po timu (maks)</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTeamSize((s) => Math.max(2, s - 1))}
              disabled={teamSize <= 2}
              aria-label="Smanji"
              className="w-9 h-9 flex items-center justify-center rounded-lg glass text-plava hover:border-plava transition-colors active:scale-95 disabled:opacity-40"
            >
              <Icons ikonice="minus" stilovi="!text-plava !text-lg !block" />
            </button>
            <span className="w-8 text-center text-bela font-display font-bold text-xl tabular-nums">
              {teamSize}
            </span>
            <button
              onClick={() => setTeamSize((s) => Math.min(MAX_TEAM_SIZE, s + 1))}
              disabled={teamSize >= MAX_TEAM_SIZE}
              aria-label="Povećaj"
              className="w-9 h-9 flex items-center justify-center rounded-lg glass text-plava hover:border-plava transition-colors active:scale-95 disabled:opacity-40"
            >
              <Icons ikonice="plus" stilovi="!text-plava !text-lg !block !m-0 !my-0" />
            </button>
          </div>
        </div>

        {/* Akcije */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          {showGenerateButton && (
            <button
              onClick={generateTeams}
              className="flex-1 px-6 py-3 rounded-lg font-display font-bold uppercase tracking-wider text-lg bg-plava text-bgdark transition-all duration-300 hover:shadow-glow-blue active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bela"
            >
              Generiši timove
            </button>
          )}
          {showClearButton && (
            <button
              onClick={handleClearAll}
              className="px-6 py-3 rounded-lg font-display uppercase tracking-wider text-glcrvena border border-glcrvena/60 transition-all duration-300 hover:bg-glcrvena hover:text-bgdark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glcrvena"
            >
              Obriši sve
            </button>
          )}
        </div>
      </div>

      {/* Timovi */}
      {teams.length > 0 && (
        <div ref={teamsRef} className="w-full max-w-5xl mt-14 scroll-mt-28">
          <div className="flex flex-col items-center gap-3 mb-6">
            <h2 className="text-2xl text-bela font-bold uppercase tracking-wide text-center">
              Timovi
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={generateTeams}
                aria-label="Regeneriši timove"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-display uppercase tracking-wider text-sm text-plava border border-plava/50 bg-plava/5 transition-all duration-300 hover:bg-plava hover:text-bgdark hover:shadow-glow-blue active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plava"
              >
                <Icons ikonice="refresh" stilovi="text-base" />
                Regeneriši
              </button>
              <button
                onClick={handleCopy}
                aria-label="Kopiraj timove"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-display uppercase tracking-wider text-sm text-plava border border-plava/50 bg-plava/5 transition-all duration-300 hover:bg-plava hover:text-bgdark hover:shadow-glow-blue active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plava"
              >
                <Icons ikonice={copied ? "check" : "copy"} stilovi="text-base" />
                {copied ? "Kopirano!" : "Kopiraj"}
              </button>
            </div>
          </div>
          <div className="scrollteamg max-h-[70vh] overflow-y-auto pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
              <AnimatePresence>
              {teams.map((team, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <div className="relative">
                    <input
                      type="text"
                      value={teamNames[index]}
                      onChange={(e) => handleTeamNameChange(e, index)}
                      onBlur={(e) => handleBlurTeamName(e, index)}
                      maxLength="25"
                      className="w-full pr-12 bg-glcrvena/10 border-b border-glcrvena/40 text-glcrvena font-bold font-display uppercase tracking-wide px-4 py-3 outline-none focus:bg-glcrvena/20 transition-colors"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-plava text-sm font-display font-bold pointer-events-none">
                      {team.length}
                    </span>
                  </div>
                  <ul className="p-4 flex flex-col gap-2">
                    {team.map((member, i) => (
                      <li key={i} className="flex items-center gap-3 text-bela">
                        <span className="w-6 h-6 shrink-0 flex items-center justify-center rounded-md bg-plava/15 text-plava text-xs font-display font-bold">
                          {i + 1}
                        </span>
                        <span className="truncate">{member}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamGenerator;
