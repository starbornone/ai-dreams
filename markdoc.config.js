export const config = {
  tags: {
    chat: {
      render: 'Chat',
      description: 'Display a chat window',
    },
    'chat-message': {
      render: 'ChatMessage',
      description: 'Display a message in a chat window',
      attributes: {
        sender: {
          type: 'string',
          description: 'Sender of the message',
        },
        time: {
          type: 'string',
          description: 'Time of the message',
        },
      },
    },
    email: {
      render: 'Email',
      description: 'Display a block with an email style format',
      attributes: {
        sender: {
          type: 'string',
          description: 'Email sender',
        },
        subject: {
          type: 'string',
          description: 'Email subject',
        },
        time: {
          type: 'string',
          description: 'Time of the email',
        },
      },
    },
    'fake-link': {
      render: 'FakeLink',
      description: 'Display a fake link',
      attributes: {},
    },
    note: {
      render: 'Note',
      description: 'Display a callout or highlighted note',
      attributes: {},
    },
    notification: {
      render: 'Notification',
      description: 'Display a notification or alert',
      attributes: {
        icon: {
          type: 'string',
          description: 'Icon to display in the notification',
          matches: ['alert', 'bell', 'calendar', 'info'],
        },
      },
    },
  },
};
