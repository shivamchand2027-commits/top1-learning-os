function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('The Top 1% Learning OS')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
