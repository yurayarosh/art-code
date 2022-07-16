import { ChangeEvent, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Select from './components/Select/Select'
import { useAppDispatch, useAppSelector } from './hooks/store'
import { fetchBrands } from './store/slices/brandsActions'
import { fetchServices } from './store/slices/servicesActions'
import { fetchStyles } from './store/slices/stylesActions'

enum SearchPrefixes {
  STYLE = 'st-',
  BRAND = 'b-',
  SERVICE = 's-',
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const {
    services,
    isLoading: isServicesLoading,
    error: servicesError,
  } = useAppSelector(state => state.services)
  const {
    brands,
    isLoading: isBrandsLoading,
    error: brandsError,
  } = useAppSelector(state => state.brands)
  const {
    styles,
    isLoading: isStylesLoading,
    error: stylesError,
  } = useAppSelector(state => state.styles)

  const getSortPriority = (str: string) => {
    if (str.includes(SearchPrefixes.STYLE)) return 1
    if (str.includes(SearchPrefixes.BRAND)) return 2
    if (str.includes(SearchPrefixes.SERVICE)) return 3

    return 0
  }

  const getPathName = (pref: string, slug: string) => {
    return location.pathname.includes(pref)
      ? location.pathname
          .split('/')
          .filter(str => str.length > 0)
          .map(str => (str.includes(pref) ? slug : str))
          .join('/')
      : [...location.pathname.split('/'), slug]
          .filter(str => str.length > 0)
          .sort((a, b) => getSortPriority(b) - getSortPriority(a))
          .join('/')
  }

  const getDefaultValue = (pref: string) => {
    const urlSlug = location.pathname.split('/').find(str => str.includes(pref))

    if (!urlSlug) return undefined
    return urlSlug.replace(pref, '')
  }

  useEffect(() => {
    dispatch(fetchServices())
    dispatch(fetchBrands())
    dispatch(fetchStyles())
  }, [])

  const onSelectChange = (pref: string) => (e: ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value
    const urlSlug = `${pref}${slug}`

    const pathname = getPathName(pref, urlSlug)

    navigate(pathname)
  }

  return (
    <div className="App">
      <Select
        options={services}
        onChange={onSelectChange(SearchPrefixes.SERVICE)}
        isLoading={isServicesLoading}
        error={servicesError}
        defaultValue={getDefaultValue(SearchPrefixes.SERVICE)}
      />

      <Select
        options={brands}
        onChange={onSelectChange(SearchPrefixes.BRAND)}
        isLoading={isBrandsLoading}
        error={brandsError}
        defaultValue={getDefaultValue(SearchPrefixes.BRAND)}
      />

      <Select
        options={styles}
        onChange={onSelectChange(SearchPrefixes.STYLE)}
        isLoading={isStylesLoading}
        error={stylesError}
        defaultValue={getDefaultValue(SearchPrefixes.STYLE)}
      />
    </div>
  )
}

export default App
