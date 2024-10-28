import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { User } from "src/user/entity/user.entity"

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User, user => user.token)
    @JoinColumn()
    firstUser: User

    @OneToOne(() => User, user => user.token)
    @JoinColumn()
    secondUser: User
}