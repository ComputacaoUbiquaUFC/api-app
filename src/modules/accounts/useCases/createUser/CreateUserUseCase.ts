import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ nome, cpf, email, senha }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      nome,
      cpf,
      email,
      senha,
    });
  }
}

export { CreateUserUseCase };
