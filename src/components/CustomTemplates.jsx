import { useSearchParams } from "react-router-dom";
import NotificationHeader from "../utils/NotificationHeader";
import { templates } from "../data/templates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CustomTemplates = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const filteredTemplate = typeFilter
    ? templates.filter(
        (template) => template.type?.toLowerCase() === typeFilter
      )
    : templates;
  console.log(filteredTemplate);
  const temps = filteredTemplate.map((template) => {
    return (
      <div
        key={template.id}
        className='template-card border-1 pt-8 pb-2 rounded-xl px-4 text-left bg-slate-200 bg-opacity-40'
      >
        <div className='template-icon text-xl py-2 mx-6 px-4 border-1 w-fit bg-gray-300 rounded-lg transition-all duration-300'>
          <FontAwesomeIcon icon={template.icon} />
        </div>
        <h2 className='text-xl font-semibold text-black py-2'>
          {template.title}
        </h2>
        <p className='text-sm pb-2'>{template.content}</p>
      </div>
    );
  });
  return (
    <div>
      <div className='btn'>
        <NotificationHeader
          name='Custom'
          content='Prompts'
          bgColor='var(--notification-btn-color-two)'
          textColor='navy'
        />
      </div>
      <div className='content w-3/4 m-auto px-10 py-8 text-justify'>
        <h1 className='text-5xl py-5 text-center'>Custom Templates.</h1>
        <p className='text-lg font-semibold'>
          To get started quickly, create your own template or utilize pre-made
          templates and samples for various content categories and sectors.
        </p>
      </div>
      <div className='template-btns text-sm w-4/5 m-auto border-1 py-2 px-3 flex justify-around rounded-xl'>
        <button
          className={`${typeFilter === "" ? "selected-template-btn" : ""}`}
          onClick={() => setSearchParams({ type: "" })}
        >
          All
        </button>
        <button
          className={`${typeFilter === "blog" ? "selected-template-btn" : ""}`}
          onClick={() => setSearchParams({ type: "blog" })}
        >
          Blog
        </button>
        <button
          className={`${
            typeFilter === "ecommerce" ? "selected-template-btn" : ""
          }`}
          onClick={() => setSearchParams({ type: "ecommerce" })}
        >
          Ecommerce
        </button>
        <button
          className={`${
            typeFilter === "development" ? "selected-template-btn" : ""
          }`}
          onClick={() => setSearchParams({ type: "development" })}
        >
          Development
        </button>
        <button
          className={`${
            typeFilter === "advertisement" ? "selected-template-btn" : ""
          }`}
          onClick={() => setSearchParams({ type: "advertisement" })}
        >
          Advertisement
        </button>
        <button disabled={true} onClick={() => setSearchParams({ type: "" })}>
          Custom
        </button>
        <button
          className={`${
            typeFilter === "socialmedia" ? "selected-template-btn" : ""
          }`}
          onClick={() => setSearchParams({ type: "socialmedia" })}
        >
          Social Media
        </button>
        <button
          className={`${
            typeFilter === "voiceover" ? "selected-template-btn" : ""
          }`}
          onClick={() => setSearchParams({ type: "voiceover" })}
        >
          Voiceover
        </button>
      </div>
      <div className='grid grid-cols-3 gap-4 my-8'>{temps}</div>
    </div>
  );
};

export default CustomTemplates;
