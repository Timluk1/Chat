import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Token } from 'src/token/entity/token.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Token, token => token.user, { cascade: true })
    token: Token;
}
