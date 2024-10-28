import { User } from "src/user/entity/user.entity";

export class TokensDto {
    email: string;
    id: number;
}

export class TokenDbDto{
    user: User;
    refreshToken: string;
}