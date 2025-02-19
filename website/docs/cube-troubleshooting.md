---
id: cube-troubleshooting
title: Troubleshooting
slug: /cube/troubleshooting/
---

:::danger[Deprecated]
The Cube API is deprecated, and the [REST API](./rest-api/komodo-rest-api.info.mdx) should be used instead.
:::

## Not enough rows returned

If you've received back less data than expected, you may be running into a limit of records being returned. Some example limits that may be applied are 10,000 & 50,000.

To avoid this, its advised to use Cube's Time Dimensions to limit the date range being queried.

## External Links

-   [Cube Filters](https://cube.dev/docs/product/apis-integrations/rest-api/query-format#filters-format)
-   [Cube Time Dimensions](https://cube.dev/docs/product/apis-integrations/rest-api/query-format#time-dimensions-format)
