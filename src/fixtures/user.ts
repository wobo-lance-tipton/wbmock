/**
 * This file contains user mock data
 * Currently only works with 1 active connection, because it response with the same user
 * The values are hardcoded, but should be update to be dyamic
 */

export const user = {
  id: '1',
};

export const userInfo = {
  people: {
    info: {
      user_id: user.id,
      first_name: 'Joe',
      last_name: 'Schmoe',
      email: 'jschmoe@org.example',
      org_id: '0',
    },
    // TODO: update this to come from the team object
    myTeams: [
      {
        teamId: '1',
        teamName: 'Executive Team',
        teamRoleId: '2',
        teamRole: 'member',
      },
    ],
  },
};

export const members = {
  user: {
    userId: user.id,
    lastname: userInfo.people.info.last_name,
    firstname: userInfo.people.info.first_name,
    role: userInfo.people.myTeams[0].teamRoleId,
    roleTitle: userInfo.people.myTeams[0].teamRole,
  },
};
