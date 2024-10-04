/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { SoftwareProjectCreateNestedManyWithoutComponentsInput } from "./SoftwareProjectCreateNestedManyWithoutComponentsInput";
import { Type } from "class-transformer";

@InputType()
class ComponentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SoftwareProjectCreateNestedManyWithoutComponentsInput,
  })
  @ValidateNested()
  @Type(() => SoftwareProjectCreateNestedManyWithoutComponentsInput)
  @IsOptional()
  @Field(() => SoftwareProjectCreateNestedManyWithoutComponentsInput, {
    nullable: true,
  })
  softwareProjects?: SoftwareProjectCreateNestedManyWithoutComponentsInput;
}

export { ComponentCreateInput as ComponentCreateInput };
