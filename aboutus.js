const companyInfo = {
    description: "We are a team of passionate individuals dedicated to providing high-quality services to our customers."
  };
  
  const missionStatement = {
    statement: "Our mission is to exceed customer expectations by delivering excellent products and services."
  };
  
  const teamMembers = [
    { name: "Labeat Bytyqi", position: "Every possible position in the cafe" },
  ];
  
  function displayCompanyInfo() {
    document.getElementById("company-description").textContent = companyInfo.description;
  }
  
  function displayMissionStatement() {
    document.getElementById("mission-statement").textContent = missionStatement.statement;
  }
  
  function displayTeamMembers() {
    const teamList = document.getElementById("team-members");
    teamList.innerHTML = "";
  
    teamMembers.forEach(member => {
      const listItem = document.createElement("li");
      listItem.textContent = `${member.name} - ${member.position}`;
      teamList.appendChild(listItem);
    });
  }
  
  window.onload = function() {
    displayCompanyInfo();
    displayMissionStatement();
    displayTeamMembers();
  };
  