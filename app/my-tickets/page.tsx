import { Ticket } from "../compos/ticket"
import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export default async function Page(){
    const allData = await prisma.test.findMany({});
    return <div > 
<h1> Cards List </h1>
<div className="mt-2 bg-accent w-full flex flex-col items-center justify-center gap-4">
{
      allData.map((card)=>(
        <div className="m-2" key={card.id}>
            <h1> {card.name}</h1>
              <Ticket />
        </div>
    ))
}
    </div>
    </div>
}