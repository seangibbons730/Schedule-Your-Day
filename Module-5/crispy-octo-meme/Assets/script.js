let mainEl = document.querySelector(".main");
let workDay = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];
let workTime = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

$(function () {
  let workEl = $(".main");
  let timeNow = dayjs().hour(); 
  console.log("The appx. time right now is " + timeNow);
  for (let i = 0; i < workTime.length; i++) {
    let newWork = $("<div>");
    let timeBlock = $("<div>");
    newWork.addClass("col-2 col-md-1 hour text-center py-3");
    timeBlock.append(newWork);
    timeBlock.attr("id", "hour-" + workTime[i]);
    if (workTime[i] < timeNow) {
      timeBlock.addClass("row time-block past");
    } else if (workTime[i] > timeNow) {
      timeBlock.addClass("row time-block future");
      console.log("time workDay " + workDay[i]);
    } else if (timeNow === workTime[i]) {
      timeBlock.addClass("row time-block present");
    }
    workEl.append(timeBlock);
    newWork.text(workDay[i]);
    let addWork = $("<textarea>");
    addWork.addClass("col-8 col-md-10 description row-3");
    timeBlock.append(addWork);
    let newButton = $("<button>");
    newButton.addClass("btn saveBtn col-2 col-md-1");
    newButton.attr("id", "save");
    let textButton = $("<i>");
    textButton.addClass("fas fa-save");
    newButton.append(textButton);
    timeBlock.append(newButton);
    newButton.on("click", function () {
      console.log("addWork " + addWork.val());
      localStorage.setItem(workDay[i], addWork.val());
      localStorage.getItem(workDay[i]);
    });
  }
  $(".hour").each(function () {
    console.log($(this).text()); 
    $(this)
      .siblings(".description")
      .val(localStorage.getItem($(this).text()));
  });
});