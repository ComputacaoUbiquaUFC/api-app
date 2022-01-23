import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  user: {
    nome: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, senha }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email ou senha incorrect");
    }

    if (user.senha !== senha) {
      throw new Error("Email ou senha incorrect");
    }

    const token = sign({}, "451909515652da74f9f3c5a8184d7ff3", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUserUseCase };