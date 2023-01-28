import React from 'react'
import './style.scss'

const BookTable = () => {
  return (
    <section className='container booking'>
        <div className='book-content'>
            <p className='book-reser'>Reservation</p>
            <p className='book-name'>BOOK TABLE</p>
            <form className='book-form'>
                <div className='form-part'>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />
                </div>
                <div className='form-part'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Name'/>
                </div>
                <div className='form-part'>
                    <label htmlFor="time">Time</label>
                    <input type="time" name="time" id="time" />
                </div>
                <div className='form-part'>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" placeholder='Phone'/>
                </div>
                <div className='form-part'>
                    <label htmlFor="people">People</label>
                    <input type="text" name="people" id="people" placeholder='People'/>
                </div>
                <div className='form-part'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder='Email'/>
                </div>
            </form>
        </div>
        <div className='book-right'>
            <img src="/assets/img/booking.jpg" alt="book" />
        </div>
    </section>
  )
}

export default BookTable