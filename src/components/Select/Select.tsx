import { ChangeEvent, FC } from 'react'
import { IDataField } from '../../store/types'

interface SelectProps {
  isLoading: boolean
  options: IDataField[]
  defaultValue?: string
  error?: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select: FC<SelectProps> = ({ isLoading, error, onChange, defaultValue, options }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e)
  }

  if (error) return <div>{error}</div>

  return (
    <div>
      {!isLoading ? (
        <select onChange={onChangeHandler} defaultValue={defaultValue}>
          {options.map(option => (
            <option key={option.id} value={option.slug}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        'loading...'
      )}
    </div>
  )
}

export default Select
