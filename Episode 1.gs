function myFunction() {
  Logger.log(LockService.getScriptLock());
  Logger.log(LockService.getDocumentLock());
  Logger.log(LockService.getUserLock());
}
