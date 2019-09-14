angular.module("umbraco").controller("MediumEditor.PrevalueEditor", function ($scope) {

    // Default options
    // https://github.com/yabwe/medium-editor/blob/master/OPTIONS.md#core-options
    $scope.options = {
        disableReturn: false,
        disableDoubleReturn: false,
        disableExtraSpaces: false,
        toolbar: {
            allowMultiParagraphSelection: true,
            buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"]
        }
    };

    // All available button types
    // https://github.com/yabwe/medium-editor/blob/master/OPTIONS.md#buttons
    $scope.buttonOptions = ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"];

    // Save the config
    $scope.model.value = $scope.options;
});