public with sharing class updateRecordController {
    
    @AuraEnabled(cacheable=true)
    public static Account getCurrentAccount(String accountId){
        try {
            return [SELECT Id, Name, Website FROM Account WHERE Id = :accountId LIMIT 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}