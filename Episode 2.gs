function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Episode 2 Web App');
}

function includeExternalFile(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function addNameToDatabase(name) {
  const lock = LockService.getScriptLock();
  console.log(new Date());
  lock.tryLock(10000);
  console.log(new Date());
  if (lock.hasLock()) {
    const spreadsheet = SpreadsheetApp.openById('1t3DZJLoXYHPuCfgfhcAwxrbZpA4VbPIYKyNOPcTpn_U');
    const sheet = spreadsheet.getSheetByName('Sheet1');
    const lastRow = sheet.getLastRow();
  
    // Simulating calculations and/or network calls which last for 3 seconds
    Utilities.sleep(3000);
  
    sheet.getRange(lastRow + 1, 1, 1, 2).setValues([[name, new Date()]]);
    lock.releaseLock();
  }
}
