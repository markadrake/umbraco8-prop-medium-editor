# Medium Editor (Umbraco v8 Property Editor)

[Medium Editor](https://github.com/yabwe/medium-editor) is a rich text editor that is written in vanilla JavaScript and has no dependencies for a frontend application framework.

As a property editor for Umbraco v8, you can use this as an alternative to the TinyMCE editor provided out of the box. 

    E.g. I use this Medium Editor property editor in instances where I'd like a single line of text, but still want to allow editors to have some basic formatting opportunities (bold, italic, underline, hyperlink).

## Installation

Just copy `App_Plugins/MediumEditor` to your Umbraco installation. You should already have an `App_Plugins` directory with other folders and extensions inside. You just need to copy `MediumEditor` into this folder.

You may need to restart the Umbraco web application so it picks up on the new property editor and becomes available for you to use.

Once available, you'll see `Medium Editor` as an option for new properties.

## What's next

1. Expose more of Medium Editor's configuration as prevalues.
2. Explore why the defaultConfig does not apply when creating new data types using this editor. [See the post at Our Umbraco Forums.](https://our.umbraco.com/forum/extending-umbraco-and-using-the-api/99058-assigning-default-values-defaultconfig-for-a-custom-property-editor-doesnt-seem-to-have-any-effect)
3. Is there any reason to make this an Umbraco package?
4. Expand on the readme, add a screenshot, clear up any questions.
5. Any interest for an Umbraco v7 property editor? Maybe a v7 branch is in order?
