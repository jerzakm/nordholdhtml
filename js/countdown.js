    var end = new Date('05/20/2018 12:00 PM');

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById('countdown_d').innerHTML = 0;
                document.getElementById('countdown_h').innerHTML = 0;
                document.getElementById('countdown_m').innerHTML = 0 ;

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById('countdown_d').innerHTML = days;
            document.getElementById('countdown_h').innerHTML = hours;
            document.getElementById('countdown_m').innerHTML = minutes ;
        }

        timer = setInterval(showRemaining, 1000);