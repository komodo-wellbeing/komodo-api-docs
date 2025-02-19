---
id: cube
title: Introduction
slug: /cube/
---

:::danger[Deprecated]
The Cube API is deprecated, and the [REST API](./rest/v1/komodo-rest-api.info.mdx) should be used instead.
:::

All requests made to the Cube API must include an `Authorization` header, which is set to the token returned by the authentication process ([see here](./cube-auth.mdx)).

## Cube Explained

### Dimensions

Dimensions in Cube are attributes related to the record(s) in question, e.g. id, name, description, etc.

### Measures

Measures are aggregations of data.

### Segments

Segments are predefined filters.

### Filters

Filters are ways you can filter returned query results.

### Time Dimensions

Time Dimensions can be included in a query to limit results to a specific time based on any date or time fields.

## External Links

-   [Cube REST API](https://cube.dev/docs/reference/rest-api)
-   [Cube Dimensions](https://cube.dev/docs/product/data-modeling/reference/dimensions)
-   [Cube Measures](https://cube.dev/docs/product/data-modeling/reference/measures)
-   [Cube Segments](https://cube.dev/docs/product/data-modeling/reference/segments)
-   [Cube Filters](https://cube.dev/docs/product/apis-integrations/rest-api/query-format#filters-format)
-   [Cube Time Dimensions](https://cube.dev/docs/product/apis-integrations/rest-api/query-format#time-dimensions-format)
