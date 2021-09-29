import React from 'react'
import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { getGoods } from '../API/Auth'

export const Pages = () => {
    const { token, config } = useSelector(state => state.goods)
    const dispatch = useDispatch()

    const handleChangePage = (page, size) => {
        dispatch(getGoods({token, page, size}))
      }

      const handleChangeSize = (current, value) => {
          handleChangePage(current, value)
      }

    return (
        <Pagination
          onChange = {handleChangePage}
          current = {config.page}
          pageSize = {config.size}
          onShowSizeChange = {handleChangeSize}
          defaultCurrent = {config.page}
          defaultPageSize = {config.size} 
          total = {286}/>
    )
}
