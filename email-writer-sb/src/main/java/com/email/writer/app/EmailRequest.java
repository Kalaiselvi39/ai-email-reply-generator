package com.email.writer.app;

import lombok.Data;

@Data
public class EmailRequest {
    private String emailContent;
    private String tone;
    EmailRequest(String emailContent,String tone){
        this.emailContent=emailContent;
        this.tone=tone;
    }
}
