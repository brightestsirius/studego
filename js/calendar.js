(function ($) {
    $(document).ready(function() {
        var nowDate = new Date();
        var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

        var FromEndDate = new Date();
        var ToEndDate = new Date();
        ToEndDate.setDate(ToEndDate.getDate() + 365);

        $('.data-start').datepicker({
                numberOfMonths: 12,
                startDate: today,
                endDate: ToEndDate
            })
            .on('changeDate', function (selected) {
                startDate = new Date(selected.date.valueOf());
                startDate.setDate(startDate.getDate(new Date(selected.date.valueOf())));
                $('.data-end').datepicker('setStartDate', startDate);
            });
        $('.data-end')
            .datepicker({
                numberOfMonths: 12,
                startDate: today
            })
            .on('changeDate', function (selected) {
                FromEndDate = new Date(selected.date.valueOf());
                FromEndDate.setDate(FromEndDate.getDate(new Date(selected.date.valueOf())));
                $('.data-start').datepicker('setEndDate', FromEndDate);

                var FromEndDate = new Date();
                var ToEndDate = new Date();
                ToEndDate.setDate(ToEndDate.getDate());
            })
    })
}(jQuery));