import { injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
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
}

export { UsersRepository };
