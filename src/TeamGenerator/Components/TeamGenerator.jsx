import { useEffect, useRef, useState } from "react";
import Icons from "../../Home/Components/Icons";
import Aos from "aos";

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

  useEffect(() => {
    if (submittedNames.length >= 2) {
      setShowClearButton(true);
      setShowGenerateButton(true);
    } else {
      setShowClearButton(false);
      setShowGenerateButton(false);
    }

    if (
      submittedNames.length >= 10 &&
      submittedNames.length - 1 < 1 &&
      scrollRef.current
    ) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
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
    if (submittedNames.length < 50 && inputValue.trim() !== "") {
      setSubmittedNames([...submittedNames, inputValue.trim()]);
      setInputValue("");
    }
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
    <div className="bg-cover bg-no-repeat bg-center w-full h-[200vh] md:h-[110vh] flex justify-center items-center flex-col">
      <h3
        className="mt-24 text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold text-glcrvena"
        data-aos="fade-up"
      >
        Team Generator
      </h3>
      <div
        className="h-[0.5rem] w-[20rem] sm:w-[33rem] md:w-[40rem] bg-glcrvena mb-14"
        data-aos="fade-up"
      ></div>
      <div className="flex flex-col  md:flex-row w-full justify-evenly h-[150vh] md:h-screen items-center ">
        <div className="rounded-lg mb-5 bg-[#272a2b] p-5 w-full sm:w-96 h-[41rem]">
          <h2 className="text-[2rem] text-glcrvena text-center font-bold">
            Ucesnici
          </h2>
          <div className="bg-glcrvena flex items-center rounded-lg justify-between">
            <input
              maxLength="20"
              className={`bg-[#16191A] border-2 border-glcrvena w-4/5 sm:w-72 px-3 rounded-s-lg py-3 focus:outline-none text-plava placeholder:text-plava ${
                reachedLimit ? "opacity-[.7]" : ""
              }`}
              type="text"
              value={inputValue}
              onChange={handleChangeInput}
              onKeyDown={handleKeyDown}
              placeholder={
                reachedLimit
                  ? "Maksimalan broj učesnika (50)."
                  : inputValue.trim()
                  ? ""
                  : "Ime Ucesnika"
              }
              disabled={reachedLimit}
            />
            <button onClick={handleSubmit} disabled={reachedLimit}>
              <Icons
                ikonice="plus"
                className="!outline-none focus:outline-none"
              />
            </button>
          </div>

          <div
            ref={scrollRef}
            className={`scrollteamg max-h-[25rem] overflow-y-auto px-2 ${
              submittedNames.length ? "py-2 mt-4" : ""
            } bg-[#212425]`}
          >
            {submittedNames.map((name, index) => (
              <div
                key={index}
                className="flex items-center justify-between mt-2"
              >
                <input
                  type="text"
                  maxLength="20"
                  value={name}
                  onChange={(e) => handleInputChange(e, index)}
                  onBlur={() => handleBlurInput(index)}
                  className="w-full px-3 py-1 bg-[#16191A] placeholder-plava text-plava rounded-s-lg focus:outline-none"
                />
                <div className="bg-[#16191A] py-1.5 rounded-e-lg">
                  <button
                    className="mr-2 flex"
                    onClick={() => handleRemoveName(index)}
                  >
                    <Icons ikonice="minus" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-plava">{submittedNames.length}</p>
            {showClearButton && (
              <button
                onClick={handleClearAll}
                className="my-2 border-2 text-plava rounded-xl px-2 border-plava duration-300 ease-linear hover:duration-300 hover:ease-linear hover:shadow-disc hover:text-bela"
              >
                Obriši sve
              </button>
            )}
          </div>
          {showGenerateButton && (
            <div className="flex w-full items-center justify-center">
              <button
                onClick={generateTeams}
                className="text-plava border-2 rounded-xl px-6 py-2 border-plava duration-300 ease-linear hover:duration-300 hover:ease-linear hover:shadow-disc hover:text-bela"
              >
                Generate
              </button>
            </div>
          )}
        </div>
        <div className="rounded-lg bg-[#272a2b] p-5 w-full md:w-[19rem] lg:w-[35rem] flex justify-center h-[41rem]">
          <div>
            <h2 className="text-[2rem] text-glcrvena font-bold text-center">
              Rezultat
            </h2>
            <div className={`scrollteamg gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 overflow-y-auto max-h-[55vh] w-full md:w-[16.438rem] lg:w-[32rem] bg-[#212425] px-3 ${showTeamsContainer  ? 'py-3' : ''}`}>
              {teams.map((team, index) => (
                <div key={index} className="w-full md:w-[14.3rem]">
                  <div className="border-2 border-glcrvena rounded-lg">
                    <input
                      type="text"
                      value={teamNames[index]}
                      onChange={(e) => handleTeamNameChange(e, index)}
                      onBlur={(e) => handleBlurTeamName(e, index)}
                      maxLength="25"
                      className="text-plava rounded-t-lg border-b-2 font-bold border-glcrvena bg-[#16191A] w-full md:w-[14rem] outline-none px-3 py-1"
                    />

                    <div className="">
                      <div className="block p-5 bg-[#212425]">
                      <div className="flex flex-col items-start border-2 border-[#16191A] p-2 justify-center rounded-lg">
                        {team.map((member, i) => (
                          <p className="block text-plava my-1" key={i}>
                            {member}
                          </p>
                        ))}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamGenerator;
