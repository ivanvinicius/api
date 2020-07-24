import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfilesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const is_provider = request.user.provider;

    const showProfile = container.resolve(ShowProfileService);

    const profile = await showProfile.execute({ user_id, is_provider });

    return response.json(profile);
  }
}
