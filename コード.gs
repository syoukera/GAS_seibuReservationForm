// 予定の登録先となるカレンダーのID
var CALID = "4809fe4a42ca6234e1fa8bc8eb7d40224ff42ec4d358cb902cfb4490ecb83f9b@group.calendar.google.com";

// Googleフォームが送信された時に実行される関数
function onSubmit(e) {

  // Googleフォームの回答を取得する
  const itemResponses = e.response.getItemResponses();

  // 団体名
  const community_name = itemResponses[1].getResponse();

  // 開始日
  const start_date = itemResponses[2].getResponse();

  // 終了日
  const end_date = itemResponses[4].getResponse();

  for (var i = 0; i < itemResponses.length; i++) {
    Logger.log(i + itemResponses[i].getResponse())
  }

  // カレンダーに予定を追加する
  var cal = CalendarApp.getCalendarById(CALID);
  cal.createEvent(community_name, new Date(start_date), new Date(end_date));
  Logger.log('Shedule is created, name' + community_name + 'date: ' + start_date + end_date)
}

function test_createEvent() {
  // カレンダーに予定を追加する
  // var CALID = "4809fe4a42ca6234e1fa8bc8eb7d40224ff42ec4d358cb902cfb4490ecb83f9b@group.calendar.google.com";
  const cal = CalendarApp.getCalendarById(CALID);
  cal.createEvent('Shcedule from script', new Date('2023-01-25'), new Date('2023-01-26'));
}