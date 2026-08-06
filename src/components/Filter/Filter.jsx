import { useState } from "react";
import styles from "./Filter.module.css";

//style to rotate svg when clicked
const rotate = {
  transform: "rotate(180deg)",
};

function Filter({
  uniqueCategories,
  maxPrice,
  minPrice,
  category,
  storeSelectedCategories,
  priceRange,
  handleClearingCatFilters,
  updateSearchParams,
}) {
  //using state to toggle collapsing each filter
  const [isCatFilterShown, setIsCatFilterShown] = useState(true);
  const [isPriceFilterShown, setIsPriceFilterShown] = useState(true);

  function collapseCatFilters() {
    setIsCatFilterShown(() => !isCatFilterShown);
  }
  function collapsePriceFilters() {
    setIsPriceFilterShown(() => !isPriceFilterShown);
  }

  return (
    <div className={styles.filterLayout}>
      <h2 className={styles.header}>filter by:</h2>
      <div>
        <div className={styles.filterTitle}>
          <h4>category</h4>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="button"
            onClick={collapseCatFilters}
            style={isCatFilterShown ? null : rotate}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
        </div>

        <div className={styles.filterBox}>
          {isCatFilterShown && category.length > 0 && (
            <div role="button" onClick={handleClearingCatFilters}>
              {" "}
              &#10799; clear category filters
            </div>
          )}
          {isCatFilterShown &&
            uniqueCategories.map((cat) => (
              <div key={cat}>
                <input
                  type="checkbox"
                  name={cat}
                  value={cat}
                  checked={category.includes(cat)}
                  onChange={() => storeSelectedCategories(cat)}
                />
                <label> {cat}</label>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className={styles.filterTitle}>
          <h4>Price</h4>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="button"
            onClick={collapsePriceFilters}
            style={isPriceFilterShown ? null : rotate}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
        </div>
        {isPriceFilterShown && (
          <div>
            <div>
              {priceRange === maxPrice
                ? "all ranges"
                : priceRange + "$ or less"}
            </div>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              step={5}
              value={priceRange ? priceRange : maxPrice}
              onChange={(e) => {
                updateSearchParams({
                  maxPrice: e.target.value,
                  page: 1,
                });
              }}
            />
            <div className={styles.priceRange}>
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
