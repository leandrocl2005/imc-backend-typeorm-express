import { EntityRepository, Repository } from 'typeorm';

import Imc from '../models/Imc';

interface Means {
  weightMean: number;
  heightMean: number;
}

@EntityRepository(Imc)
class ImcsRepository extends Repository<Imc> {
  public async getMeans(): Promise<Means> {
    const imcs = await this.find();

    const weightMean = imcs
      .map(imc => imc.weight)
      .reduce((acc, val) => acc + val, 0) / imcs.length;
    const heightMean = imcs
      .map(imc => imc.height)
      .reduce((acc, val) => acc + val, 0) / imcs.length;

    return {
      weightMean,
      heightMean
    };
  }
}

export default ImcsRepository;
