var fs = require("fs");

const mergeValues = (values, content) => {
	//Cycles over values keys
	for(let key in values)
		//replace all {{key}} with values from value obj
		content = content.replace(`{{${key}}}`, values[key]);
	//return merged conent
		return content;

}

const view = (templateName, values, response) => {
	//read from template files
	let fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: "utf8"});
		//insert values into content
		fileContents = mergeValues(values, fileContents);
		//write out contents to the response
		response.write(fileContents);
}

module.exports.view = view;