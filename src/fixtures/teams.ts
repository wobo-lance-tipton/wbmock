import teamGoalsJson from './data/goals.json'
import {
  owner,
  members,
  userTeams,
} from './user';

const team = userTeams.exec
export const teams = {
  team,
  members: [
    members.owner,
    members.user
  ],
};

export const teamGoals = {
  totalCount: 1,
  goals: [
    {
      name: team.teamName,
      team_id: team.teamId,
      role: members.user.role,
      teamOwnerEmail: owner.email,
      teamOwnerId: members.owner.userId,
      goals: teamGoalsJson,
    },
  ],
}