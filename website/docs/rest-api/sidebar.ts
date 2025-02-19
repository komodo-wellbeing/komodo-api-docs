import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "rest-api/komodo-rest-api",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "rest-api/authenticate",
          label: "Authenticate",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Check-ins",
      items: [
        {
          type: "doc",
          id: "rest-api/get-check-ins",
          label: "Get check-ins",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-check-in",
          label: "Get check-in",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Groups",
      items: [
        {
          type: "doc",
          id: "rest-api/get-groups",
          label: "Get groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-group",
          label: "Get group",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-groups-users",
          label: "Get group's users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-all-years",
          label: "Get all years",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-year",
          label: "Get year",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-years-users",
          label: "Get year's users",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Metrics",
      items: [
        {
          type: "doc",
          id: "rest-api/get-metrics",
          label: "Get metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-metric",
          label: "Get metric",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Organisations",
      items: [
        {
          type: "doc",
          id: "rest-api/get-organisation",
          label: "Get organisation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Survey Responses",
      items: [
        {
          type: "doc",
          id: "rest-api/get-user-survey-responses",
          label: "Get user survey responses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-user-survey-response",
          label: "Get user survey response",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-normalised-user-survey-responses",
          label: "Get normalised user survey responses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-normalised-user-survey-response",
          label: "Get normalised user survey response",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Survey Blueprints",
      items: [
        {
          type: "doc",
          id: "rest-api/get-survey-blueprints",
          label: "Get survey blueprints",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-survey-blueprint",
          label: "Get survey blueprint",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Survey Library",
      items: [
        {
          type: "doc",
          id: "rest-api/get-long-text-library-questions",
          label: "Get long text library questions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-long-text-library-question",
          label: "Get long text library question",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-scale-library-questions",
          label: "Get scale library questions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-scale-library-question",
          label: "Get scale library question",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "User Surveys",
      items: [
        {
          type: "doc",
          id: "rest-api/get-user-surveys",
          label: "Get user surveys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-user-survey",
          label: "Get user survey",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "rest-api/get-users",
          label: "Get users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-user",
          label: "Get user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-users-check-ins",
          label: "Get user's check-ins",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-users-groups",
          label: "Get user's groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-users-years",
          label: "Get user's years",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-users-surveys",
          label: "Get user's surveys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-users-survey-responses",
          label: "Get user's survey responses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-api/get-users-normalised-survey-responses",
          label: "Get user's normalised survey responses",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
