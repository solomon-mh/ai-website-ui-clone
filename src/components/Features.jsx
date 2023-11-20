import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { features } from "../data/features";
import "../styles/component-styling.css";
const Features = () => {
  const listOfFeatures = features.map((feature) => {
    return (
      <div
        key={feature.id ? feature.id : crypto.randomUUID()}
        className='features'
      >
        <div className='feature box-border flex items-center gap-5'>
          <div className='transition-bg duration-200 feature-icon px-4 py-3 h-fit rounded-md hover:text-white hover:scale-200'>
            <FontAwesomeIcon icon={feature.icon} />
          </div>
          <div className='text-left'>
            <div className='features-name'>
              <p className='text-xl py-2 text-slate-800'>{feature.name}</p>
            </div>
            <div className='desc'>
              <p>{feature.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className='text-center  py-24 px-12'>
      <h1 className='text-5xl py-6'>The future of AI.</h1>
      <p className='w-3/4 font-semibold opacity-60  m-auto p-6 text-lg  '>
        Jibyte AI is designed to help you generate high-quality content
        instantly, without breaking a sweat.
      </p>
      <div className='grid grid-cols-3 gap-12 px-4'>{listOfFeatures}</div>
    </div>
  );
};

export default Features;
