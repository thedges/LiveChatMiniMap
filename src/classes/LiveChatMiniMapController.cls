public class LiveChatMiniMapController {
    @AuraEnabled
    public static LiveChatTranscript  getLiveChatTranscript(String recordId)
    {
        try
        {   
            LiveChatTranscript lct = [SELECT Id, CaseId FROM LiveChatTranscript WHERE Id = :recordId];
            return lct;
        }
        catch (Exception e)
        {
            throw new  AuraHandledException(e.getTypeName() + ' - ' + e.getMessage() + ' [Line: ' + e.getLineNumber() + ']');
        }
        
    }
}