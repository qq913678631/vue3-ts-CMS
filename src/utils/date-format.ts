import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function stringUtcDateFormat(date: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(date).utcOffset(8).format(format)
}

export function numberUtcDateFormat(date: number, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(date).format(format)
}
