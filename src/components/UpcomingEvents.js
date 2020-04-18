import React from "react"
import UpcomingEventsStyles from "../styles/UpcomingEvents.module.scss"

const UpcomingEvents = () => {
  return (
    <section className={UpcomingEventsStyles.upcomingEventsSection}>
      <h2>Upcoming Events</h2>
      <div className={UpcomingEventsStyles.upcomingEventsWrapper}>
        <div className={UpcomingEventsStyles.upcomingEvent1}>
          <img
            src="https://images.unsplash.com/photo-1540295373958-75c649d3275d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
            alt=""
          />
          <div className={UpcomingEventsStyles.upcomingEventsContent}>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              molestias? Asperiores rem maiores perferendis nisi, voluptates et.
            </p>
          </div>
        </div>
        <div className={UpcomingEventsStyles.upcomingEvent2}>
          <img
            src="https://images.unsplash.com/photo-1540295373958-75c649d3275d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
            alt=""
          />
          <div className={UpcomingEventsStyles.upcomingEventsContent}>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              molestias? Asperiores rem maiores perferendis nisi, voluptates et.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
