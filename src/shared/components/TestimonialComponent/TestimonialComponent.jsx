import React from "react";
import { Avatar, Carousel } from "antd";
import "./testimonial.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    },
    {
      name: "Jane Smith",
      text: "Nulla ac purus ut est sagittis ullamcorper non ut nisi.",
      imageSrc:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    },
    {
      name: "Bob Johnson",
      text: "Pellentesque eget justo sit amet mauris laoreet feugiat vel a dui.",
      imageSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <Carousel autoplay className="background">
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <Avatar
            src={testimonial.imageSrc}
            alt={testimonial.name}
            size={200}
          />
          <h3 className="text-white text-3xl mt-3 name">{testimonial.name}</h3>
          <p className="text-white text-3xl mt-3 name">{testimonial.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
