export const eventProperties = {
  'cfpDeadline': '',
  'city': '',
  'description': '',
  'endDate': new Date(),
  'endTime': '',
  'eventName': '',
  'eventType': '',
  'imageAltText': '',
  'imageUrl': '',
  'organization': '',
  'registrationEndDate': '',
  'registrationStartDate': '',
  'startDate': new Date(),
  'startTime': '',
  'state': '',
  'timezone': '',
  'volunteeringNotes': '',
}

const today = 'Friday July, 1, 2022';

export const MOCK_EVENT = {
  title: 'Citizen Science and Engineering',
  cfpDeadline: today,
  organizationName: 'Sustainable Progress and Equality Collective',
  cfpLink: 'https://example.com',
  registrationDeadline: today,
  startDate: today,
  endDate: today,
  startTime: '9:00 am',
  endTime: '10:00 am',
  timeZone: 'PT',
  location: 'http://video-call.link',
  discount: 'Discount: 10% off, code: 10K12DS22',
  language: 'English',
  organizationUrl: 'https://specollective.org',
  socialMediaHashTag: '#myfirstevent',
  eventType: 'Conference',
  tags: [
    'Python',
    'Data Science',
    'Startup',
    'Conference',
    'Systems Thinking',
    'Machine Learning',
  ],
  description: 'Pulvinar et tellus vitae varius vestibulum tellus et tempor accumsan. Massa eget est pharetra, ultrices et enim, est eget enim. Fermentum tempus feugiat eget elementum. Lobortis duis magna feugiat dictum et quis. At aliquet sagittis nibh sagittis faucibus imperdiet euismod ultricies quam. Volutpat platea donec porttitor eget sed pellentesque metus, eu. Facilisi scelerisque porttitor feugiat odio neque. Nibh purus sed faucibus mi aliquam morbi. Enim, libero odio risus, posuere urna. Vivamus nulla amet, egestas vulputate.',
  speakers: [
    'John Smith',
    'Jane Doe',
  ],
  volunteeringNotes: 'Rhoncus nulla venenatis diam at quis. Condimentum augue adipiscing lectus lorem et, at rhoncus eget integer. Enim diam vulputate ultrices amet at etiam pretium, ac. Facilisis egestas amet, faucibus ut nibh vitae euismod habitasse at.',
  notes: 'Rhoncus nulla venenatis diam at quis. Condimentum augue adipiscing lectus lorem et, at rhoncus eget integer. Enim diam vulputate ultrices amet at etiam pretium, ac. Facilisis egestas amet, faucibus ut nibh vitae euismod habitasse at.',
  accessibilityDetails: [
    'Closed Caption',
    'Sign Language',
    'Screen Reader',
    'Keyboard Shortcuts',
  ]
}

export const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Event Title',
  },
  {
    id: 2,
    title: 'Event Title',
  },
  {
    id: 3,
    title: 'Event Title',
  },
  {
    id: 4,
    title: 'Event Title',
  },
  {
    id: 5,
    title: 'Event Title',
  }
]
