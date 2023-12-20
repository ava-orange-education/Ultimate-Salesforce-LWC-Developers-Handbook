public with sharing class simpleApexClass {
    @AuraEnabled(cacheable=false)
    public static List<Account> getAllAccounts() {
        return [SELECT Id, Name, Phone FROM Account];
    }
}