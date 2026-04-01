const players = [
  {
    number: 1,
    name: "Maxime Crépeau",
    position: "GK",
    age: 31,
    club: "Orlando City S.C.",
    appearances: 29,
  },

  {
    number: 2,
    name: "Dayne St. Clair",
    position: "GK",
    age: 28,
    club: "Inter Miami CF",
    appearances: 18,
  },

  {
    number: 3,
    name: "Samuel Adekugbe",
    position: "DEF",
    age: 31,
    club: "Vancouver Whitecaps FC",
    appearances: 44,
  },

  {
    number: 4,
    name: "Richie Laryea",
    position: "DEF",
    age: 31,
    club: "Toronto FC",
    appearances: 71,
  },

  {
    number: 5,
    name: "Joel Waterman",
    position: "DEF",
    age: 28,
    club: "CF Montréal",
    appearances: 14,
  },

  {
    number: 6,
    name: "Derek Cornelius",
    position: "DEF",
    age: 31,
    club: "Olympique de Marseille",
    appearances: 40,
  },

  {
    number: 7,
    name: "Kamal Miller",
    position: "DEF",
    age: 28,
    club: "Portland Timbers FC",
    appearances: 50,
  },

  {
    number: 8,
    name: "Ali Ahmed",
    position: "DEF",
    age: 25,
    club: "Vancouver Whitecaps FC",
    appearances: 22,
  },

  {
    number: 9,
    name: "Stephen Afrifa",
    position: "FWD",
    age: 25,
    club: "Sporting Kansas City",
    appearances: 2,
  },

  {
    number: 10,
    name: "Jonathan Osorio",
    position: "MID",
    age: 27,
    club: "Los Angeles FC",
    appearances: 21,
  },

  {
    number: 11,
    name: "Mathieu Choinière",
    position: "MID",
    age: 31,
    club: "Orlando City S.C.",
    appearances: 29,
  },

  {
    number: 12,
    name: "Theo Bair",
    position: "FWD",
    age: 26,
    club: "AJ Auxerre",
    appearances: 7,
  },

  {
    number: 13,
    name: "Zorhan Bassong",
    position: "DEF",
    age: 26,
    club: "Sporting Kansas City",
    appearances: 7,
  },

  {
    number: 14,
    name: "Moïse Bombito",
    position: "DEF",
    age: 25,
    club: "OGC Nice",
    appearances: 19,
  },

  {
    number: 15,
    name: "Tajon Buchanan",
    position: "FWD",
    age: 27,
    club: "Inter Milan",
    appearances: 57,
  },

  {
    number: 16,
    name: "Jonathan David",
    position: "FWD",
    age: 26,
    club: "Lille OSC",
    appearances: 73,
  },

  {
    number: 17,
    name: "Alphonso Davies",
    position: "DEF",
    age: 25,
    club: "FC Bayern München",
    appearances: 58,
  },

  {
    number: 18,
    name: "Raheem Edwards",
    position: "FWD",
    age: 30,
    club: "Toronto FC",
    appearances: 6,
  },

  {
    number: 19,
    name: "Stephen Eustáquio",
    position: "MID",
    age: 29,
    club: "FC Porto",
    appearances: 54,
  },

  {
    number: 20,
    name: "Luc de Fougerolles",
    position: "DEF",
    age: 20,
    club: "Fulham FC",
    appearances: 11,
  },

  {
    number: 21,
    name: "Liam Fraser",
    position: "MID",
    age: 28,
    club: "Reading FC",
    appearances: 19,
  },

  {
    number: 22,
    name: "Kyle Hiebert",
    position: "MID",
    age: 28,
    club: "St. Louis City SC",
    appearances: 2,
  },

  {
    number: 23,
    name: "David Junior Hoilett",
    position: "MID",
    age: 35,
    club: "Swindon Town F.C.",
    appearances: 68,
  },

  {
    number: 24,
    name: "Daniel Jebbison",
    position: "FWD",
    age: 22,
    club: "Preston North End F.C.",
    appearances: 5,
  },

  {
    number: 25,
    name: "Alistair Johnston",
    position: "DEF",
    age: 27,
    club: "Celtic F.C.",
    appearances: 56,
  },

  {
    number: 26,
    name: "Jamie Knight-Lebel",
    position: "DEF",
    age: 21,
    club: "Swindon Town F.C",
    appearances: 3,
  },

  {
    number: 27,
    name: "Ismaël Koné",
    position: "MID",
    age: 23,
    club: "U.S. Sassuolo Calcio.",
    appearances: 37,
  },

  {
    number: 28,
    name: "Cyle Larin",
    position: "FWD",
    age: 30,
    club: "Feyenoord",
    appearances: 87,
  },

  {
    number: 29,
    name: "Liam Millar",
    position: "FWD",
    age: 26,
    club: "Hull City",
    appearances: 37,
  },

  {
    number: 30,
    name: "Tom McGill",
    position: "GK",
    age: 25,
    club: "Brighton & Hove Albion",
    appearances: 0,
  },

  {
    number: 31,
    name: "Jayden Nelson",
    position: "FWD",
    age: 23,
    club: "Austin FC",
    appearances: 12,
  },

  {
    number: 32,
    name: "Tani Oluwaseyi",
    position: "FWD",
    age: 25,
    club: "Villarreal CF",
    appearances: 21,
  },

  {
    number: 33,
    name: "James Pantemis",
    position: "GK",
    age: 29,
    club: "Portland Timbers",
    appearances: 1,
  },

  {
    number: 34,
    name: "Samuel Piette",
    position: "MID",
    age: 31,
    club: "CF Montréal",
    appearances: 69,
  },

  {
    number: 35,
    name: "Kwasi Poku",
    position: "FWD",
    age: 23,
    club: "RWDM Brussels",
    appearances: 1,
  },

  {
    number: 36,
    name: "Promise David",
    position: "FWD",
    age: 24,
    club: "Royale Union Saint-Gilloise",
    appearances: 8,
  },

  {
    number: 37,
    name: "Jacen Russell-Rowe",
    position: "FWD",
    age: 23,
    club: "Toulouse FC",
    appearances: 7,
  },

  {
    number: 38,
    name: "Nathan-Dylan Saliba",
    position: "MID",
    age: 22,
    club: "R.S.C. Anderlecht",
    appearances: 11,
  },

  {
    number: 39,
    name: "Jacob Shaffelburg",
    position: "FWD",
    age: 26,
    club: "Los Angeles FC",
    appearances: 31,
  },

  {
    number: 40,
    name: "Niko Sigur",
    position: "DEF",
    age: 22,
    club: "HNK Hajduk Split",
    appearances: 15,
  },

  {
    number: 41,
    name: "Iké Ugbo",
    position: "FWD",
    age: 27,
    club: "Sheffield Wednesday F.C.",
    appearances: 9,
  },

  {
    number: 42,
    name: "Dominick Zator",
    position: "DEF",
    age: 31,
    club: "Arka Gdynia",
    appearances: 3,
  },
];


