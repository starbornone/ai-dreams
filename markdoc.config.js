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
          type: String,
          description: 'Sender of the message',
        },
        time: {
          type: String,
          description: 'Time of the message',
        },
      },
    },
    email: {
      render: 'Email',
      description: 'Display a block with an email style format',
      attributes: {
        sender: {
          type: String,
          description: 'Email sender',
        },
        subject: {
          type: String,
          description: 'Email subject',
        },
        time: {
          type: String,
          description: 'Time of the email',
        },
      },
    },
    'fake-link': {
      render: 'FakeLink',
      description: 'Display a fake link',
      attributes: {},
    },
    form: {
      render: 'Form',
      description: 'Display a form',
      attributes: {},
    },
    grid: {
      render: 'Grid',
      description: 'Display a grid',
      attributes: {
        columns: {
          type: String,
          description: 'Number of columns in the grid',
        },
      },
    },
    input: {
      render: 'Input',
      description: 'Display an input field',
      attributes: {
        label: {
          type: String,
          description: 'Label for the input field',
        },
        placeholder: {
          type: String,
          description: 'Placeholder text for the input field',
        },
        type: {
          type: String,
          description: 'Type of the input field',
          matches: ['email', 'password', 'text', 'textarea'],
        },
      },
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
          type: String,
          description: 'Icon to display in the notification',
          matches: ['alert', 'bell', 'calendar', 'info'],
        },
      },
    },
  },
};
