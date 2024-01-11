module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      const date = new Date(date);
      const formatDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
      const hour = date.getHours().toString().padStart(2, '0');
      const minute = date.getMinutes().toString().padStart(2, '0');
      const second = date.getSeconds().toString().padStart(2, '0');
      const formatTime = `${hour}:${minute}:${second}`;
      return `${formatDate} at ${formatTime}`;
    },
  };