if (document.getElementById("goalkeepers")) {
  for (let i = 0; i < players.length; i++) {
    var player = players[i];

    var member = document.createElement("div");

    member.className = "members";

    member.innerHTML = ` 

    <img src="images/Player-${player.number}.jpg" alt="${player.name}"> 

    <h5>${player.name}</h5> 

    <p>Club: ${player.club}</p> 

    <p>Age: ${player.age}</p> 

    <p>International Apperances: ${player.appearances}</p> 

  `;

    if (player.position === "GK") {
      document.getElementById("goalkeepers").appendChild(member);
    } else if (player.position === "DEF") {
      document.getElementById("defenders").appendChild(member);
    } else if (player.position === "MID") {
      document.getElementById("midfielders").appendChild(member);
    } else if (player.position === "FWD") {
      document.getElementById("forwards").appendChild(member);
    }
  }
}

const modal = document.getElementById("gameModal");

if (modal) {
  const previews = document.querySelectorAll(".preview");
  const closeBtn = document.querySelector(".close-btn");
  const modalDate = document.getElementById("modalDate");
  const modalTime = document.getElementById("modalTime");
  const modalOpponent = document.getElementById("modalOpponent");
  const modalLocation = document.getElementById("modalLocation");
  const modalStage = document.getElementById("modalStage");
  const favouriteBtn = document.getElementById("favouriteBtn");

  const opponentFlag = document.getElementById("opponentFlag");
  const recentForm = document.getElementById("recentForm");

  const recentResults = {
    "Switzerland": ["W", "W", "D", "W", "D"],
    "Qatar": ["D", "W", "L", "D", "L"],
    "Bosnia": ["W", "W", "D", "W", "W"],
    "TBD": ["-", "-", "-", "-", "-"],
  };

  let selectedMatch = {};

  for (let i = 0; i < previews.length; i++) {
    previews[i].addEventListener("click", function () {
      const date = this.dataset.date;
      const time = this.dataset.time;
      const opponent = this.dataset.opponent;
      const location = this.dataset.location;
      const stage = this.dataset.stage;

      selectedMatch = {
        date: date,
        time: time,
        opponent: opponent,
        location: location,
        stage: stage,
      };

      modalDate.textContent = "Date: " + date;
      modalTime.textContent = "Time: " + time;
      modalOpponent.textContent = opponent;
      modalLocation.textContent = "Location: " + location;
      modalStage.textContent = "Stage: " + stage;

      if (opponent === "Switzerland") {
        opponentFlag.src = "images/switzerland-flag.jpg";
      }
      else if (opponent === "Qatar") {
        opponentFlag.src = "images/qatar-flag.jpg";
      }
      else if (opponent === "Bosnia") {
        opponentFlag.src = "images/bosnia-flag.jpg";
      }
      else {
        opponentFlag.src = "images/TBD-flag.jpg";
      }

      let form;

      if (recentResults[opponent]) {
        form = recentResults[opponent];
      } else {
        form = ["-", "-", "-", "-", "-"];
      }

      let text = " ";

      form.forEach(item => {
        text += item + " ";
      });

      recentForm.textContent = "Form: " + text.trim();

      modal.style.display = "flex";
    });
  }

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  favouriteBtn.addEventListener("click", function () {
    let favourites = JSON.parse(localStorage.getItem("favouriteGames")) || [];

    favourites.push(selectedMatch);

    localStorage.setItem("favouriteGames", JSON.stringify(favourites));

    alert("Game added to favourites");
  });
}