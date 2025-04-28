---
id: getting-started
title: Getting Started
slug: /getting-started/
---

To access the API you need to obtain API credentials in Komodo. This can be done by
either:

-   Contacting Komodo to issue organisation-based API credentials.
-   Generating organisation-based API credentials in Komodo via Settings > Integrations > Create an Integration > Custom.

## Authentication

There are currently 2 supported methods of authentication.

### Basic authentication

The simplest method is using Basic authentication with the API credentials from Komodo.

#### Process

1. Use the API credentials as Basic authentication to make requests to any API endpoint.

### Bearer token

You can also generate a short-lived Bearer token from the [authentication endpoint](./rest/v1/authenticate.api.mdx). This can be used as authentication to any API endpoint, alongside the API key.

#### Process

1. Create an API key by combining the API credentials in the format `<username>:<password>`.
1. Use the API key to make a request to the [authentication endpoint](./rest/v1/authenticate.api.mdx). This will return a Bearer token.
1. Use the API key & Bearer token to make requests to any other API endpoints.

## Environments

There are currently two environments available to use the API in. Both of these require a region subdomain (e.g. `us.east1`). The full URL to use will be displayed in the Komodo Integration settings.

### Staging

This is our staging site, which is available to be used for API development & testing. Please contact Komodo for an API key for the staging environment.

**URL:** https://\{region\}.stage.api.komodowellbeing.com

### Production

This is our production site. This should only be used once API development & testing has been completed. An admin user can generate an API key for the production environment via the Komodo Integration settings.

**URL:** https://\{region\}.api.komodowellbeing.com
