import { organization } from './organization'

/**
 * This file contains user mock data
 * Currently only works with 1 active connection, because it response with the same user
 * The values are hardcoded, but should be update to be dyamic
 */
 
export const owner = {
  user_id: '1',
  first_name: 'Luke',
  last_name: 'Skywalker',
  email: 'lskywalker@jedi.org',
  org_id: organization.id,
}

export const user = {
  user_id: '2',
  first_name: 'Joe',
  last_name: 'Schmoe',
  email: 'jschmoe@org.example',
  org_id: organization.id,
};

export const userTeams = {
  exec: {
    teamId: '1',
    name: 'Skywalker',
    teamName: 'Skywalker',
    owner: owner.user_id,
    org_id: organization.id,
    parent: organization.parentId,
  }
}

export const ownerInfo = {
  people: {
    info: owner,
    myTeams: [
      {
        teamRoleId: '1',
        teamRole: 'member',
        teamId: userTeams.exec.teamId,
        teamName: userTeams.exec.teamName,
      }
    ],
  },
}


export const userInfo = {
  people: {
    info: user,
    myTeams: [
      {
        teamRoleId: '2',
        teamRole: 'member',
        teamId: userTeams.exec.teamId,
        teamName: userTeams.exec.teamName,
      },
    ],
  },
};

export const members = {
  user: {
    userId: user.user_id,
    lastname: userInfo.people.info.last_name,
    firstname: userInfo.people.info.first_name,
    role: userInfo.people.myTeams[0].teamRoleId,
    roleTitle: userInfo.people.myTeams[0].teamRole,
  },
  owner: {
    userId: owner.user_id,
    lastname: ownerInfo.people.info.last_name,
    firstname: ownerInfo.people.info.first_name,
    role: ownerInfo.people.myTeams[0].teamRoleId,
    roleTitle: ownerInfo.people.myTeams[0].teamRole,
  }
};
