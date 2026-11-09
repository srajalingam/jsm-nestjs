import { Injectable } from '@nestjs/common';
import { LoggerService } from './user.logger.js';

export interface User {
    id: number;
    name: string;
    email: string;
}

@Injectable()
export class UserService {
    constructor(private readonly logger: LoggerService) {}
    private users: User[] = [
        { id: 1, name: 'John Doe', email: 'john@gmail.com' },
        { id: 2, name: 'Jane Smith', email: 'jan@gmail.com' }
    ];

    findAllUsers(): User[] {
        this.logger.log('Finding all users');
        return this.users;
    }
    findUserById(id: number): User | undefined {
        this.logger.log(`Finding user with id: ${id}`);
        return this.users.find(user => user.id === id);
    }
}
