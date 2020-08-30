import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ImcsRepository from '../repositories/ImcsRepository';
import CreateImcService from '../services/CreateImcService';

const imcRouter = Router();

imcRouter.get('/', async (request, response) => {
  const imcsRepository = getCustomRepository(ImcsRepository);
  const imcs = await imcsRepository.find();
  return response.json(imcs);
})

imcRouter.get('/means', async (request, response) => {
  const imcsRepository = getCustomRepository(ImcsRepository);
  const imcs = await imcsRepository.getMeans();
  return response.json(imcs);
})

imcRouter.post('/', async (request, response) => {
  const {weight, height} = request.body;
  const createImcService = new CreateImcService();
  const imc = await createImcService.execute({
    weight,
    height
  })
  return response.json(imc);
})

imcRouter.delete('/:id', async (request, response) => {
  const {id} = request.params
  const imcsRepository = getCustomRepository(ImcsRepository);
  const imcToDelete = await imcsRepository.find({where: {id}});
  await imcsRepository.remove(imcToDelete);
  return response.status(204).send();
})

export default imcRouter;