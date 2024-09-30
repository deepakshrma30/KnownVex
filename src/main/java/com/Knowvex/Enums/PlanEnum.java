package com.Knowvex.Enums;

import lombok.Getter;

@Getter
public enum PlanEnum {
     SELF(5000),MENTOR(6000),PROFESSIONAL(8000);

     private final long AMOUNT;

     PlanEnum(long amount){
         this.AMOUNT = amount;
     }
}
