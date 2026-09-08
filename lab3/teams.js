let teams = [
  {
    id: 1,
    tname: "Rusty",
    tl: "Bharat Pratap Singh",
    email: "bharat18@gmail.com",
    members: 6,
  },
  {
    id: 2,
    tname: "Code Crafter",
    tl: "ManishaSingh",
    email: "mani.singh@gmail.com",
    members: 5,
  },
];
let nextId = 3;
export const getAllTeams = () => teams;

export const getTeamById = (id) => teams.find((team) => team.id === id);

export const addTeam = (newTeam) => {
  const team = { id: nextId++, newTeam };
  team.push(team);
  return team;
};
export const updateTeamById = (id, updateTeam) => {
  const team = getTeamById(id);
  if (!team) return null;
  Object.assign(team, updateTeam);
  return team;
};

export const deleteTeam = (id) => {
  const index = teams.findIndex((team) => team.id === id);
  if (index == -1) return false;
  teams.splice(index, 1);
  return true;
};
