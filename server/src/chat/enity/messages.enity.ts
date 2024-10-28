import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm"
import { Chat } from "./chat.enity"

@Entity()
export class Messages {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Chat, chat => chat.id)
    @JoinColumn()
    chat: Chat

    @Column()
    text: string
}