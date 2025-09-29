# SiteScope Marketing Site

A responsive marketing website for SiteScope, an intelligent digital experience monitoring platform. The site is optimized for static hosting on Amazon Amplify and includes modern styling, accessibility-friendly markup, and a simple interaction layer.

## Project structure

```
.
├── index.html             # Landing page markup
├── assets
│   ├── css/style.css      # Global styles and responsive layout
│   ├── js/main.js         # Navigation toggle and footer date logic
│   └── img/dashboard-illustration.svg
├── amplify.yml            # Amplify build & deploy configuration
└── README.md
```

## Local development

This is a static site—no build step is required. Simply open `index.html` in your browser or use a lightweight static server:

```bash
# Using Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Preparing for Amazon Amplify hosting

1. **Connect repository**: In the AWS Amplify console, choose *Host web app* and connect the Git provider that hosts this repository (GitHub, GitLab, Bitbucket, or AWS CodeCommit).
2. **Select branch**: Choose the branch you want Amplify to deploy.
3. **Configure build settings**: Amplify automatically detects the `amplify.yml` in the root of the repo. For this static site no build step is required; Amplify will simply copy the contents of the repository to the hosting bucket.
4. **Save & deploy**: Amplify provisions the hosting environment and issues an SSL certificate automatically. Every push to the connected branch triggers a new deploy.

### amplify.yml

The included `amplify.yml` file provides an explicit configuration for static hosting:

```yaml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands: []
        build:
          commands: []
      artifacts:
        baseDirectory: .
        files:
          - '**/*'
      customHeaders:
        - pattern: '**/*'
          headers:
            - key: Cache-Control
              value: max-age=31536000
            - key: X-Frame-Options
              value: SAMEORIGIN
            - key: X-Content-Type-Options
              value: nosniff
    appRoot: .
```

Adjust caching or security headers as needed for your deployment.

## Accessibility & performance highlights

- Accessible semantic HTML structure with ARIA labels where appropriate.
- Mobile-first responsive design with CSS grid and flexbox.
- Lightweight footprint—no external JavaScript dependencies.
- Prefetches Google Fonts and uses system fallbacks for performance resilience.

## License

This project is provided for demonstration purposes. Update the license section to match your organization’s requirements before going live.
