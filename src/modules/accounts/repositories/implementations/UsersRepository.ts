import { getRepository, Repository, UpdateResult } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ nome, cpf, email, senha }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      nome,
      cpf,
      email,
      senha,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async update({
    id,
    nome,
    cpf,
    email,
    senha,
  }: IUpdateUserDTO): Promise<UpdateResult> {
    const updateResult = await this.repository.update(id, {
      nome,
      cpf,
      email,
      senha,
    });

    return updateResult;
  }
}
export { UsersRepository };
