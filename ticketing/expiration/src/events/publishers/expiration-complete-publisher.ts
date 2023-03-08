import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@iceydc-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
