# WorkDayScheduler Project


## The Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## How To Use

<ul>
    <li>The calendar is make to represent a typical workday. In this case, it runs from 8 am to 5 pm</li>
    <li>The day is show in hourly blocks of time</li>
    <li>Each block is color coordinated to show the user whether the event has past, is happening, or is going to happpen (Past = Grey, Present = Red, Future = Green</li>
    <li>Once the user enters an event, a save button can be clicked to store this event in the calender</li>
    <li>Events are saved to local storage. When the webpage is refreshed, the events also remain in place</li>
</ul>


## Acknowledgements

<ul>
    <li><a href = "https://momentjs.com/" rel="momentjs">Moment.js</a></li>
    <li><a href = "https://getboostrap.com/" rel="boostrap">Boostrap</a></li>
</ul>
