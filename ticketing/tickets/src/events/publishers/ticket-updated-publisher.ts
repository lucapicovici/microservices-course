import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@iceydc-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
