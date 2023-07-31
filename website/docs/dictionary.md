---
id: dictionary
title: Data Dictionary
slug: /dictionary/
---

## Organisation

An "Organisation" represents a school or any other institution that uses Komodo.

### _Relationships_

-   Organisations have 0-N [Groups](#groups)
-   Organisations have 0-N [Students](#student)
-   Organisations have 0-N [Years](#years)

## Student

A "Student" represents a student that an [Organisation](#organisation) has.

### _Relationships_

-   Students belong to 1 [Organisation](#organisation)
-   Students belong to 0-N [Groups](#group)
-   Students belong to 0-N [Years](#year)
-   Students have 0-N [Normalised Survey Responses](#normalised-survey-response)

## Group

A "Group" represents a grouping of [Students](#student) that an [Organisation](#organisation) has, e.g. a school house.

### _Relationships_

-   Groups belong to 1 [Organisation](#organisation)
-   Groups have 0-N [Students](#student)

## Year

A "Year" represents a year grouping of [Students](#student) that an [Organisation](#organisation) has, e.g. 1st year, 2nd year.

### _Relationships_

-   Years belong to 1 [Organisation](#organisation)
-   Groups have 0-N [Students](#student)

## Metric

A "Metric" represents a metric that may be associated with a given [Survey Library Question](#survey-library-question), e.g. Homesickness, School Workload.

### _Relationships_

-   Metrics belong to 1 [Metric Theme](#metric-theme)
-   Metrics have 0-N [Survey Library Questions](#survey-library-question)
-   Metrics have 0-N [Normalised Survey Responses](#normalised-survey-response)

## Metric Theme

A "Metric Theme" represents a grouping of [Metrics](#metric), e.g. Achievement & Learning, Emotional Wellbeing.

### _Relationships_

-   Metric Themes have 0-N [Metrics](#metric)

## Survey Library Question

A "Survey Library Question" represents a survey question that is set up in Komodo, e.g. "I enjoy learning at school".

### _Relationships_

-   Survey Library Questions belong to 1 [Metric](#metric)

## Normalised Survey Response

A "Normalised Survey Response" represents a [Student's](#student) responses to a survey, aggregated by the relevant metric(s).

### _Example_

If a [Student](#student) responded to a survey on June 15th with 3 questions associated with the Happiness [Metric](#metric), 1 Normalised Survey Response
record would be created for Happiness. That record would contain the average score of those 3 questions.

### _Relationships_

-   Normalised Survey Responses belong to 1 [Metric](#metric)
-   Normalised Survey Responses belong to 1 [Student](#student)
