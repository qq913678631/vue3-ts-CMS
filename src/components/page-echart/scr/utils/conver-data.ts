import { coordinateData } from './coordinateData'

export const convertData = function (outdata: any) {
  const res = []
  for (let i = 0; i < outdata.length; i++) {
    const geoCoord = coordinateData[outdata[i].name]
    if (geoCoord) {
      res.push({
        name: outdata[i].name,
        value: geoCoord.concat(outdata[i].value)
      })
    }
  }
  return res
}
