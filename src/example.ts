
import { Calendar } from 'fullcalendar';

document.addEventListener('DOMContentLoaded', function() { // page is now ready...

  var calendarEl:HTMLElement = <HTMLElement> document.getElementById('calendar'); // grab element reference

  var calendar = new Calendar(calendarEl, {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultView: 'agendaWeek',
    defaultDate: '2018-01-12',
    navLinks: true, // can click day/week names to navigate views
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    eventRender: function(info:any) {
      console.log('title : ' + info.event.title);
      console.log('el : ' + info.el);
      console.log('view : ' + info.view);
      console.log('isStart : ' + info.isStart);
      console.log('isEnd : ' + info.isEnd);
      console.log('isMirror : ' + info.isMirror);
    },
    events: [
      {
        title: 'All Day Event',
        start: '2018-01-01',
      },
      {
        title: 'Long Event',
        start: '2018-01-07',
        end: '2018-01-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-01-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-01-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-01-11',
        end: '2018-01-13'
      },
      {
        title: 'Meeting',
        start: '2018-01-12T10:30:00',
        end: '2018-01-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2018-01-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2018-01-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2018-01-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2018-01-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2018-01-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-01-28'
      }
    ],
    plugins: []
  });

  calendar.render();

});

