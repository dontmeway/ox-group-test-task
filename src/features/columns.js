
export const getDateObject = (time) => {
    // function to get Date object with params(year, month, date)
    const [year, month, date] = time.toString().split(' ')[0].split('-')
    return new Date(year, month, date).getTime()
}

export const columns = [
    {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    }
    },
    {
    title: "Supplier",
    dataIndex: "supplier",
    key: "supplier",
    sorter: (a, b) => {
        return a.supplier.toLowerCase().localeCompare(b.supplier.toLowerCase())
    }
    },
    {
    title: "Updated On",
    dataIndex: "lastUpdateTime",
    key: "update",
    sorter: (a, b) => {
        return getDateObject(a.lastUpdateTime) - getDateObject(b.lastUpdateTime)
    }
    }
  ]