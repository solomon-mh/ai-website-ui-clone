import NotificationHeader from "../utils/NotificationHeader";

const Testimonials = () => {
  return (
    <section className='text-center w-90perc m-auto my-20 pb-12 pt-10 px-12 border-2 rounded-4xl'>
      <NotificationHeader
        name='Testimonials'
        content='Trustpilot'
        bgColor='var(--notification-btn-color-two)'
        textColor='navy'
      />
      <h1 className='text-6xl'>Trusted by thousands.</h1>
    </section>
  );
};

export default Testimonials;
