// ================================
// SA U18 Academy Week 2026
// script.js
// ================================

// Team popup elements
const popup = document.getElementById("teamPopup");
const popupTitle = document.getElementById("popupTitle");
const popupStaff = document.getElementById("popupStaff");
const popupPlayers = document.getElementById("popupPlayers");

// ================================
// Open Team
// ================================

function openTeam(teamKey) {

    const team = teams[teamKey];

    if (!team) return;

    popupTitle.textContent = team.name;

    let staffHTML = "";

    if (team.staff) {

        for (const role in team.staff) {

            if (team.staff[role] !== "") {

                const title = role
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, c => c.toUpperCase());

                staffHTML += `
                    <p><strong>${title}:</strong> ${team.staff[role]}</p>
                `;

            }

        }

    }

    popupStaff.innerHTML = staffHTML;

    let playersHTML = "";

    team.players.forEach((player, index) => {

        playersHTML += `
            <li>${index + 1}. ${player}</li>
        `;

    });

    popupPlayers.innerHTML = playersHTML;

    popup.style.display = "flex";

}

// ================================
// Close Popup
// ================================

function closePopup() {

    popup.style.display = "none";

}

// Close when clicking outside

window.onclick = function (event) {

    if (event.target === popup) {

        closePopup();

    }

};

// ================================
// Fixtures Tabs
// ================================

function showDay(day) {

    document.querySelectorAll(".fixture-day").forEach(section => {

        section.style.display = "none";

    });

    document.getElementById(day).style.display = "block";

    document.querySelectorAll(".day-btn").forEach(btn => {

        btn.classList.remove("active");

    });

    event.target.classList.add("active");

}

// ================================
// Default
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const day1 = document.getElementById("day1");

    if (day1) {

        day1.style.display = "block";

    }

});
