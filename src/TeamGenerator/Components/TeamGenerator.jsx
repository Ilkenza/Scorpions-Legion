import { useEffect, useRef, useState } from "react";
import Icons from "../../Home/Components/Icons";
import Aos from "aos";
import { motion, AnimatePresence } from "framer-motion"
import SectionHeader from "../../Common/SectionHeader";


function TeamGenerator() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  const scrollRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [teamNames, setTeamNames] = useState(
    Array.from({ length: 10 }, (_, i) => `Tim ${i + 1}`)
  );

  const [submittedNames, setSubmittedNames] = useState([]);
  const [reachedLimit, setReachedLimit] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const [showGenerateButton, setShowGenerateButton] = useState(false);
  const [teams, setTeams] = useState([]);
  const [showTeamsContainer, setShowTeamsContainer] = useState(false);
  const [error, setError] = useState("");


  
  useEffect(() => {
    if (submittedNames.length >= 2) {
      setShowClearButton(true);
      setShowGenerateButton(true);
    } else {
      setShowClearButton(false);
      setShowGenerateButton(false);
    }

    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    if (submittedNames.length === 50) {
      setReachedLimit(true);
    } else {
      setReachedLimit(false);
    }
  }, [submittedNames]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
    if (error) setError("");
  };

  const handleInputChange = (event, index) => {
    let { value } = event.target;

    value = value.replace(/\s\s+/g, " ");

    const updatedNames = [...submittedNames];
    updatedNames[index] = value;
    setSubmittedNames(updatedNames);
  };

  const handleBlurInput = (index) => {
    const updatedNames = [...submittedNames];
    if (updatedNames[index].trim() === "") {
      updatedNames.splice(index, 1);
    }
    setSubmittedNames(updatedNames);
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

  const handleRemoveName = (index) => {
    const newNames = [...submittedNames];
    newNames.splice(index, 1);
    setSubmittedNames(newNames);
  };

  const handleClearAll = () => {
    setSubmittedNames([]);
    setTeams([]);
    setShowTeamsContainer(false);
  };

  const calculateNumberOfTeams = (numberOfParticipants) => {
    if (numberOfParticipants <= 10) {
      return 2;
    } else if (numberOfParticipants <= 20) {
      return 4; // Sada imamo 4 tima
    } else if (numberOfParticipants <= 30) {
      return 6; // Sada imamo 6 timova
    } else if (numberOfParticipants <= 40) {
      return 8; // Sada imamo 8 timova
    } else if (numberOfParticipants <= 50) {
      return 10 
    } else {
      const additionalParticipants = numberOfParticipants - 50;
      const additionalTeams = Math.ceil(additionalParticipants / 5);
      return 10 + additionalTeams; // Dodajemo dodatne timove
    }
  };
  
  const generateTeams = () => {
    const shuffledNames = [...submittedNames].sort(() => Math.random() - 0.5);
    const numberOfParticipants = shuffledNames.length;
    let numberOfTeams = calculateNumberOfTeams(numberOfParticipants);

    if (numberOfParticipants % 10 === 1) {
      numberOfTeams--; // Smanjujemo broj timova ako imamo tačno 1 preostalog učesnika
    }

    const teamsArray = Array.from({ length: numberOfTeams }, () => []);
  
  
    for (let i = 0; i < numberOfParticipants; i++) {
      let teamIndex;
      if (i < 10) {
        teamIndex = i % 2;
      } else if (i < 20) {
        teamIndex = (i % 2) + 2;
      } else if (i < 30) {
        teamIndex = (i % 2) + 4;
      } else if (i < 40) {
        teamIndex = (i % 2) + 6;
      } else if(i < 50) {
        teamIndex = (i % 2) + 8; // Počinjemo od osmog tima
      } else{
        teamIndex = (i % 2) + 10
      }
      teamsArray[teamIndex].push(shuffledNames[i]);

    }
  
    setTeams(teamsArray);
    setShowTeamsContainer(true);
  };
  

  const handleTeamNameChange = (event, index) => {
    let { value } = event.target;
  
    value = value.replace(/\s\s+/g, " ");
  
    const updatedTeamNames = [...teamNames];
    updatedTeamNames[index] = value.trim() === "" ? `` : value;
    setTeamNames(updatedTeamNames);
  };
  
  
  const handleBlurTeamName = (event, index) => {
    let { value } = event.target;
  
    value = value.trim() === "" ? `Tim ${index + 1}` : value;
  
    const updatedTeamNames = [...teamNames];
    updatedTeamNames[index] = value;
    setTeamNames(updatedTeamNames);
  };
  
  

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col py-24 px-4">
      <SectionHeader eyebrow="Alat" title="Team Generator" />
      <div className="flex flex-col md:flex-row w-full justify-evenly items-center gap-8">
        <div className="rounded-lg mb-5 sm:mb-[0rem] glass p-5 w-full sm:w-96 h-[41rem]" data-aos="fade-left"  data-aos-delay="200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl text-bela font-bold uppercase tracking-wide">
              Učesnici
            </h2>
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

          <div
            ref={scrollRef}
            className="scrollteamg max-h-[25rem] overflow-y-auto mt-4 pr-1"
          >
            {submittedNames.length === 0 && (
              <p className="text-bela/40 text-sm text-center py-10">
                Još nema učesnika. Dodaj bar 2 da generišeš timove.
              </p>
            )}
            <AnimatePresence>
              {submittedNames.map((name, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-bgdark/60 rounded-lg mt-2 pr-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <input
                    type="text"
                    maxLength="20"
                    value={name}
                    onChange={(e) => handleInputChange(e, index)}
                    onBlur={() => handleBlurInput(index)}
                    className="flex-1 min-w-0 px-3 py-2 bg-transparent text-bela outline-none"
                  />
                  <button
                    className="shrink-0 w-7 h-7 flex items-center justify-center rounded-md text-glcrvena hover:bg-glcrvena/20 transition-colors"
                    onClick={() => handleRemoveName(index)}
                    aria-label="Ukloni"
                  >
                    <Icons ikonice="minus" stilovi="!text-glcrvena !text-base" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {showClearButton && (
            <div className="flex w-full justify-end">
              <button
                onClick={handleClearAll}
                className="mt-3 px-4 py-1.5 rounded-lg font-display uppercase tracking-wider text-sm text-glcrvena border border-glcrvena/60 transition-all duration-300 hover:bg-glcrvena hover:text-bgdark active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glcrvena"
              >
                Obriši sve
              </button>
            </div>
          )}
          {reachedLimit && (
            <p className="text-glcrvena text-sm text-center mt-1">
              Dostignut je maksimum od 50 učesnika.
            </p>
          )}
          {showGenerateButton && (
            <button
              onClick={generateTeams}
              className="w-full mt-4 px-6 py-3 rounded-lg font-display font-bold uppercase tracking-wider text-lg bg-plava text-bgdark transition-all duration-300 hover:shadow-glow-blue active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bela"
            >
              Generiši timove
            </button>
          )}
        </div>
        <div className="teams rounded-lg glass p-5 w-full md:w-[19rem] lg:w-[35rem] flex justify-center h-[41rem]" data-aos="fade-right"  data-aos-delay="200">
          <div className="">
            <h2 className="text-2xl text-bela font-bold uppercase tracking-wide text-center mb-4">
              Timovi
            </h2>
            <div className={`scrollteamg gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 overflow-y-auto max-h-[55vh] md:w-[16.438rem] lg:w-[32rem] bg-bgdark/30 rounded-lg px-3 ${showTeamsContainer ? "py-3" : ""}`}>
              {teams.length === 0 && (
                <p className="col-span-full text-bela/40 text-sm text-center py-12">
                  Timovi će se prikazati ovde nakon generisanja.
                </p>
              )}
              <AnimatePresence>
              {teams.map((team, index) => (
                <motion.div key={index} className="md:w-[14.3rem]"  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="">
                    <input
                      type="text"
                      value={teamNames[index]}
                      onChange={(e) => handleTeamNameChange(e, index)}
                      onBlur={(e) => handleBlurTeamName(e, index)}
                      maxLength="25"
                      className="text-plava rounded-t-lg border border-glcrvena/60 font-bold bg-bgdark/60 w-full md:w-[14.3rem] outline-none px-3 py-2"
                    />

                    <div className="block p-3 bg-bgdark/40 border-x border-b border-glcrvena/40 rounded-b-lg">
                      <div className="flex flex-wrap gap-2">
                        {team.map((member, i) => (
                          <span
                            className="px-2 py-1 rounded-md bg-plava/10 text-plava text-sm"
                            key={i}
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamGenerator;
