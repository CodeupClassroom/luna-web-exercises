function handleResponse(data) {
  console.log("All done!")
  const date = data.date
  const ip = data.ip
  const time = data.time

  $('#time').text(time)
  $('#date').text(date)
}

function handleError(error) {
  console.error("Error!")
  console.log(error)
  console.log(error.state())
}

function updateDateAndTime() {
  $.get("https://ajax-demo.zach.wiki")
    .done(handleResponse)
    .error(handleError);
}

$('#update-btn').click(updateDateAndTime);

