import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('emails')
export class SendMailWithTweetsJob {
    @Process()
    handle(job: Job) {
        console.log(`Bull: ${JSON.stringify(job.data)}`);
    }
}