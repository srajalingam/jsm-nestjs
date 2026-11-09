import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';

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

    //Param
    @Get(':id')
    getUserByParam(@Param('id') id: string) {
       return{ id: id, name: 'John Doe' };
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return {data: createUserDto, message: 'User created successfully'};
    }
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
        return {
            data:{id: id, ...updateUserDto}, 
            message: 'User updated successfully'
        };
    }
}
