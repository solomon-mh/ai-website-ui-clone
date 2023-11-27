import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pricingData } from "../data/pricingData";
import { faCheck, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";

const Pricing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("name");

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      prevParams.set(key, value);
      return prevParams;
    });
  };

  const membershipTypes = pricingData.map((pricing) => {
    return (
      <div
        key={pricing.id}
        className={`
        ${
          typeFilter == "tokenPacks" || typeFilter == "annualBilling"
            ? "hidden"
            : ""
        }
        first:border-1 mt-16 px-4 py-6 rounded-2xl`}
      >
        <button className='border-1 w-full rounded my-4'>{pricing.type}</button>
        <div className='price'>
          <div className='flex items-center justify-center'>
            <span className='text-2xl px-4 font-serif'>$</span>
            <p className='text-5xl'>{pricing.price}</p>
          </div>
          <span className='opacity-70 text-sm'>per month</span>
        </div>
        <button className='w-full font-semibold bg-gray-200 bg-opacity-70 my-4 py-3 border-1 duration-500 rounded-xl hover:bg-black hover:text-white '>
          Select {pricing.type}
        </button>
        <div className='div'>
          {pricing.resources.map((item) => {
            return (
              <div key={item} className='flex gap-6 my-2'>
                <small className='text-purple-800  border-1 py-0.5 px-1.5 rounded-full bg-purple-100 bg-opacity-80'>
                  <FontAwesomeIcon icon={faCheck} />
                </small>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <section
      id='Pricing'
      className='text-center w-90perc m-auto my-20 pb-12 pt-10 px-10 border-2 rounded-4xl'
    >
      <div className='py-4'>
        <h1 className='text-2xl md:text-6xl py-6'>Flexible Pricing.</h1>
        <p className='text-lg md:text-xl'>
          Flexible and affording plans tailored to your needs.
        </p>
      </div>
      <div className='membership-time-options border-1 rounded-xl overflow-hidden grid gap-1 md:grid-cols-3 font-semibold text-simpleLight'>
        <button
          onClick={() => handleFilterChange("name", "")}
          className={`
          ${
            typeFilter == null || typeFilter == ""
              ? "bg-white text-black rounded-lg shadow-2xl shadow-slate-900"
              : ""
          }
          py-3 w-full hover:text-black transition-all duration-300`}
        >
          Monthly Billing
        </button>
        <button
          onClick={() => handleFilterChange("name", "annualBilling")}
          className={`${
            typeFilter == "annualBilling"
              ? "bg-white text-black rounded-lg shadow-2xl shadow-slate-900"
              : ""
          } py-3 transition-all duration-300 hover:text-black`}
        >
          Annual Billing
          <span className='mx-2 px-3 py-0.5 rounded text-blue-800 bg-purple-100 '>
            Save 20%
          </span>
        </button>
        <button
          onClick={() => handleFilterChange("name", "tokenPacks")}
          className={`
          ${
            typeFilter == "tokenPacks"
              ? "bg-white text-black rounded-lg shadow-2xl shadow-slate-900"
              : ""
          }
          py-3 transition-all duration-300 w-full hover:text-black`}
        >
          Token Packs
        </button>
      </div>
      <div
        className={`
        ${typeFilter == "tokenPacks" ? "bg-red-900" : ""}
         grid gap-6 md:gap-1 md:grid-cols-3`}
      >
        {membershipTypes}
      </div>
      <div className='flex justify-center items-center mt-12 mb-6'>
        <div className='icon py-2 px-3 bg-slate-200 bg-opacity-75 rounded-xl'>
          <FontAwesomeIcon icon={faUnlockAlt} />
        </div>
        <div className='mx-6 text-left'>
          <h3 className='text-xs font-bold'>Safe Payment:</h3>
          <p className='text-xs'>Use Stripe or Credit Card.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
