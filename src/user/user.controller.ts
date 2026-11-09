import { Controller, Get, Query } from '@nestjs/common';

const users: { id: number; name: string }[] = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
];
@Controller('user')
export class UserController {
    
    @Get()
    getUser() {
        return users;
    }

    //get user by query param
    // url is http://localhost:3000/user/query?id=1
    @Get('query')
    getUserByQueryParam(@Query('id') id: string) {
        const userId = Number(id);
        return users.filter(user => user.id === userId);
    }
}
