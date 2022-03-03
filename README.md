This technical challenge is a simplified React frontend based on what is currently in use at ALTR.

The local dev server can be run by executing `npm run serve` in this directory and going to "http://localhost:8080/" in your browser.
Tests can be run using `npm run test`.

Please complete the following tasks and send the modified files back to ALTR.

1. Get app running. (done)
2. Implement error handling for the API call on the Users page. Modify it such that the API call fails or appears to fail 50% of the time.
-  randomnumber generastor for the failing or not
3. Create a new page and add a navigation button for it. In the new page, prototype a component that references mocked data and a stubbed endpoint. The component should display some example users and the stubbed endpoint should simulate changing enabling and disabling their accounts. (done)
- set a state for disabled, based on the unique id
-  use the user page and have it do the same thing
4. Add a form to the NPM Modules page using Yup and Formik. The form should push submitted values to that component's state so they appear in the table. (done)
- dynamic state rendering, use effect on updated state
5. Update and write additional unit tests for the UserCard component using Jest that ensures the component fails to render when the any of the required props or their properties are missing or incorrect (done).
-
Thank you!

Change Log
- installed modules, ran npm audir fix
- installed formik
- npm run serve failed, found superagent missing from dependencies
- changes header import to find module (got rid of brackets)
- added state for api call
- made changes to getRandomUsers FC to handle failure or passing api call
- created a new route
- created a new page, intially copied the dashboard page
