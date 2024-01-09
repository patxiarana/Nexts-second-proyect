import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(){
const tasks = await  prisma.task.findMany()
return NextResponse.json(tasks)
}

export async function POST(request){
     const {title,description} = await request.json()
    const NewTask = await prisma.task.create({
        data : {
            title:title,
            description:description 
        }
     })
    return NextResponse.json(NewTask)
    }