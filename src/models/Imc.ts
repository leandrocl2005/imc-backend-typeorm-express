import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('imcs')
class Imc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight: number;

  @Column()
  height: number;
}

export default Imc;