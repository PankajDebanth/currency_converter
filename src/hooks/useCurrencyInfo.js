import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("API Response:", res.rates); // Log the full API response
        if (res.rates) {
          setData(res.rates); // Store the rates in the state
        } else {
          setData(null); // Handle the case where rates are not available
        }
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
