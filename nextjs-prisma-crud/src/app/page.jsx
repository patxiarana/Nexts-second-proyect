import { prisma } from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'
async function LoadTask() {
    //Utilizando fetch
    /*const res = await fetch('http://localhost:3000/api/task')
    const data =  await res.json() 
    console.log(data) */
    //utilizando prisma
    const tasks = await prisma.task.findMany()
    return tasks
}



async function HomePage() {

    const tasks = await LoadTask()
    console.log(tasks)
    return (
        <section className='container mx-auto'>
            <div className='grid grid-cols-3 gap-3 mt-10'>
                {tasks.map(task => (
                    <TaskCard
                        task={task} key={task.id} />

                ))}
            </div>
        </section>
    )
}


export default HomePage; 