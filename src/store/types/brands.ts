import { DataState, IDataField } from '.'

export interface IBrand extends IDataField {}

export interface BrandsState extends DataState {
  brands: IBrand[]
}
