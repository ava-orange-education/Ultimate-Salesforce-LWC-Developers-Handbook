public with sharing class simpleApexClass2 {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts() {
        return [SELECT Id, Name, Phone FROM Account];
    }
}