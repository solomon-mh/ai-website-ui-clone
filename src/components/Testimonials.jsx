import { testimonial } from "../data/testimonial";
import NotificationHeader from "../utils/NotificationHeader";
import testImgOne from "../assets/images/4c.svg";
import testImgTwo from "../assets/images/5c.svg";
import testImgThree from "../assets/images/6c.svg";
import { useState } from "react";

const Testimonials = () => {
  const usersTestimonial = testimonial.map(
    (individualTestimony) => individualTestimony
  );
  const [currentTestimony, setCurrentTestimony] = useState(0);

  const handleBtnClick = (direction) => {
    const totalTestimonials = usersTestimonial.length;
    if (direction === "left") {
      setCurrentTestimony(
        (prev) => (prev - 1 + totalTestimonials) % totalTestimonials
      );
    } else if (direction === "right") {
      setCurrentTestimony((prev) => (prev + 1) % totalTestimonials);
    }
  };

  return (
    <section
      id='Testimonial'
      className='testimonial text-center w-90perc m-auto my-20 pb-12 pt-10 px-12 border-2 rounded-4xl'
    >
      <NotificationHeader
        name='Testimonials'
        content='Trustpilot'
        bgColor='var(--notification-btn-color-two)'
        textColor='navy'
      />
      <h1 className='text-6xl'>Trusted by thousands.</h1>
      <div className='flex justify-center items-center m-auto py-8'>
        <div className='w-full py-4'>
          <div>
            <div className='flex justify-center gap-4 py-3'>
              <div className='w-12 h-12'>
                <img
                  className='rounded-full'
                  src={
                    usersTestimonial[
                      (currentTestimony - 1 + usersTestimonial.length) %
                        usersTestimonial.length
                    ].img
                  }
                  alt='users-img'
                />
              </div>
              <div className='w-16 h-16 bg-green-500 p-1 rounded-full relative -top-6'>
                <img
                  className='rounded-full'
                  src={usersTestimonial[currentTestimony].img}
                  alt='users-img'
                />
              </div>
              <div className='w-12 h-12'>
                <img
                  className='rounded-full'
                  src={
                    usersTestimonial[
                      (currentTestimony + 1) % usersTestimonial.length
                    ].img
                  }
                  alt='users-img'
                />
              </div>
            </div>
            <div className='text-sm'>
              <span className='block'>
                {usersTestimonial[currentTestimony].name}
              </span>
              <span className='opacity-40'>
                {usersTestimonial[currentTestimony].profession}
              </span>
            </div>
          </div>
          <div className='content flex justify-between items-center md:px-8 py-4'>
            <button
              onClick={() => handleBtnClick("left")}
              name='leftBtn'
              className='left-arrow text-3xl font-semibold'
            >
              &lt;
            </button>
            <div>
              <p className='text-sm px-2 md:text-2xl font-semibold md:w-4/5 m-auto'>
                <q>
                  As a/an{" "}
                  <span className='text-red-800'>
                    {usersTestimonial[currentTestimony].profession}{" "}
                  </span>
                  {usersTestimonial[currentTestimony].testimony}
                </q>
              </p>
            </div>
            <button
              onClick={() => handleBtnClick("right")}
              name='rightBtn'
              className='right-arrow text-3xl font-semibold'
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className='imgs py-8 flex justify-center gap-12'>
        <img src={testImgOne} alt='' />
        <img src={testImgTwo} alt='' />
        <img src={testImgThree} alt='' />
      </div>
    </section>
  );
};

export default Testimonials;
