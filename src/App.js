import { Header } from './components/Header'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'

import { useSortedAndFiltered } from './hooks/useFilter'
import { setToken } from './store/slices/goodsSlice'
import { LogIn } from './UI/LogIn'
import Home from './Pages/Home'
import { getGoods } from './API/Auth'


function App() {
  const { isAuth, goods, error, config, isLoading } = useSelector(state => state.goods)
  const dispatch = useDispatch()
  const [filter, setFilter] = React.useState({query: "", sortBy: "name"})
  // есть два способа сортировки, 1-встроенный метод ant design, 2-кастомный хук в папке hooks
  const sortedAndFiltered = useSortedAndFiltered(filter.query, filter.sortBy, goods)

  React.useEffect(() => {
    const token = sessionStorage.getItem('token');
    //проверка на наличие токена в session storage, чтоб не оправлять запрос при перезагрузки страницы 
    if (token) {
      dispatch(getGoods({token, page: config.page, size: config.size}))
      dispatch(setToken(token))
    }
  }, [])

 


  return (
    <div>
      {isAuth ? 
      <Switch>
        <Route path = "/" exact>
          <Header 
            filter = {filter} 
            setFilter = {setFilter}/>
          <Home 
            sortedAndFiltered = {sortedAndFiltered} 
            isLoading = {isLoading}/>
        </Route>
        <Route path = "/search" exact>
          <Header 
            filter = {filter} 
            setFilter = {setFilter}/>
          <Home 
            sortedAndFiltered = {sortedAndFiltered} 
            isLoading = {isLoading}
            filter = {filter}
            setFilter = {setFilter}
            isSearchPage/>
        </Route>
        <Redirect to = "/" />
      </Switch>
      :
      <Switch>
        <Route path = "/login" exact>
          {<LogIn 
            error = {error} 
            size = {config.size} 
            page = {config.page}/>}
        </Route>
        <Redirect to = "/login" />
      </Switch>}
    </div>
  )
}

export default App


