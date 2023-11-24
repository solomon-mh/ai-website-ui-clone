/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import NotificationHeader from "../utils/NotificationHeader";
import { templates } from "../data/templates";
import ShowMoreCards from "../utils/ShowMoreCards";
const CustomTemplates = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const filteredTemplate = typeFilter
    ? templates.filter(
        (template) => template.type?.toLowerCase() === typeFilter
      )
    : templates;

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
      <div className='content md:w-3/4 m-auto  py-8 text-center'>
        <h1 className='text-4xl md:text-5xl py-5 text-center'>
          Custom Templates.
        </h1>
        <p className='text-lg font-semibold'>
          To get started quickly, create your own template or utilize pre-made
          templates and samples for various content categories and sectors.
        </p>
      </div>
      <div className='template-btns text-sm w-full md:w-90perc m-auto border-1 py-2 flex flex-wrap justify-center rounded-xl'>
        <button
          className={`${typeFilter === "" ? "selected-template-btn" : ""}
          px-2.5 py-1 rounded`}
          onClick={() => setSearchParams({ type: "" })}
        >
          All
        </button>
        <button
          className={`${typeFilter === "blog" ? "selected-template-btn" : ""} 
          px-2.5 py-1 rounded`}
          onClick={() => setSearchParams({ type: "blog" })}
        >
          Blog
        </button>
        <button
          className={`${
            typeFilter === "ecommerce" ? "selected-template-btn" : ""
          }
          px-2.5 py-1 rounded`}
          onClick={() => setSearchParams({ type: "ecommerce" })}
        >
          Ecommerce
        </button>
        <button
          className={`${
            typeFilter === "development" ? "selected-template-btn" : ""
          }
          px-2.5 py-1 rounded`}
          onClick={() => setSearchParams({ type: "development" })}
        >
          Development
        </button>
        <button
          className={`${
            typeFilter === "advertisement" ? "selected-template-btn" : ""
          }
          px-2.5 py-1 rounded`}
          onClick={() => setSearchParams({ type: "advertisement" })}
        >
          Advertisement
        </button>
        <button disabled={true}>Custom</button>
        <button
          className={`${
            typeFilter === "socialmedia" ? "selected-template-btn" : ""
          }
          px-2.5 py-1 rounded`}
          onClick={() => setSearchParams({ type: "socialmedia" })}
        >
          Social Media
        </button>
        <button
          className={`${
            typeFilter === "voiceover" ? "selected-template-btn" : ""
          }
          px-2.5 py-1 rounded`}
          onClick={() => setSearchParams({ type: "voiceover" })}
        >
          Voiceover
        </button>
      </div>
      <section>
        <ShowMoreCards filteredTemplate={filteredTemplate} />
      </section>
    </div>
  );
};

export default CustomTemplates;
