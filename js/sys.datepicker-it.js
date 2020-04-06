/* global moment */

$.date_picker.setDefaults({
	monthNames: [ "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre" ],
	dayNamesMin: [ "Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa" ],
	firstDay: 1,
	prevYearText: '<i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i>',
	prevText: '<i class="fa fa-chevron-left"></i>',
	currentText: 'oggi',
	nextText: '<i class="fa fa-chevron-right"></i>',
	nextYearText: '<i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i>',
	convertISOToDisplayDate: function (isoDate) {
		var day = moment(isoDate);
		return day.isValid() ? day.format("DD/MM/YYYY") : moment().format("DD/MM/YYYY");
	},
	convertDisplayDateToISO: function (displayDate) {
		var day = moment(displayDate, "DD/MM/YYYY");
		return day.isValid() ? day.format("YYYY-MM-DD") : moment().format("YYYY-MM-DD");
	}
});
