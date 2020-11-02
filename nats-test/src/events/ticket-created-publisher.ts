import { Publisher } from "../../../common/src/events/base-publisher";
import { TicketCreatedEvents } from "../../../common/src/events/ticket-created-events";
import { Subjects } from "../../../common/src/events/subjects";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvents> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
