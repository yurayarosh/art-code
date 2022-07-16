import { DataState, IDataField } from '.'

export interface IService extends IDataField {}

export interface ServicesState extends DataState {
  services: IService[]
}
