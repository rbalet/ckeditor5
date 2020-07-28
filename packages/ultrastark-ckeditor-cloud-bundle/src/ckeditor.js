/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";

class ModalEditor extends ClassicEditorBase {}
class LetterEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ModalEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	TextTransformation,
];

LetterEditor.builtinPlugins = [
	Essentials,
	Heading,
	Autoformat,
	FontColor,
	Bold,
	Italic,
	BlockQuote,
	Indent,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
];

// Editor configuration.
ModalEditor.defaultConfig = {
	toolbar: {
		items: [
			"undo",
			"redo",
			"|",
			"bold",
			"italic",
			"|",
			"bulletedList",
			"numberedList",
			"|",
			"link",
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};
LetterEditor.defaultConfig = {
	toolbar: {
		items: [
			"undo",
			"redo",
			"|",
			"heading",
			"|",
			"bold",
			"italic",
			"fontColor",
			"|",
			"bulletedList",
			"numberedList",
			"indent",
			"outdent",
			"|",
			"insertTable",
			"blockQuote",
		],
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};

export default {
	ModalEditor,
	LetterEditor,
};
