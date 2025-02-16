# Chat Application

This is a simple chat application built with Angular that allows users to communicate with each other in real-time.

## Features

- User-friendly chat interface
- Ability to send and receive messages
- Individual message display
- Responsive design

## Project Structure

```
chat-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── chat
│   │   │   │   ├── chat.component.html
│   │   │   │   ├── chat.component.ts
│   │   │   │   ├── chat.component.css
│   │   │   │   └── chat.component.spec.ts
│   │   │   ├── message
│   │   │   │   ├── message.component.html
│   │   │   │   ├── message.component.ts
│   │   │   │   ├── message.component.css
│   │   │   │   └── message.component.spec.ts
│   │   ├── services
│   │   │   └── chat.service.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.css
│   │   ├── app.component.spec.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd chat-app
   ```

3. Install the dependencies:
   ```
   npm install --legacy-peer-deps
   ```

4. Run the application:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see!

## License

This project is licensed under the MIT License.