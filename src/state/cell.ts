export type CellTypes = 'text' | 'code';

export interface Cell{
    id: string;
    type: CellTypes;
    content: string;
}