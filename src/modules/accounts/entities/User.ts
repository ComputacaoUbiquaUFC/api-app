import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  nome!: string;

  @Column()
  cpf!: string;

  @Column()
  email?: string;

  @Column()
  senha!: string;

  @CreateDateColumn()
  created_at!: Date;
}

export { User };
