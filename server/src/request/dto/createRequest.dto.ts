import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateRequestDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;

  readonly projectId?: number;

  @IsNotEmpty()
  @IsInt()
  readonly statusId: number;
}
