import { goalOkr } from './goalOkr';
import { catchAll } from './catchAll';
import { teamInfo } from './teamInfo';
import { teamGoals } from './teamGoals';
import { Request, Response } from 'express';
import { getUserTeams } from './getUserTeams';
import { orgFeatureFlags } from './orgFeatureFlags';

/**
 * Main proxy endpoint to handle general requests to the wobo server api
 * Includes a catch all the returns a general response if no matching action is found
 */
export const proxyEndpoint = async (
  req: Request,
  res: Response,
): Promise<void> => {
  switch (req.query.action) {
    case `goal/okrFilterComp`: {
      await goalOkr(req, res);
      break;
    }
    case `team/InfoAndMembers`: {
      await teamInfo(req, res);
      break;
    }
    case `organization/GetFeatureFlags`: {
      await orgFeatureFlags(req, res);
      break;
    }
    case `people/MyTeams`: {
      await getUserTeams(req, res);
      break;
    }
    case `goal/teamGoal`: {
      await teamGoals(req, res)
      break;
    }
    default: {
      await catchAll(req, res);
      break;
    }
  }

  return res.end();
};
