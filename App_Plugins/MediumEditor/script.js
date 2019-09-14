angular.module("umbraco").controller("MediumEditor", function ($scope, $element, angularHelper) {

	// Default options
	// https://github.com/yabwe/medium-editor/blob/master/OPTIONS.md#core-options
	this.options = {
		disableReturn: false,
		disableDoubleReturn: false,
		disableExtraSpaces: true,
		toolbar: {
			allowMultiParagraphSelection: true,
			buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"]
		}
	};

	// If configured, set values
	if ($scope.model.config.mediumEditorConfig) {
		angular.merge(this.options, $scope.model.config.mediumEditorConfig);
	}

	// Set the editor value
	this.editorEl = $element.find(".editable")[0];
	this.editorEl.innerHTML = $scope.model.value || "";

	// Initialize the editor
	this.editor = new MediumEditor(this.editorEl, this.options);
	this.editor.subscribe("editableInput", function (event, editable) {
		event.preventDefault();
		event.stopPropagation();
		$scope.model.value = editable.innerHTML;
		angularHelper.getCurrentForm($scope).$setDirty();
	});

});