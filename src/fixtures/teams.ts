import { members } from './user'

export const teams = {
  team: {
    id: 1,
    name: "team",
    owner: 1,
    parent: 1,
    org_id: 1
  },
  members: [
    members.user,
  ],
}