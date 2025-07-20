# Playwright Automation Challenge

## Prerequisites
Before you begin, ensure you have installed:
1. **Docker** ([Download Docker Desktop](https://www.docker.com/products/docker-desktop))
2. **Git** ([Download Git](https://git-scm.com/downloads))

## Initial Setup
1. **Clone the repository**:
   ```bash
   git clone [REPOSITORY_URL]
   cd home-test
   ```

## Run Tests with Docker (Recommended)
**Only one command** is needed to execute all tests across multiple browsers and devices:
```bash
docker compose up
```
This will automatically:
- Pull required Docker demo app image
- Run tests on:
  - **Desktop**: Chrome, Firefox, Safari
  - **Mobile**: Android (Galaxy S24), iOS (iPhone 15 Pro Max)
- Generate HTML reports upon completion

### Additional Useful Commands

* **Re-run all tests:**

  ```bash
  docker compose run tests npx playwright test
  ```

* **Run a single test file:**

  ```bash
  docker compose run tests npx playwright test tests/example.spec.ts
  ```

* **Run a test with a specific device or browser:**

  ```bash
  docker compose run tests npx playwright test --project='Mobile Safari'
  ```

## Alternative Execution (without Docker)
To run locally, you'll need to have Node.js installed. The web app should be running in [localhost:3100](http://localhost:3100), and then:

```bash
npm install
npx playwright test
```

## Test Coverage
- Cross-browser testing (Chrome, Firefox, WebKit)
- Multi-platform testing (Desktop + Mobile)
- **Page Object Model** implementation
- Fully isolated Dockerized environment

---

### Important Notes
1. First execution may take a few minutes (image downloads).
2. Failure videos/screenshots are saved in `test-results/`.
3. To run specific tests (e.g. mobile only):
   ```bash
   docker-compose run tests npx playwright test --project="Mobile Chrome"
   ```

---

### Troubleshooting
If you encounter issues:
- **Port conflict**: Ensure port 3100 is free
- **Docker errors**: Try rebuilding images:
  ```bash
  docker-compose build --no-cache
  ```

---

### ⚠️ Note for Intel/AMD (x86\_64) Users

This project uses a Docker image built for the `arm64` architecture (Apple Silicon - M1/M2).

If you are running on an Intel or AMD processor (`x86_64` architecture), you might encounter an error like:

```
WARNING: The requested image's platform (linux/arm64/v8) does not match the detected host platform (linux/amd64/v3) and no specific platform was requested
exec /usr/local/bin/docker-entrypoint.sh: exec format error
```

To fix this:

1. **Install QEMU emulation support:**

```bash
docker run --privileged --rm tonistiigi/binfmt --install arm64
```

2. **Add the following line to your `docker-compose.yml` inside the `demo-app` service:**

```yaml
  demo-app:
    image: automaticbytes/demo-app
    platform: linux/arm64/v8
    ports:
      - "3100:3100"
```

This tells Docker to emulate the `arm64` architecture so the image can run correctly on your system.

---

📝 *Note:* Emulation may run slower, but it will allow you to run the tests without issues.