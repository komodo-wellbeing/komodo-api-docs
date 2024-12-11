---
id: dictionary
title: Data Dictionary
slug: /dictionary/
---

## Organisation

An "Organisation" represents a school or any other institution that uses Komodo.

### _Relationships_

-   Organisations have 0-N [Groups](#group)
-   Organisations have 0-N [Students](#student)
-   Organisations have 0-N [Years](#year)
-   Organisations have 0-N [Survey Blueprints](#survey-blueprint)

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

## Survey Library Question Answer

A "Survey Library Question Answer" represents a survey question's possible answers, e.g. "Agree", "Strongly Agree".

### _Relationships_

-   Survey Library Question Answers belong to 1 [Survey Library Question](#survey-library-question)
-   Survey Library Question Answers have 0-N [Survey Responses](#survey-response)

## Survey Blueprint

A "Survey Blueprint" represents a survey that an [Organisation](#organisation) has set up in Komodo.

### _Relationships_

-   Survey Blueprints belong to 1 [Organisation](#organisation)
-   Survey Blueprints have 0-N [Surveys](#survey)

## Survey Blueprint Question

A "Survey Blueprint Questions" represents a [Survey Library Question](#survey-library-question) that has been added to a [Survey Blueprint](#survey-blueprint).

### _Relationships_

-   Survey Blueprint Questions belong to 1 [Survey Blueprint](#survey-blueprint)
-   Survey Blueprint Questions belong to 1 [Survey Library Question](#survey-library-question)
-   Survey Blueprint Questions have 0-N [Survey Responses](#survey-response)

## Survey

A "Survey" represents a [Student's](#student) requirement to complete a [Survey Blueprint](#survey-blueprint) between during a specific date range.

### _Relationships_

-   Surveys belong to 1 [Student](#student)
-   Surveys belong to 1 [Survey Blueprint](#survey-blueprint)

## Survey Response

A "Survey Response" represents a [Student's](#student) response to a survey question for a specific [Question](#survey-blueprint-question) in a specific [Survey](#survey).

### _Relationships_

-   Survey Responses belong to 1 [Student](#student)
-   Survey Responses belong to 1 [Survey](#survey)
-   Survey Responses belong to 1 [Survey Blueprint Question](#survey-blueprint-question)
-   Survey Responses belong to 1 [Survey Library Question Answer](#survey-library-question-answer)

## Normalised Survey Response

A "Normalised Survey Response" represents a [Student's](#student) responses to a survey, aggregated by the relevant metric(s).

### _Example_

If a [Student](#student) responded to a survey on June 15th with 3 questions associated with the Happiness [Metric](#metric), 1 Normalised Survey Response
record would be created for Happiness. That record would contain the average score of those 3 questions.

### _Relationships_

-   Normalised Survey Responses belong to 1 [Metric](#metric)
-   Normalised Survey Responses belong to 1 [Student](#student)
-   Normalised Survey Responses belong to 1 [Survey](#survey)

## Check-in

A "Check-in" represents a student either requesting a check-in with a staff member, or a check-in automatically generated based on their recent survey responses.

### _Examples_

#### Generated check-in

If a [Student](#student) responded with a low score for the Happiness [Metric](#metric) in their most recent 3 surveys, a check-in would be generated to let staff know to talk to the student.

#### Requested check-in

A [Student](#student) is able to request a check-in with one or more staff members, letting them know they need somebody to talk to.

### _Relationships_

-   Check-ins belong to 1 [Student](#student)

## Check-in Follow Up

A "Check-in Follow up" represents a staff member recording that they have talked to a student regarding a given [Check-in](#check-in).

### _Relationships_

-   Check-in follow ups belong to 1 [Check-in](#check-in)
