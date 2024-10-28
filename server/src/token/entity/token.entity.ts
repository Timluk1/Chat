import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/entity/user.entity';

@Entity()
export class Token {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, user => user.token)
    @JoinColumn()
    user: User;

    @Column()
    refreshToken: string;
}
