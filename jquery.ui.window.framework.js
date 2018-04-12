// jQuery Window Widget Creator
function openWindow ( id, title, height, width, modal, autoOpen, resizable ) {
	var generatedWindowCode = {};
	
	if (id === undefined) {
        generatedWindowCode.id = "dialog";
    } else {
		generatedWindowCode.id = id;
	}
	if (title === undefined) {
        generatedWindowCode.title = "";
    } else {
		generatedWindowCode.title = title; 
	}
	if (height === undefined) {
        generatedWindowCode.height = "";
    } else {
		generatedWindowCode.height = height; 
	}
	if (width === undefined) {
        generatedWindowCode.width = "";
    } else {
		generatedWindowCode.width = width; 
	}
	if (modal === undefined) {
        generatedWindowCode.modal = "";
    } else {
		generatedWindowCode.modal = modal; 
	}
	if (autoOpen === undefined) {
        generatedWindowCode.autoOpen = "";
    } else {
		generatedWindowCode.autoOpen = autoOpen; 
	}
	if (resizable === undefined) {
        generatedWindowCode.resizable = "";
    } else {
		generatedWindowCode.resizable = resizable; 
	}
	
	generatedWindowCode.close = destroyWindow;
	
	$( "#" + id + "" ).dialog(generatedWindowCode);
	$('.ui-dialog :button').blur();
}

function showWindow ( id ) {
	$( "#" + id + "" ).show();
	$( "#" + id + "" ).dialog( "open" );
	$('.ui-dialog :button').blur();
}

function hideWindow ( id ) {
	$( "#" + id + "" ).dialog( "close" );
}

function destroyWindow( ui, event ) {
	var dialog = $(this).attr('id');
	$( "#" + dialog + "" ).dialog( "destroy" ).empty();
}

function loadWindow() {
	
	loadButtonStyling();

  	$( ".datePicker" ).datepicker({
	 onSelect: function(date) {
		 $(this).trigger('keyup');
	 },
	  maxDate: "+10y",
	  minDate: "-100y",
	  buttonText: "Select a date",
	  showOn: "button",
	  buttonImage: "/templates/img/blue_calendar.png",
	  buttonImageOnly: true,
	  showButtonPanel: true,
	  closeText: 'Cancel'
	});
	
	$('*[data-input-focus="true"]').focus();
}

function changeDialogSize(dialog,h,w) {
	var theElement = $('#' + dialog);
	// resize window
	if(w != -1) theElement.dialog( "option", "width", w );
	if(h != -1) theElement.dialog( "option", "height", h );
	// reposition after resize
	theElement.dialog( "option", "position", { my: "center", at: "center", of: window } );
}

function loadTimePicker() { 
	$('.timePicker').timepicker({ 
		lang:{pm:' PM', am:' AM'}
	});
}

function loadDummyTabs () {
    $( "#dummyDiv" ).tabs();
}

function loadTab() {
	$(".hideOnLoad").css("visibility","visible");
}

function loadButtonStyling() {

	$( "button" ).button();

    // add button styling
	$('.addButton').button( "option", "icons", { primary: "ui-icon-circle-plus" } );
	// submit button styling
	$('.submitButton').button( "option", "icons", { primary: "ui-icon-circle-check" } );
	// cancel button styling
	$('.cancelButton').button( "option", "icons", { primary: "ui-icon-circle-close" } );
	// delete button styling
	$('.deleteButton').button( "option", "icons", { primary: "ui-icon-trash" } );
	// back button styling
	$('.backButton').button( "option", "icons", { primary: "ui-icon-circle-triangle-w" } );
	// switch button styling
	$('.switchButton').button( "option", "icons", { primary: "ui-icon-transferthick-e-w" } );
	// reset button styling
	$('.resetButton').button( "option", "icons", { primary: "ui-icon-seek-first" } );
	// report button styling
	$('.reportButton').button( "option", "icons", { primary: "ui-icon-clipboard" } );
	// play button styling
	$('.playButton').button( "option", "icons", { primary: "ui-icon-play" } );
	// script button styling
	$('.scriptButton').button( "option", "icons", { primary: "ui-icon-script" } );
	// gear button styling
	$('.gearButton').button( "option", "icons", { primary: "ui-icon-gear" } );
	// wrench button styling
	$('.wrenchButton').button( "option", "icons", { primary: "ui-icon-wrench" } );
}