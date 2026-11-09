import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserService } from './user.service.js';

// const users: { id: number; name: string }[] = [
//         { id: 1, name: 'John Doe' },
//         { id: 2, name: 'Jane Smith' }
// ];
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    getUser() {
        return this.userService.findAllUsers();
    }

    //get user by query param
    // url is http://localhost:3000/user/query?id=1
    @Get('query')
    getUserByQueryParam(@Query('id') id: string) {
        const userId = Number(id);
        return this.userService.findUserById(userId);
    }

    //Param
    @Get(':id')
    // url is http://localhost:3000/user/1
    getUserByParam(@Param('id') id: string) {
        const userId = Number(id);
        return this.userService.findUserById(userId);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return {data: createUserDto, message: 'User created successfully'};
    }
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
        const userId = Number(id);
        return {
            data:{id: userId, ...updateUserDto}, 
            message: 'User updated successfully'
        };
    }
}
