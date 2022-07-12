import './testimonials.scss'
import { Testimonial } from '../testimonial/Testimonial'
export const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            testimonialText: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has becomea well-oiled collaboration machine.",
            img: "./images/profile-1.jpg",
            name: "Satish Patel",
            role: "Founder & CEO, Huddle"
        },
        {
            id: 2,
            testimonialText: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has becomea well-oiled collaboration machine.",
            img: "./images/profile-2.jpg",
            name: "Bruce McKenzie",
            role: "Founder & CEO, Huddle"
        },
        {
            id: 3,
            testimonialText: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has becomea well-oiled collaboration machine.",
            img: "./images/profile-3.jpg",
            name: "Iva Boyd",
            role: "Founder & CEO, Huddle"
        }
    ]
  return (
    <div className='testimonials'>
        {testimonials.map(t =><Testimonial key={t.id} testimonial ={t} />)}
    </div>
  )
}
