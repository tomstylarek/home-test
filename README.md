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

## View Results
1. **Interactive HTML Report** (opens in your browser)
Visualize the results, running this command from another terminal:
   ```bash
   npx playwright show-report
   ```

2. **Console Output**: You'll see a summary directly in your terminal.

## Alternative Execution (without Docker)
To run locally, the web app should be running in [localhost:3100](http://localhost:3100), and then:

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