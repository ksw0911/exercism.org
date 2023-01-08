var gs =1e12;
export const gigasecond = (date) => {
  let data = new Date(date.getTime() +gs);
    return data;
  };