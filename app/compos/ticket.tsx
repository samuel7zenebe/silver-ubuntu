import { Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"

export function Ticket(){
  return <Card className="mt-2">
    <CardHeader>
           <CardAction>
              <p> Action </p>
           </CardAction>
    </CardHeader>
    <CardContent>
          <h1> We Had some kind of issue here.</h1>
    </CardContent>
    <CardFooter>
        <p>Footer.....</p>
    </CardFooter>
  </Card>
}