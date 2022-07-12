import './testimonial.scss'
export const Testimonial = ({testimonial}) => {
    console.log(testimonial)
  return (
    <div className='testimonial'>
        <p>{testimonial.testimonialText}</p>
        <div className="person">
            <img src={testimonial.img} alt={testimonial.name} />
            <div className="person-info">
                <span className="name">{testimonial.name}</span>
                <span className="company-role">{testimonial.role}</span>
            </div>
        </div>
    </div>
  )
}
