export const getQueryParamStr = (paramsObj) => {
  const searchParams = new URLSearchParams();
  
  for (const [key, val] of Object.entries(paramsObj)) {
    if (!["", undefined].includes(val)) {
      searchParams.append(key, val);
    }
  }
  return searchParams.toString();
};
