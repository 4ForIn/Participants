export function getDateFn() {
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: true,
  };
  const onlyNumbers = new Intl.DateTimeFormat().format(date);
  const fullLongDate = new Intl.DateTimeFormat('default', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);
  const fullShortDate = new Intl.DateTimeFormat('default', options).format(date);
  return [onlyNumbers, fullShortDate, fullLongDate];
}

/* 
  console.log(getDateFn()[2].replace(/\s+/g, ''));
  */
