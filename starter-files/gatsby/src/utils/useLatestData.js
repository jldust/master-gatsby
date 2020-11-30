import { useState, useEffect } from 'react';

export default function useLatestData() {
  // Hot slices - Pizzas
  const [hotSlices, setHotSlices] = useState();
  // Slicemasters
  const [slicemasters, setSlicemasters] = useState();
  // Use a side effect to fetcht he data from the graphql endpoint
  useEffect(function () {
    // After load, fetch data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
  StoreSettings(id: "downtown") {
    name
    slicemaster {
      name
    }
    hotSlices {
      name
    }
  }
}
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: Validate for errors
        // Set data
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      });
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}
