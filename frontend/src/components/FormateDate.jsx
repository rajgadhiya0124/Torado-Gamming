import React from 'react'

const FormateDate = (dateString) => {

    const date = new Date(dateString);

    const day = date.toLocaleString("en-GB",{day: "2-digit"});
    const month = date.toLocaleString("en-GB", {month:"long"})
    const year = date.getFullYear();

  return `${day} ${month}, ${year}`
}

export default FormateDate;
