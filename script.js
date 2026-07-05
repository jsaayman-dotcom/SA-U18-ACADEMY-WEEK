// =====================================
// SA U18 Academy Week 2026
// =====================================

const modal = document.getElementById("teamModal");
const teamContent = document.getElementById("teamContent");

// =============================
// Open Team
// =============================

function openTeam(teamKey) {

    const team = teams[teamKey];

    if (!team) {
        alert("Team information not available yet.");
        return;
    }

    let staffHTML = "";

    if (team.staff) {

        for (const role in team.staff) {

            if (team.staff[role]) {

                const title = role
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, letter => letter.toUpperCase());

                staffHTML += `
                    <li><strong>${title}:</strong> ${team.staff[role]}</li>
                `;
            }
        }

    }

    let playersHTML = "";

    if (team.players) {

        team.players.forEach((player, index) => {

            playersHTML += `
                <li>${index + 1}. ${player}</li>
            `;

        });

    }

    teamContent.innerHTML = `

        <div class="team-header">
            <h2>${team.name}</h2>
        </div>

        <div class="team-section">
            <h3>Management</h3>
            <ul>
                ${staffHTML}
            </ul>
        </div>

        <div class="team-section">
            <h3>Players</h3>
            <ol>
                ${playersHTML}
            </ol>
        </div>

    `;

    modal.style.display = "block";

}

// =============================
// Close Team
// =============================

function closeTeam() {

    modal.style.display = "none";

}

// =============================
// Close when clicking outside
// =============================

window.onclick = function(event) {

    if (event.target === modal) {

        closeTeam();

    }

};
