# Simple Words Service

Simple Words Service is a microservice designed to provide simple and easy-to-understand definitions for words in multiple languages. The service utilizes the OpenAI API to generate definitions and Redis for caching responses to improve performance and reduce API usage.

## Features

- **Multi-language support**: The service can return definitions in different languages based on user input.
- **Caching with Redis**: Definitions are cached to reduce API calls and improve response times.
- **Scalable architecture**: The project is structured to support future expansions and integrations.

## Project Structure

```
simple-words-service/
│
├── node_modules/            # Installed dependencies
│
├── src/                     # Source code of the project
│   ├── clients/             # External service clients
│   │   ├── openai.client.js        # OpenAI API client
│   │   └── redis.client.js         # Redis client
│   │
│   ├── services/            # Business logic services
│   │   ├── definition.service.js   # Service for retrieving and caching definitions
│   │   └── prompt-generator.service.js  # Service for generating prompts
│   │
│   └── app.js               # Main application file
│
├── .env                     # Environment variables
├── .ex.env                  # Example environment variables file
├── .gitignore               # Git ignore file
├── .prettierrc              # Prettier configuration
├── Dockerfile               # Dockerfile for building the Docker image
├── docker-compose.yml       # Docker Compose configuration
├── package.json             # Project metadata and dependencies
└── yarn.lock                # Dependency versions lock file
```

## Getting Started

### Prerequisites

- Node.js
- Docker and Docker Compose
- Yarn (optional, but recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/simple-words-service.git
   cd simple-words-service
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create and configure the `.env` file:

   ```bash
   cp .ex.env .env
   ```

   Replace the placeholder values in `.env` with your actual OpenAI API key and Redis URL.

### Running the Service

You can run the service locally using Docker Compose:

```bash
docker-compose up --build
```

This command will build and start the service, making it accessible at `http://localhost:5000`.

### Usage

To get a definition, send a GET request to the service with the word and the desired language:

```bash
GET http://localhost:5000/word?ln=language
```

For example:

```bash
GET http://localhost:5000/apple?ln=en
```

### Error Handling

If you encounter the `RateLimitError: 429`, it means you've exceeded your API quota. Consider reviewing your API usage on the OpenAI dashboard and adjusting your usage patterns.

### Testing and Development

For development purposes, you can run the service without Docker:

```bash
node src/app.js
```

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
This `README.md` covers all the key aspects of your project, including setup instructions, project structure, and usage examples.
```