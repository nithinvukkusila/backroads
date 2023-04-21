import React from 'react'
import { Title } from './Title'
import { tours } from '../data'

export const Tours = () => {
  return (
    
    <section className="section" id="tours">
      <Title title="Featured" subTitle="Tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return   <article key={tour.id} className="tour-card">
          <div className="tour-img-container">
            <img src={tour.image} className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2020</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tour.location}
              </p>
              <p>{tour.duration}</p>
              <p>from {tour.price}</p>
            </div>
          </div>
        </article>

        })}

    
      </div>
    </section>

  )
}
