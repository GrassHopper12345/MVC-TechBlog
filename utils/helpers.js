module.exports = {
  format_date: (date) => {
    console.log(date);
    // Format date as MM/DD/YYYY
    const dates = new Date(date);
    const formatDate = `${dates.getMonth() + 1}/${dates.getDate()}/${dates.getFullYear()}`;
    const hour = dates.getHours().toString().padStart(2, '0');
    const minute = dates.getMinutes().toString().padStart(2, '0');
    const formatTime = `${hour}:${minute}`;
    console.log(formatDate);
    console.log(formatTime);
    return `${formatDate} at ${formatTime}`;
  },
};
