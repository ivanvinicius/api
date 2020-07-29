import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfilesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfile = container.resolve(ShowProfileService);

    const profile = await showProfile.execute(request.user.id);

    return response.json(profile);
  }
}
