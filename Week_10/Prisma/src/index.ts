import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  
    const res=await prisma.user.create({
        data:{
            email:username,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            password:true,
            lastName:true
        }
        
    })
    console.log(res);
}
// --------------------------------update user------------------------------------------
interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res=await prisma.user.update({
    where:{email:username},
    data:{
        firstName,
        lastName
    }
  })
  console.log(res)
}


//---------------------------------- delete user --------------------------------------
async function deleteUser(username:string,email:string){
        const res=await prisma.user.delete({
            
        })
}
insertUser("jhanitin1442@gmail.com","nitin123","Nitin","vit");
updateUser("jhanitin907@gmail.com",{
    firstName:"Harsh",
    lastName:"kumar"
});