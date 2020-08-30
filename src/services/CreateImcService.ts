import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Imc from '../models/Imc';

interface Request {
  weight: number;
  height: number;
}

class CreateImcService {
  public async execute({
    weight,
    height
  }: Request): Promise<Imc> {
    const imcsRepository = getRepository(Imc);

    if (weight > 1000) throw new AppError('Invalid weight', 400);

    const imcToSave = imcsRepository.create({
      weight,
      height
    });

    const imc = await imcsRepository.save(imcToSave);

    return imc;
  }
}

export default CreateImcService;
