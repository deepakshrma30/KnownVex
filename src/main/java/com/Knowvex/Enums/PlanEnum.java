package com.Knowvex.Enums;

import lombok.Getter;

@Getter
public enum PlanEnum {
     SELF(10),MENTOR(20),PROFESSIONAL(30);

     private final long AMOUNT;

     PlanEnum(long amount){
         this.AMOUNT = amount;
     }
}
