import { testimonial } from "../data/testimonial";
import NotificationHeader from "../utils/NotificationHeader";
import testImgOne from "../assets/images/4c.svg";
import testImgTwo from "../assets/images/5c.svg";
import testImgThree from "../assets/images/6c.svg";

const Testimonials = () => {
  const testimonialOne = testimonial[0];

  return (
    <section className='testimonial text-center w-90perc m-auto my-20 pb-12 pt-10 px-12 border-2 rounded-4xl'>
      <NotificationHeader
        name='Testimonials'
        content='Trustpilot'
        bgColor='var(--notification-btn-color-two)'
        textColor='navy'
      />
      <h1 className='text-6xl'>Trusted by thousands.</h1>
      <div className='flex justify-center items-center  m-auto px-2'>
        <button
          name='leftBtn'
          onClick={(e) => scrollTo(e)}
          className='left-arrow text-3xl font-light'
        >
          &lt;
        </button>
        <div className='w-4/5 m-auto text-center mx-4'>
          <div key={testimonialOne.id} className='py-4 w-4/5'>
            <div className='w-fit m-auto justify-center text-center py-12'>
              <div
                className='w-14 h-14 m-auto py-1 px-1 rounded-full overflow-hidden bg-white inline-block
           '
              >
                <img
                  className='rounded-full'
                  src={testimonialOne.img}
                  alt='users-img'
                />
              </div>
              <div className='grid justify-center text-center'>
                <span className='block'>{testimonialOne.name}</span>
                <span>{testimonialOne.profession}</span>
              </div>
            </div>
            <div>
              <p className='text-2xl'>{testimonialOne.testimony}</p>
            </div>
          </div>
        </div>
        <button
          name='rightBtn'
          onClick={(e) => scrollTo(e)}
          className='right-arrow text-3xl font-light'
        >
          &gt;
        </button>
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
