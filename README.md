# Demo Hello World App

A containerized Node.js web application demonstrating cloud-native best practices for Cloud Engineer bootcamp students.

## Overview

This project is a simple yet production-ready Hello World application that showcases:
- **Modern Node.js backend** - Express.js server with clean API design
- **Static web frontend** - HTML, CSS, and JavaScript for user interface
- **Container-ready** - Multi-stage Dockerfile with security best practices
- **Tested code** - Jest unit tests with coverage reporting
- **Code quality** - ESLint configuration and automated linting
- **Environment configuration** - Dynamic settings via environment variables

This is an ideal demo project for learning containerization, deployment pipelines, and cloud application architecture.

## Project Structure

```
demo-helloworld-app/
├── src/
│   ├── index.js              # Express server entry point
│   ├── __tests__/
│   │   └── app.test.js       # Jest unit tests
│   └── public/
│       ├── index.html        # Frontend HTML
│       ├── script.js         # Frontend JavaScript
│       └── style.css         # Frontend styles
├── Dockerfile                # Multi-stage container build
├── package.json              # Node.js dependencies & scripts
└── README.md                 # This file
```

## Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Runtime | Node.js | ≥18.0.0 |
| Framework | Express.js | ^4.18.2 |
| Testing | Jest | ^29.7.0 |
| Linting | ESLint | ^8.54.0 |
| Container | Docker | (Alpine Linux) |

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Docker (for containerized deployment)

### Local Development

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Run the application:**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`

3. **Run tests:**
   ```bash
   npm test
   ```
   Tests run with coverage reporting to `coverage/` directory

4. **Lint code:**
   ```bash
   npm run lint
   npm run lint:fix        # Auto-fix linting issues
   ```

### Docker Deployment

1. **Build the container image:**
   ```bash
   docker build -t demo-helloworld-app:latest .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 demo-helloworld-app:latest
   ```

3. **Run with environment variables:**
   ```bash
   docker run -p 3000:3000 -e BG_COLOR=coral demo-helloworld-app:latest
   ```

## API Reference

### GET /
Returns the main HTML page with embedded styles and scripts.

### GET /api/config
Returns JSON configuration from environment variables.

**Response:**
```json
{
  "bgColor": "lightblue"
}
```

**Environment Variable:** `BG_COLOR` (default: `lightblue`)

## Cloud-Native Features

### Production-Ready Dockerfile
- **Multi-stage builds** - Reduces final image size by separating build and runtime
- **Non-root user** - Runs as `nodejs` user (UID 1001) for security
- **Alpine Linux** - Lightweight base image (~150MB smaller than standard)
- **Health checks** - Built-in HTTP health probe for orchestrators
- **Signal handling** - Uses dumb-init for proper process signal management
- **Minimal layers** - Optimized for caching and faster rebuilds

### Security Best Practices
- ✅ Non-root container user
- ✅ Read-only where possible
- ✅ Health check endpoint
- ✅ No unnecessary tools in final image
- ✅ Explicit Node.js version pinning

### Environment Configuration
- Dynamic background color via `BG_COLOR` environment variable
- Port configuration via `PORT` environment variable (default: 3000)
- Production mode enforcement in container

## Testing & Quality Assurance

### Run Tests
```bash
npm test
```

### Coverage Report
Test coverage reports are generated in `coverage/lcov-report/`. Open `index.html` in a browser to view detailed coverage analysis.

### Code Linting
```bash
npm run lint        # Check for issues
npm run lint:fix    # Automatically fix issues
```

## Learning Objectives

This project demonstrates key cloud engineering concepts:

1. **Containerization** - How to package Node.js applications as Docker images
2. **Configuration Management** - Using environment variables for multi-environment support
3. **CI/CD Ready** - Package.json scripts integrate easily with CI/CD pipelines
4. **Testing Practices** - Unit tests with coverage for production readiness
5. **Image Optimization** - Multi-stage builds to minimize container size
6. **Security** - Non-root users, health checks, minimal attack surface
7. **Scalability** - Stateless application ready for horizontal scaling

## Deployment Scenarios

### Local Docker
```bash
docker run -p 3000:3000 demo-helloworld-app:latest
```

### Kubernetes
```bash
kubectl apply -f deployment.yaml
```

### AWS ECS
Push to ECR and reference in task definition with port 3000 exposure.

### Azure Container Instances
```bash
az container create \
  --image demo-helloworld-app:latest \
  --ports 3000 \
  --name demo-app
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 3000 | Server listen port |
| `BG_COLOR` | lightblue | Frontend background color |
| `NODE_ENV` | production | Node.js environment (in container) |

## Next Steps for Learning

1. **Modify the frontend** - Change `src/public/style.css` to customize appearance
2. **Add API endpoints** - Extend `src/index.js` with new Express routes
3. **Write more tests** - Add to `src/__tests__/app.test.js`
4. **Push to registry** - Tag and push image to Docker Hub or ECR
5. **Orchestrate** - Deploy using Docker Compose, Kubernetes, or cloud providers

## Troubleshooting

### Port Already in Use
Change the port:
```bash
PORT=8080 npm start
# or
docker run -p 8080:3000 demo-helloworld-app:latest
```

### Tests Failing
Ensure Node.js version is 18+:
```bash
node --version
```

### Container Build Issues
Clear Docker cache and rebuild:
```bash
docker build --no-cache -t demo-helloworld-app:latest .
```

## License

This project is provided for educational purposes only. Feel free to use it as a learning resource for your Cloud Engineer bootcamp.

---

**Last Updated:** December 2025

This project is maintained as a demonstration for cloud engineering bootcamp students.
