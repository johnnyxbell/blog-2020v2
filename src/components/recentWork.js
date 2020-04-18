import React from "react"
import RecentWorkStyles from "../styles/RecentWork.module.scss"

const RecentWork = () => {
  return (
    <section className={RecentWorkStyles.recentWorkSection}>
      <h2>Recent Work</h2>
      <div className={RecentWorkStyles.recentWorkWrapper}>
        <div className={RecentWorkStyles.recentWork1}>
          <img
            src="https://images.unsplash.com/photo-1540295373958-75c649d3275d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
            alt=""
          />
          <div className={RecentWorkStyles.recentWorkContent}>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              molestias? Asperiores rem maiores perferendis nisi, voluptates et.
            </p>
          </div>
        </div>
        <div className={RecentWorkStyles.recentWork2}>
          <img
            src="https://images.unsplash.com/photo-1540295373958-75c649d3275d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
            alt=""
          />
          <div className={RecentWorkStyles.recentWorkContent}>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              molestias? Asperiores rem maiores perferendis nisi, voluptates et.
            </p>
          </div>
        </div>
        <div className={RecentWorkStyles.recentWork3}>
          <img
            src="https://images.unsplash.com/photo-1540295373958-75c649d3275d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
            alt=""
          />
          <div className={RecentWorkStyles.recentWorkContent}>
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

export default RecentWork
