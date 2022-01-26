/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
}

interface IResponse {
  user: {
    id: string;
    nome: string;
    cpf: string;
    email: string;
  };
}

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findById(id);

    if (user === undefined) {
      throw new AppError("User not exists");
    }

    const userReturn: IResponse = {
      user: {
        id: user!.id,
        nome: user!.nome,
        cpf: user!.cpf,
        email: user!.email,
      },
    };

    return userReturn;
  }
}

export { ListUserUseCase };
