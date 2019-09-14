angular.module("umbraco").controller("MediumEditor", function ($scope, $element, angularHelper) {

	// Default options
	this.toolbarOptions = {
		allowMultiParagraphSelection: false,
		buttons: ["bold", "italic", "underline", "anchor"]
	};

	this.options = {
		disableReturn: true,
		disableDoubleReturn: true,
		disableExtraSpaces: true,
		toolbar: this.toolbarOptions
	};

	// If configured, set values
	if($scope.model.config) {
		var config = $scope.model.config;
		if(config.disableReturn)
			this.options.disableReturn = Object.toBoolean(config.disableReturn);
		if(config.disableDoubleReturn)
			this.options.disableDoubleReturn = Object.toBoolean(config.disableDoubleReturn);
		if(config.disableExtraSpaces)
			this.options.disableExtraSpaces = Object.toBoolean(config.disableExtraSpaces);
		if(config.allowMultiParagraphSelection)
			this.toolbarOptions.allowMultiParagraphSelection = Object.toBoolean(config.allowMultiParagraphSelection);
	}

	// Set the editor value
	this.editorEl = $element.find(".editable")[0];
	this.editorEl.innerHTML = $scope.model.value || "";

	// Initialize the editor
	this.editor = new MediumEditor(this.editorEl, this.options);
	this.editor.subscribe("editableInput", function (event, editable) {
		$scope.model.value = editable.innerHTML;
		angularHelper.getCurrentForm($scope).$setDirty();
	});

});