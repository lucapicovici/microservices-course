import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@iceydc-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
