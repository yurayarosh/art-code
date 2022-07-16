import { DataState, IDataField } from '.'

export interface IStyle extends IDataField {}

export interface StylessState extends DataState {
  styles: IStyle[]
}
