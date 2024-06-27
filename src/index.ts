import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username:string, password:string,firstName:string,lastName:string){
    await prisma.user.create({
        data:{
            username,
            firstName,
            lastName,
            password
        }
    })
}

async function createTodo(userId: number, title: string, description: string) {
     await prisma.todo.create({
        data:{
            userId,
            title,
            description,
        }
     })
}

async function getTodos(userId: number, ) {
    await prisma.todo.findMany({
        where:{
            userId:userId
        }
    })
}

async function getTodosAndUserDetails(userId: number, ) {
    await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            title: true,
            description: true
        }
    });
}

insertUser("drj",'12345','Dishu','Raj')

createTodo(1,"Solve potd","leetcode")

getTodos(1)

getTodosAndUserDetails(1)