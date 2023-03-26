# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add Custom_Agent_ID field to the Facilities table

**Description:** Add a new field to the Facilities table to allow them to save their own agent IDs for each Agent they work with.

**Acceptance criteria:**

- A new field is added to the Facilities table to store Agent IDs.
- The new field is visible and editable in the UI.
- The new field is validated to ensure that each Custom Agent ID is unique to that Facility.

**Story Point:** 3

**Ticket Details:**

- Add a new column to the Facility's Agent table to store custom IDs.
- Modify the UI to allow Facilities to edit and save custom IDs.
- Add validation to ensure that each custom Agent ID is unique to that Facility.

### Ticket 2: Update getShiftsByFacility to include custom Agent IDs

**Description:** Update the `getShiftsByFacility` function to include custom Agent IDs in the Shift records returned to the Facility.

**Acceptance criteria:**

- The `getShiftsByFacility` function returns a list of Shifts worked by the Facility, including the custom ID of the Agent assigned to each Shift.
  **Story Point:** 2

**Ticket Details:**

- Modify the query used by the getShiftsByFacility function to include the custom Agent ID field.
- Add the custom Agent ID field to the Shift metadata returned by the getShiftsByFacility function.

### Ticket 3: Update generateReport to use custom Agent IDs###

**Description:** Update the `generateReport` function to use custom Agent IDs instead of internal database IDs when generating reports for the Facility.

**Acceptance criteria:**

- The `generateReport` function generates a PDF report for the Facility, using the custom ID of the Agent assigned to each Shift instead of the internal database ID.
  **Story Point:** 2

**Details:**

- Modify the logic used by the `generateReport` function to use the custom Agent ID instead of the internal database ID when generating the report.
- Test the updated function to ensure that the PDF report is generated correctly.
