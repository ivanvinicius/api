import { Request, Response } from 'express';
// import { container } from 'tsyringe';

class StateController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({ ok: true });
  }
}

export default StateController;
