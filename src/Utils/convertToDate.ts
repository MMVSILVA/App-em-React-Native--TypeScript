export function convertToDate (data: string){
  //console.log(data)
  const dataArray = data.split('/')
  //console.log(dataArray )
  const dataChanged = new Date(`${dataArray[1]}/${dataArray[0]}/${dataArray[2]}`)
 //console.log(dataChanged)
  return dataChanged
}