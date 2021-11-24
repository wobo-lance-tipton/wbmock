import { NextFunction, Request, Response } from 'express';
import { parseUserFromCookie } from '../helpers/authHelper';

import config from '../config';
import { IUser } from '../controllers/auth.types';
import { cookies } from '../constants';
  
const addCookies = (req: Request, res: Response) => {
  // Not sure why, but need to add the cookie here for some reason
  // Seems like the sentinel auth is not working on the API side
  const cookieData = { id: req.query.userId } as IUser;
  res.cookie(cookies.auth, JSON.stringify(cookieData), {
    httpOnly: true,
    ...config.sentinel.cookieOptions,
  });
  res.cookie(cookies.authIndicator, 'true', config.sentinel.cookieOptions);
}

const addLocalUser =  (req:Request, res: Response) => {
  let user: IUser = { id: '1' }
  try {
    user = parseUserFromCookie(req)
  }
  catch(err){}

  res.locals.user = user
  return user
}

export const wbApiMock = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {


  if (req.originalUrl.includes('favicon.ico')) {
    return res.status(204).end()
  }
  
  if(req.path === '/wb/oauth/authorize'){
    console.log(`[ SENTINEL ] - Mocked Path - ${req.path}`)
    const { redirect_uri, state } = req.query

    return res.redirect(`${redirect_uri}?state=${state}&code=12345`);
  }

  addLocalUser(req, res)
  
  if(req.path === '/wb/oauth/token'){
    console.log(`[ SENTINEL ] - Mocked Path - ${req.path}`)
    res.json({
      success: true,
      access_token: '12345'
    });
    return next()
  }

  if(req.path === '/wb/oauth/validate'){
    console.log(`[ SENTINEL ] - Mocked Path - ${req.path}`)
    res.json({
      user_id: '1',
      success: true,
    });
    return next()
  }

  if(req.path.startsWith(`/wb/apis/iproxy`) && req.query.requestType === 'internal'){
    console.log(`[ SENTINEL Mocked ] Path - ${req.path} | Action - ${req.query.action}`)
    
    if(req.query.action === `goal/okrFilterComp`){
      addCookies(req, res)
      res.json({
        filterComp: [
          {
            start: '10/1/2021',
            end: '12/31/2021',
            period: 4,
            name: 'Q4 2021',
            year: 2021,
            yearOffset: 1,
            format: 'm/d/Y',
            stats: 1,
            value: 1,
          },
          {
            start: '1/1/2022',
            end: '03/31/2022',
            period: 4,
            name: 'Q1 2022',
            year: 2022,
            yearOffset: 1,
            format: 'm/d/Y',
            stats: 1,
            value: 1,
          }
        ]
      })
    }
    if(req.query.action === `team/InfoAndMembers`){
      addCookies(req, res)
      res.json({
        team: {
          id: 1,
          name: "team",
          owner: 1,
          parent: 1,
          org_id: 1
        },
        members: [
          {
            role: '2',
            roleTitle: 'member',
            firstname: 'Joe',
            lastname: 'Schmoe',
            userId: req.query.userId,
          }
        ],
      })
    }
    else {
      const userInfo = {
        people: {
          info: {
            user_id: req.query.userId,
            first_name: 'Joe',
            last_name: 'Schmoe',
            email: 'jschmoe@org.example',
            org_id: '0'
          },
          myTeams: [{
            teamId: '1',
            teamName: 'Executive Team',
            teamRoleId: '2',
            teamRole: 'member'
          }]
        }
      }
      res.json(userInfo);
    }

    return res.end()
  }

  return 'get-local-user'
}
