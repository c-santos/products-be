export class UserEntity {
    id: string;
    email: string;
    first_name: string;
    last_name: string;

    constructor(data: Partial<UserEntity>) {
        Object.assign(this, data);
    }

    static create(data: Partial<UserEntity>) {
        return new UserEntity(data);
    }
}
