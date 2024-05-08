const ParseShopifyProduct = (
  data: {
    title: any;
    description: any;
    priceRange: { minVariantPrice: { amount: any } };
    vendor: any;
    images: { edges: { node: { originalSrc: any } }[] };
  }[]
) => {
  // Initialize an empty array to store the transformed items
  const transformed: {
    title: any;
    description: any;
    price: any;
    founder: any;
    image: any;
  }[] = [];

  // Iterate over each item in the "result" array
  if (data.length > 0) {
    data.forEach(
      (item: {
        title: any;
        description: any;
        priceRange: { minVariantPrice: { amount: any } };
        vendor: any;
        images: { edges: { node: { originalSrc: any } }[] };
      }) => {
        // Create an object with the required fields
        const transformedItem = {
          title: item.title || "",
          description: item.description || "",
          price: item.priceRange?.minVariantPrice?.amount || "0",
          founder: item.vendor || "",
          image: item.images?.edges[0]?.node?.originalSrc || "",
        };

        // Append the transformed object to the array
        transformed.push(transformedItem);
      }
    );
  }

  return transformed;
};

export default ParseShopifyProduct;
