1. About 4-5 hours (2-3 hours on functionality and setup - the rest on styling). If I had more time:

- I would certainly add more unit testing. Potentially test the site for any performance issues
- Add higher order components like spinners while the results are loaded.
- Error validation: The site works for happy routes but does not take into consideration empty search terms, invalid city names, limiting the search term characters etc.
- Have auto suggestions set up for the search.
- Pagination. The current app only showcases the first 25 results for a given city.
- Cache results for performance

2. React recenty added a stable version of hooks (functional components) and I have started using them extensively in everything I code as it makes the code a lot easier to read and reduces the amount of code written in order to achieve the same objective. In this particular app, I have used the 'useState' hook in on of the files. A better example of extensive use of hooks can be seen in my personal project musify - github repo link - https://github.com/punchaal/musify which has the useffect, useparams and uselocation hooks used in several places.

3. There are multiple ways to track for performance:

- Use of loggers: Typically I use a redux logger in conjunction with console logs to ensure that the component is not re-rendering multiple times.

- Profilers: In my previous job, I had used the chrome profiler to detect performance issues in the production of the app. The app used a 3rd party 3d library API that had a significant gpu usage. This clashed with the fact that we had tones of data being processed by the backend. It was eventually resolved in colloboration with the 3rd party provider by using a less graphic intensive render. The profiler is great for detecting the length of time spent by certain functions and finding bottlenecks in the code.

- Network tab in chrome can sometimes help with performance issues as well - as you can see the amount of time taken for each resource and can scope out issues from there.

4. Error validation: The API should output information to make it easier for the consumer to diagnose and fix the errors. For instance, if a number is entered into the query (using the city as params) the server responds with an empty array of restaurants when it should ideally let the user know that the input should be a string.

5.{
"first_name": "Pratik",
"last_name": "Panchal",
"nationality": "Canadian",
"passions": [
"Coding",
"Sports",
"Cooking"
],
"interests": [
"Entrepreneurship",
"Finance"
],
"believes": [
"I would be a good fit for the job and would love to chat about it!"
]
}
