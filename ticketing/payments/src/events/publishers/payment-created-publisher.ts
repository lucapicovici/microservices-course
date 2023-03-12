import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from '@iceydc-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
