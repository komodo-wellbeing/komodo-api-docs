# Komodo API Docs

[https://komodo-wellbeing.github.io/komodo-api-docs/](https://komodo-wellbeing.github.io/komodo-api-docs/)

## OpenAPI Docs

The API documentation for the REST API is automatically generated using [OpenAPI Docs](https://docusaurus-openapi.tryingpan.dev/).

### Updating documentation

If there are changes needed, copy the updated YAML file the `komodo-api` project, and regenerate the Markdown files.

```sh
# Copy the file from your local komodo-api project directory
npm run openapi:pull
# Generates Markdown files
npm run openapi:gen
```

_Note, the generated markdown files are untracked by Git - only the YAML file should be committed._
