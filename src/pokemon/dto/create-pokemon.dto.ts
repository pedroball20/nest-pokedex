import { IsInt, IsPositive, IsString, Min, MinLength} from "class-validator";

export class CreatePokemonDto {
    @IsInt()
    @IsPositive()
    @Min(1)
    no:number;

    @IsString()
    @MinLength(1, {
        message: 'name must be at least 1 characters',
        context: {
          errorCode: 1003,
          developerNote: 'The validated string must contain 1 or more characters.',
        },
      })
    name:string;

}
